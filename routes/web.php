<?php

use App\Http\Controllers\Main\DashboardController;
use Illuminate\Support\Facades\Route;
use Modules\Operational\Models\ActiveCourseStatus;


Route::get('/home', fn () => redirect()->route('frontend.index'))->name('home');

Route::middleware(['auth', 'verified'])->group(function () {


    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard'); 

    Route::get('test' , function () {
        
       
        ActiveCourseStatus::find(1)->setTranslation('status', 'sq','Kerkuar');
        ActiveCourseStatus::find(2)->setTranslation('status', 'sq','Aprovuar');
        ActiveCourseStatus::find(3)->setTranslation('status', 'sq','Aktiv');
        ActiveCourseStatus::find(4)->setTranslation('status', 'sq','Perfunduar');
        ActiveCourseStatus::find(5)->setTranslation('status', 'sq','Refuzuar');
        
    return 'SUKSES FRATE';
     
    });
});

require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';


