<?php

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Vite;

describe('SPA Entry Point', function () {
    beforeEach(function () {
        $this->withoutVite();
    });

    it('renders app.blade.php with @vite directive', function () {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertViewIs('app');
        $response->assertSee('<div id="app"></div>', false);
    });

    it('includes correct meta tags', function () {
        $response = $this->get('/');

        $response->assertSee('Radiance Lux Technologies LLC', false);
        $response->assertSee('Consulting developers who build cool shit', false);
    });
});

describe('Vue Routes', function () {
    beforeEach(function () {
        $this->withoutVite();
    });

    it('returns 200 for home page', function () {
        $response = $this->get('/');

        $response->assertStatus(200);
    });

    it('returns 200 for services page', function () {
        $response = $this->get('/services');

        $response->assertStatus(200);
        $response->assertViewIs('app');
    });

    it('returns 200 for team page', function () {
        $response = $this->get('/team');

        $response->assertStatus(200);
        $response->assertViewIs('app');
    });

    it('returns 200 for skills page', function () {
        $response = $this->get('/skills');

        $response->assertStatus(200);
        $response->assertViewIs('app');
    });

    it('returns 200 for philosophy page', function () {
        $response = $this->get('/philosophy');

        $response->assertStatus(200);
        $response->assertViewIs('app');
    });

    it('returns 200 for contact page', function () {
        $response = $this->get('/contact');

        $response->assertStatus(200);
        $response->assertViewIs('app');
    });

    it('returns 200 for deeply nested routes', function () {
        $response = $this->get('/some/deep/nested/path');

        $response->assertStatus(200);
        $response->assertViewIs('app');
    });
});

describe('API Contact Endpoint', function () {
    beforeEach(function () {
        Mail::fake();
    });

    it('returns 200 with valid data', function () {
        $response = $this->postJson('/api/contact', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'message' => 'This is a test message.',
        ]);

        $response->assertStatus(200);
        $response->assertJson([
            'message' => "Message sent. We'll be in touch.",
        ]);
    });

    it('returns 422 with invalid data', function () {
        $response = $this->postJson('/api/contact', [
            'name' => '',
            'email' => 'not-an-email',
            'message' => '',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['name', 'email', 'message']);
    });
});

describe('API Routes Isolation', function () {
    it('does not catch API routes with SPA catch-all', function () {
        $response = $this->get('/api/contact');

        expect($response->status())->not->toBe(200);
        $response->assertStatus(405);
    });

    it('does not catch API routes with different methods', function () {
        $response = $this->get('/api/contact');

        $response->assertStatus(405);
    });

    it('allows POST to API routes', function () {
        Mail::fake();

        $response = $this->postJson('/api/contact', [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'message' => 'Test message',
        ]);

        $response->assertStatus(200);
    });
});

describe('404 Handling', function () {
    beforeEach(function () {
        $this->withoutVite();
    });

    it('returns SPA for non-existent routes', function () {
        $response = $this->get('/non-existent-page');

        $response->assertStatus(200);
        $response->assertViewIs('app');
        $response->assertSee('<div id="app"></div>', false);
    });

    it('returns SPA for random string routes', function () {
        $randomPath = '/page-' . uniqid();
        $response = $this->get($randomPath);

        $response->assertStatus(200);
        $response->assertViewIs('app');
    });

    it('returns SPA for routes with special characters', function () {
        $response = $this->get('/test-page-123_with.special');

        $response->assertStatus(200);
        $response->assertViewIs('app');
    });
});
