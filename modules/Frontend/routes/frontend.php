<?php 

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/frontend', function () {
    return Inertia::render('Frontend::page');
})->name('frontend.index');
