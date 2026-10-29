interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  RESEND_FROM?: string;
}

const RATE_LIMIT_WINDOW_SECONDS = 60;
const MAX_REQUESTS_PER_WINDOW = 5;

async function isRateLimited(request: Request): Promise<boolean> {
  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
  const cache = caches.default;
  const key = new Request(`https://rate-limit.radiancelux.internal/${encodeURIComponent(ip)}`);
  const existing = await cache.match(key);
  const count = existing ? Number(await existing.text()) || 0 : 0;
  if (count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  await cache.put(key, new Response(String(count + 1)), {
    expirationTtl: RATE_LIMIT_WINDOW_SECONDS,
  });
  return false;
}

function validationErrors(body: Record<string, unknown>): Record<string, string[]> | null {
  const errors: Record<string, string[]> = {};
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message : '';

  if (!name) {
    errors.name = ['The name field is required.'];
  } else if (name.length > 255) {
    errors.name = ['The name may not be greater than 255 characters.'];
  }

  if (!email) {
    errors.email = ['The email field is required.'];
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ['The email must be a valid email address.'];
  }

  if (!message.trim()) {
    errors.message = ['The message field is required.'];
  } else if (message.length > 5000) {
    errors.message = ['The message may not be greater than 5000 characters.'];
  }

  return Object.keys(errors).length ? errors : null;
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context;

  if (await isRateLimited(request)) {
    return Response.json({ message: 'Too many requests. Try again in a minute.' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: 'Invalid JSON body.' }, { status: 400 });
  }

  const honeypot = typeof body.website === 'string' ? body.website.trim() : '';
  if (honeypot) {
    return Response.json({ message: "Message sent. We'll be in touch." });
  }

  const errors = validationErrors(body);
  if (errors) {
    return Response.json({ errors }, { status: 422 });
  }

  const name = (body.name as string).trim();
  const email = (body.email as string).trim();
  const message = (body.message as string).trim();

  if (!env.RESEND_API_KEY || !env.CONTACT_TO) {
    return Response.json({ message: 'Failed to send message.' }, { status: 500 });
  }

  const from = env.RESEND_FROM ?? 'Radiance Lux Contact <onboarding@resend.dev>';
  const subject = 'Radiance Lux contact: ' + message.slice(0, 50);
  const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [env.CONTACT_TO],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      return Response.json({ message: 'Failed to send message.' }, { status: 500 });
    }
  } catch {
    return Response.json({ message: 'Failed to send message.' }, { status: 500 });
  }

  return Response.json({ message: "Message sent. We'll be in touch." });
}
