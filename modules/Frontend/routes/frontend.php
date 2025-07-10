<?php 

use Illuminate\Support\Facades\Route;
use Modules\Frontend\Controllers\MainController;
use Modules\Frontend\Controllers\TeamController;
use Modules\Frontend\Controllers\ContactController;
use Modules\Frontend\Controllers\AboutController;
use Modules\Frontend\Controllers\CourseOrderController;

Route::middleware('web')->group(function () {
    Route::get('/', [MainController::class, 'index'])->name('frontend.index');
    Route::get('/browse/{searchKey?}', [MainController::class, 'browse'])->name('frontend.browse');
    Route::get('/team', [TeamController::class, 'index'])->name('frontend.team');
    Route::get('/contact', [ContactController::class, 'index'])->name('frontend.contact');
    Route::post('/contact', [ContactController::class, 'store'])->name('frontend.contact.store');
    Route::get('/about', [AboutController::class, 'index'])->name('frontend.about');
    Route::get('/privacy', [AboutController::class, 'privacy'])->name('frontend.privacy');
    Route::get('/terms', [AboutController::class, 'terms'])->name('frontend.terms');
    Route::get('/course/{course}', [MainController::class, 'show'])->name('frontend.course');

    Route::post('/order', [CourseOrderController::class, 'store'])->name('frontend.order.store');
    Route::get('/success', [CourseOrderController::class, 'success'])->name('frontend.success');

});
