# RadianceLux (Project)

A Laravel + Vue.js SPA for a lighting design studio portfolio website.

## Project Structure

This is a single-project Laravel application with Vue.js SPA frontend:

- **Laravel Backend** - API routes, controllers, and contact form handling
- **Vue.js Frontend** - SPA with Vue Router, built with Vite
- **All code in root** - No separate backend/frontend folders

## Installation

1. **Install PHP dependencies**
   ```bash
   composer install
   ```

2. **Install JavaScript dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Database setup** (default is SQLite; creates `database/database.sqlite` and runs migrations)
   ```bash
   touch database/database.sqlite
   php artisan migrate
   ```
   On Windows PowerShell: `New-Item -ItemType File -Path database\database.sqlite -Force` then `php artisan migrate`

5. **Start Laravel server** (terminal 1)
   ```bash
   php artisan serve
   ```
   Runs on http://localhost:8000 (or http://127.0.0.1:8000). **Use this URL for the app** — not the Vite URL.

6. **Start Vite dev server** (terminal 2, optional for HMR)
   ```bash
   npm run dev
   ```
   Vite runs on http://localhost:5173; that page is only the dev-server info. The actual Vue app is always served by Laravel at the URL in step 5.

## Production Build

Build optimized assets for production:

```bash
npm run build
```

This compiles Vue components and outputs to `public/build/`.

## Deployment (Coolify)

1. Connect Git repository to Coolify
2. Set build command: `npm run build`
3. Set start command: `php artisan serve --host=0.0.0.0 --port=8000`
4. Configure environment variables in Coolify dashboard
5. Ensure `APP_ENV=production` and `APP_DEBUG=false`

## Contact Form API

### POST `/api/contact`

Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in your services..."
}
```

**Validation Rules:**
- `name`: required, string, max:255
- `email`: required, email
- `message`: required, string, min:10, max:5000

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Validation Error (422):**
```json
{
  "message": "The message field is required.",
  "errors": {
    "message": ["The message field is required."]
  }
}
```

**Server Error (500):**
```json
{
  "success": false,
  "message": "Failed to send message. Please try again."
}
```

## Development

- Vue components are in `resources/js/`
- API routes are in `routes/api.php`
- Controllers are in `app/Http/Controllers/`
- Vite config: `vite.config.js`

### Troubleshooting: "Failed to listen" on Windows

If `php artisan serve` fails with "Failed to listen on 127.0.0.1:8000 (reason: ?)" on Windows, the usual cause is PHP's `variables_order` in php.ini. Fix:

1. Find your php.ini: `php --ini`
2. Set `variables_order = "GPCS"` (change from `"EGPCS"` if present)
3. Restart the terminal and run `php artisan serve` again

With Laravel Herd, php.ini is typically at `~/.config/herd/bin/php83/php.ini`.
