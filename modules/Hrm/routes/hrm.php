<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Modules\Hrm\Controllers\Instructor\InstructorController;
use Modules\Hrm\Controllers\Student\StudentController;

Route::prefix('instructor')->as('instructor.')->middleware(['web',  'auth:sanctum'])->group(function () {

    Route::get('/list', [InstructorController::class, 'index'])->name('list')->permission('instructor.read');
    Route::get('load', [InstructorController::class, 'show'])->name('load')->permission('instructor.read');
    Route::post('/list', [InstructorController::class, 'store'])->name('store')->permission('instructor.create');
    Route::put('/list/{instructor}', [InstructorController::class, 'update'])->name('update')->permission('instructor.update');
    Route::delete('/list/{instructor}', [InstructorController::class, 'destroy'])->name('destroy')->permission('instructor.delete');
});

Route::prefix('student')->as('student.')->middleware(['web',  'auth:sanctum'])->group(function () {

    Route::get('/list', [StudentController::class, 'index'])->name('list')->permission('student.read');
    Route::get('load', [StudentController::class, 'show'])->name('load')->permission('student.read');
    Route::post('/list', [StudentController::class, 'store'])->name('store')->permission('student.create');
    Route::put('/list/{student}', [StudentController::class, 'update'])->name('update')->permission('student.update');
    Route::delete('/list/{student}', [StudentController::class, 'destroy'])->name('destroy')->permission('student.delete');
});
