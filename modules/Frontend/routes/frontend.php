<?php 

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('web')->group(function () {
    Route::get('/frontend', function () {
        return Inertia::render('Frontend::page');
    })->name('frontend.index');
});
