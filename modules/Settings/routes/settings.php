<?php

declare(strict_types=1);

use Modules\Settings\Controllers\CountryController;
use Modules\Settings\Controllers\LanguageController;
use Illuminate\Support\Facades\Route;
use Modules\Settings\Controllers\CityController;
use Modules\Settings\Controllers\CurrencyController;
use Modules\Settings\Controllers\PaymentController;

Route::prefix('backoffice/')->group(function () {
    
    Route::prefix('country')->as('country.')->middleware(['web',  'auth:sanctum'])->group(function () {

        Route::get('/list', [CountryController::class, 'index'])->name('list')->permission('country.read');
        Route::get('load', [CountryController::class, 'show'])->name('load')->permission('country.read');
        Route::post('/list', [CountryController::class, 'store'])->name('store')->permission('country.create');
        Route::put('/list/{country}', [CountryController::class, 'update'])->name('update')->permission('country.update');
        Route::delete('/list/{country}', [CountryController::class, 'destroy'])->name('destroy')->permission('country.delete');
    });

    Route::prefix('language')->as('language.')->middleware(['web',  'auth:sanctum'])->group(function () {

        Route::get('/list', [LanguageController::class, 'index'])->name('list')->permission('language.read');
        Route::get('load', [LanguageController::class, 'show'])->name('load')->permission('language.read');
        Route::post('/list', [LanguageController::class, 'store'])->name('store')->permission('language.create');
        Route::put('/list/{language}', [LanguageController::class, 'update'])->name('update')->permission('language.update');
        Route::delete('/list/{language}', [LanguageController::class, 'destroy'])->name('destroy')->permission('language.delete');
    });

    Route::prefix('city')->as('city.')->middleware(['web',  'auth:sanctum'])->group(function () {

        Route::get('/list', [CityController::class, 'index'])->name('list')->permission('city.read');
        Route::get('load', [CityController::class, 'show'])->name('load')->permission('city.read');
        Route::post('/list', [CityController::class, 'store'])->name('store')->permission('city.create');
        Route::put('/list/{city}', [CityController::class, 'update'])->name('update')->permission('city.update');
        Route::delete('/list/{city}', [CityController::class, 'destroy'])->name('destroy')->permission('city.delete');
    });

    Route::prefix('currency')->as('currency.')->middleware(['web',  'auth:sanctum'])->group(function () {

        Route::get('/list', [CurrencyController::class, 'index'])->name('list')->permission('currency.read');
        Route::get('load', [CurrencyController::class, 'show'])->name('load')->permission('currency.read');
        Route::post('/list', [CurrencyController::class, 'store'])->name('store')->permission('currency.create');
        Route::put('/list/{currency}', [CurrencyController::class, 'update'])->name('update')->permission('currency.update');
        Route::delete('/list/{currency}', [CurrencyController::class, 'destroy'])->name('destroy')->permission('currency.delete');
    });

    Route::prefix('payment')->as('payment.')->middleware(['web',  'auth:sanctum'])->group(function () {

        Route::get('/list', [PaymentController::class, 'index'])->name('list')->permission('payment.read');
        Route::get('load', [PaymentController::class, 'show'])->name('load')->permission('payment.read');
        Route::post('/list', [PaymentController::class, 'store'])->name('store')->permission('payment.create');
        Route::put('/list/{payment}', [PaymentController::class, 'update'])->name('update')->permission('payment.update');
        Route::delete('/list/{payment}', [PaymentController::class, 'destroy'])->name('destroy')->permission('payment.delete');
    });

});
