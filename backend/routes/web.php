<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;

// When Vue SPA build is deployed to public/ (see README), serve it for all non-API GET requests.
Route::get('/{any?}', function (Request $request) {
    $path = $request->path();
    $filePath = public_path($path);

    if ($path && File::exists($filePath) && File::isFile($filePath)) {
        return response()->file($filePath);
    }

    $spaIndex = public_path('index.html');
    if (File::exists($spaIndex)) {
        return response()->file($spaIndex);
    }

    return view('welcome');
})->where('any', '.*');
