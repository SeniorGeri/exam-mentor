<?php

use Illuminate\Routing\Route;
use Modules\Notification\Controllers\ContactListController;

Route::get('/contact', [ContactListController::class, 'index'])->name('contact.list')->middleware('permission:contact.read');
Route::get('/contact/load', [ContactListController::class, 'show'])->name('contact.load')->middleware('permission:contact.read');
    
