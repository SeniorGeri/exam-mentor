<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Modules\Media\Controllers\MediaController;
use Modules\Media\Controllers\MediaUploadController;

Route::prefix('media')
    ->as('media.')
    ->middleware(['web'])
    ->group(function () {

        Route::get('/', [MediaController::class, 'show'])->name('view');
        Route::put('/update/{media}', [MediaController::class, 'update'])->name('update');
        Route::delete('/delete/{media}', [MediaController::class, 'destroy'])->name('destroy');
        Route::get('/search', [MediaController::class, 'search'])->name('search');

        Route::post('/upload', [MediaUploadController::class, 'upload'])->name('upload');
        Route::delete('/upload', [MediaUploadController::class, 'remove'])->name('remove');

    });




