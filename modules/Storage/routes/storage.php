<?php

declare(strict_types=1);

use Modules\Storage\Controllers\SliderController;
use Illuminate\Support\Facades\Route;

Route::prefix('backoffice/')->group(function () {
    
    Route::prefix('slider')->as('slider.')->middleware(['web',  'auth:sanctum'])->group(function () {

        Route::get('/list', [SliderController::class, 'index'])->name('list')->permission('slider.read');
        Route::get('load', [SliderController::class, 'show'])->name('load')->permission('slider.read');
        Route::post('/list', [SliderController::class, 'store'])->name('store')->permission('slider.create');
        Route::put('/list/{slider}', [SliderController::class, 'update'])->name('update')->permission('slider.update');
        Route::delete('/list/{slider}', [SliderController::class, 'destroy'])->name('destroy')->permission('slider.delete');
    });

});