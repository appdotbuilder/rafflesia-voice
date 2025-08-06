<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ReportController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Home page
Route::get('/', [HomeController::class, 'index'])->name('home');

// Public pages
Route::get('/forum', function () {
    return Inertia::render('forum');
})->name('forum');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('terms');

Route::get('/government-responses', function () {
    return Inertia::render('government-responses');
})->name('government-responses');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    // Report routes
    Route::resource('reports', ReportController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
