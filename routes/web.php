<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Modules\Hrm\Models\Instructor;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('test' , function () {
        $isntructors = Instructor::create([
            'name' => 'name',
            'email'=> 'zzemaisl@test.com',
            'password' => 12345678
        ]);

        dd($isntructors);
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';


