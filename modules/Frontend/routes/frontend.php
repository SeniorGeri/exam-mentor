<?php 

use Illuminate\Support\Facades\Route;
use Modules\Frontend\Controllers\MainController;
use Modules\Frontend\Controllers\TeamController;
use Modules\Frontend\Controllers\ContactController;
use Modules\Frontend\Controllers\AboutController;
use Modules\Frontend\Controllers\CourseOrderController;

Route::middleware('web')->group(function () {
    Route::get('/frontend', [MainController::class, 'index'])->name('frontend.index');
    Route::get('/frontend/browse/{searchKey?}', [MainController::class, 'browse'])->name('frontend.browse');
    Route::get('/frontend/team', [TeamController::class, 'index'])->name('frontend.team');
    Route::get('/frontend/contact', [ContactController::class, 'index'])->name('frontend.contact');
    Route::post('/frontend/contact', [ContactController::class, 'store'])->name('frontend.contact.store');
    Route::get('/frontend/about', [AboutController::class, 'index'])->name('frontend.about');
    Route::get('/frontend/privacy', [AboutController::class, 'privacy'])->name('frontend.privacy');
    Route::get('/frontend/terms', [AboutController::class, 'terms'])->name('frontend.terms');
    Route::get('/frontend/course/{course}', [MainController::class, 'show'])->name('frontend.course');

    Route::post('/frontend/order', [CourseOrderController::class, 'store'])->name('frontend.order.store');
    Route::get('/frontend/success', [CourseOrderController::class, 'success'])->name('frontend.success');

});
