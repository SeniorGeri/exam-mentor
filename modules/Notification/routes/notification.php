<?php

use Illuminate\Support\Facades\Route;
use Modules\Notification\Controllers\ContactListController;
use Modules\Notification\Controllers\NotificationController;

Route::middleware(['web','auth:sanctum'])->group(function () {

    Route::get('/contact', [ContactListController::class, 'index'])->name('contact.list')->permission('contact.read');
    Route::get('/contact/load', [ContactListController::class, 'show'])->name('contact.load')->permission('contact.read');
    Route::put('/contact/{contact}', [ContactListController::class, 'update'])->name('contact.update')->permission('contact.update');
    Route::delete('/contact/{contact}', [ContactListController::class, 'destroy'])->name('contact.delete')->permission('contact.delete');
        

    Route::get('/notification', [NotificationController::class, 'index'])->name('notification.list')->permission('notification.read');
    Route::get('/notification/load', [NotificationController::class, 'show'])->name('notification.load')->permission('notification.read');
    Route::put('/notification/{notification}', [NotificationController::class, 'update'])->name('notification.update')->permission('notification.update');
    Route::delete('/notification/{notification}', [NotificationController::class, 'destroy'])->name('notification.delete')->permission('notification.delete');
});