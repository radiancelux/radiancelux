<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        try {
            Mail::raw(
                "Name: {$data['name']}\nEmail: {$data['email']}\n\nMessage:\n{$data['message']}",
                function ($message) use ($data) {
                    $message->to(config('mail.from.address'))
                        ->replyTo($data['email'], $data['name'])
                        ->subject('Radiance Lux contact: ' . substr($data['message'], 0, 50));
                }
            );
        } catch (\Throwable $e) {
            return response()->json(['message' => 'Failed to send message.'], 500);
        }

        return response()->json(['message' => 'Message sent. We\'ll be in touch.']);
    }
}
