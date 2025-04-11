<?php

declare(strict_types=1);

use Modules\Settings\Controllers\CountryController;
use Illuminate\Support\Facades\Route;

Route::prefix('country')
    ->as('country.')
    ->middleware(['web',  'auth:sanctum'])
    ->group(function () {

        Route::get('/list', [CountryController::class, 'index'])->name('list');
        Route::get('load', [CountryController::class, 'show'])->name('load');
        Route::post('/list', [CountryController::class, 'store'])->name('store');
        Route::put('/list/{country}', [CountryController::class, 'update'])->name('update');
        Route::delete('/list/{country}', [CountryController::class, 'destroy'])->name('destroy');

    });
