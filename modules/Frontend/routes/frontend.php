<?php 

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('web')->group(function () {
    Route::get('/frontend', function () {
        return Inertia::render('Frontend::main');
    })->name('frontend.index');

    Route::get('/frontend/browse', function () {
        return Inertia::render('Frontend::browse');
    })->name('frontend.browse');
});
