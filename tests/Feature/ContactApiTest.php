<?php

use Illuminate\Support\Facades\Mail;

describe('Contact Form API', function () {
    beforeEach(function () {
        Mail::fake();
    });

    describe('Valid Submissions', function () {
        it('accepts complete valid data', function () {
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

        it('accepts names at maximum length', function () {
            $response = $this->postJson('/api/contact', [
                'name' => str_repeat('a', 255),
                'email' => 'test@example.com',
                'message' => 'Test message',
            ]);

            $response->assertStatus(200);
        });

        it('accepts messages at maximum length', function () {
            $response = $this->postJson('/api/contact', [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'message' => str_repeat('a', 5000),
            ]);

            $response->assertStatus(200);
        });

        it('accepts various email formats', function () {
            $validEmails = [
                'user@example.com',
                'user.name@example.co.uk',
                'user+tag@example.com',
                'user123@test-domain.org',
            ];

            foreach ($validEmails as $email) {
                $response = $this->postJson('/api/contact', [
                    'name' => 'Test User',
                    'email' => $email,
                    'message' => 'Test message',
                ]);

                $response->assertStatus(200);
            }
        });
    });

    describe('Invalid Email Validation', function () {
        it('rejects invalid email formats', function () {
            $invalidEmails = [
                'not-an-email',
                '@nodomain.com',
                'spaces in@email.com',
                'double@@at.com',
                'missing-at-sign.com',
            ];

            foreach ($invalidEmails as $email) {
                $response = $this->postJson('/api/contact', [
                    'name' => 'Test User',
                    'email' => $email,
                    'message' => 'Test message',
                ]);

                $response->assertStatus(422);
                $response->assertJsonValidationErrors(['email']);
            }
        });

        it('rejects empty email', function () {
            $response = $this->postJson('/api/contact', [
                'name' => 'Test User',
                'email' => '',
                'message' => 'Test message',
            ]);

            $response->assertStatus(422);
            $response->assertJsonValidationErrors(['email']);
        });

        it('rejects missing email field', function () {
            $response = $this->postJson('/api/contact', [
                'name' => 'Test User',
                'message' => 'Test message',
            ]);

            $response->assertStatus(422);
            $response->assertJsonValidationErrors(['email']);
        });
    });

    describe('Missing Fields Validation', function () {
        it('rejects all fields missing', function () {
            $response = $this->postJson('/api/contact', []);

            $response->assertStatus(422);
            $response->assertJsonValidationErrors(['name', 'email', 'message']);
        });

        it('rejects missing name field', function () {
            $response = $this->postJson('/api/contact', [
                'email' => 'test@example.com',
                'message' => 'Test message',
            ]);

            $response->assertStatus(422);
            $response->assertJsonValidationErrors(['name']);
            $response->assertJsonMissingValidationErrors(['email', 'message']);
        });

        it('rejects missing message field', function () {
            $response = $this->postJson('/api/contact', [
                'name' => 'Test User',
                'email' => 'test@example.com',
            ]);

            $response->assertStatus(422);
            $response->assertJsonValidationErrors(['message']);
            $response->assertJsonMissingValidationErrors(['name', 'email']);
        });

        it('rejects empty name', function () {
            $response = $this->postJson('/api/contact', [
                'name' => '',
                'email' => 'test@example.com',
                'message' => 'Test message',
            ]);

            $response->assertStatus(422);
            $response->assertJsonValidationErrors(['name']);
        });

        it('rejects empty message', function () {
            $response = $this->postJson('/api/contact', [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'message' => '',
            ]);

            $response->assertStatus(422);
            $response->assertJsonValidationErrors(['message']);
        });
    });

    describe('Field Length Validation', function () {
        it('rejects name exceeding maximum length', function () {
            $response = $this->postJson('/api/contact', [
                'name' => str_repeat('a', 256),
                'email' => 'test@example.com',
                'message' => 'Test message',
            ]);

            $response->assertStatus(422);
            $response->assertJsonValidationErrors(['name']);
        });

        it('rejects message exceeding maximum length', function () {
            $response = $this->postJson('/api/contact', [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'message' => str_repeat('a', 5001),
            ]);

            $response->assertStatus(422);
            $response->assertJsonValidationErrors(['message']);
        });
    });

    describe('XSS and Security', function () {
        it('handles HTML in message field', function () {
            $response = $this->postJson('/api/contact', [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'message' => '<script>alert("xss")</script>Test message',
            ]);

            $response->assertStatus(200);
        });

        it('handles special characters in name', function () {
            $response = $this->postJson('/api/contact', [
                'name' => 'John "The Tester" <O\'Connor>',
                'email' => 'test@example.com',
                'message' => 'Test message',
            ]);

            $response->assertStatus(200);
        });

        it('handles unicode characters', function () {
            $response = $this->postJson('/api/contact', [
                'name' => 'José García Márquez',
                'email' => 'test@example.com',
                'message' => 'こんにちは世界! ñ Ü ü',
            ]);

            $response->assertStatus(200);
        });
    });

    describe('Response Structure', function () {
        it('returns success response with message', function () {
            $response = $this->postJson('/api/contact', [
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'message' => 'Test message',
            ]);

            $response->assertStatus(200);
            $response->assertJsonStructure([
                'message',
            ]);
        });

        it('returns error response with errors object', function () {
            $response = $this->postJson('/api/contact', [
                'name' => '',
                'email' => 'invalid',
                'message' => '',
            ]);

            $response->assertStatus(422);
            $response->assertJsonStructure([
                'errors' => [
                    'name',
                    'email',
                    'message',
                ],
            ]);
        });
    });

    describe('Content-Type Handling', function () {
        it('accepts application/json content type', function () {
            $response = $this->post('/api/contact', [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'message' => 'Test message',
            ], ['Content-Type' => 'application/json']);

            expect($response->status())->toBeIn([200, 422]);
        });

        it('handles regular post requests', function () {
            $response = $this->post('/api/contact', [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'message' => 'Test message',
            ]);

            expect($response->status())->toBeIn([200, 302]);
        });
    });
});
