# RadianceLux

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

4. **Start Laravel server** (terminal 1)
   ```bash
   php artisan serve
   ```
   Runs on http://localhost:8000

5. **Start Vite dev server** (terminal 2)
   ```bash
   npm run dev
   ```
   Provides Hot Module Replacement (HMR) for Vue components

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
