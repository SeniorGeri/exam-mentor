<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Modules\Operational\Controllers\ActiveCourseController;
use Modules\Operational\Controllers\SchoolController;
use Modules\Operational\Controllers\SubjectController;
use Modules\Operational\Controllers\GradeController;
use Modules\Operational\Controllers\CourseController;
use Modules\Operational\Controllers\CourseInstructorController;

Route::prefix('school')->as('school.')->middleware(['web',  'auth:sanctum'])->group(function () {

    Route::get('/list', [SchoolController::class, 'index'])->name('list')->permission('school.read');
    Route::get('load', [SchoolController::class, 'show'])->name('load')->permission('school.read');
    Route::post('/list', [SchoolController::class, 'store'])->name('store')->permission('school.create');
    Route::put('/list/{school}', [SchoolController::class, 'update'])->name('update')->permission('school.update');
    Route::delete('/list/{school}', [SchoolController::class, 'destroy'])->name('destroy')->permission('school.delete');
});

Route::prefix('grade')->as('grade.')->middleware(['web',  'auth:sanctum'])->group(function () {

    Route::get('/list', [GradeController::class, 'index'])->name('list')->permission('grade.read');
    Route::get('load', [GradeController::class, 'show'])->name('load')->permission('grade.read');
    Route::post('/list', [GradeController::class, 'store'])->name('store')->permission('grade.create');
    Route::put('/list/{grade}', [GradeController::class, 'update'])->name('update')->permission('grade.update');
    Route::delete('/list/{grade}', [GradeController::class, 'destroy'])->name('destroy')->permission('grade.delete');
});

Route::prefix('subject')->as('subject.')->middleware(['web',  'auth:sanctum'])->group(function () {

    Route::get('/list', [SubjectController::class, 'index'])->name('list')->permission('subject.read');
    Route::get('load', [SubjectController::class, 'show'])->name('load')->permission('subject.read');
    Route::post('/list', [SubjectController::class, 'store'])->name('store')->permission('subject.create');
    Route::put('/list/{subject}', [SubjectController::class, 'update'])->name('update')->permission('subject.update');
    Route::delete('/list/{subject}', [SubjectController::class, 'destroy'])->name('destroy')->permission('subject.delete');
});

Route::prefix('course')->as('course.')->middleware(['web',  'auth:sanctum'])->group(function () {

    Route::get('/list', [CourseController::class, 'index'])->name('list')->permission('course.read');
    Route::get('load', [CourseController::class, 'show'])->name('load')->permission('course.read');
    Route::post('/list', [CourseController::class, 'store'])->name('store')->permission('course.create');
    Route::put('/list/{course}', [CourseController::class, 'update'])->name('update')->permission('course.update');
    Route::delete('/list/{course}', [CourseController::class, 'destroy'])->name('destroy')->permission('course.delete');
});


Route::prefix('active-course')->as('active-course.')->middleware(['web',  'auth:sanctum'])->group(function () {

    Route::get('/list', [ActiveCourseController::class, 'index'])->name('list')->permission('active-course.read');
    Route::get('load', [ActiveCourseController::class, 'show'])->name('load')->permission('active-course.read');
    Route::put('/list/{activeCourse}', [ActiveCourseController::class, 'update'])->name('update')->permission('active-course.update');
    Route::delete('/list/{activeCourse}', [ActiveCourseController::class, 'destroy'])->name('destroy')->permission('active-course.delete');
});

Route::prefix('course-instructor')->as('course-instructor.')->middleware(['web',  'auth:sanctum'])->group(function () {

    Route::get('/list', [CourseInstructorController::class, 'index'])->name('list')->permission('course-instructor.read');
    Route::get('load', [CourseInstructorController::class, 'show'])->name('load')->permission('course-instructor.read');
    Route::post('list', [CourseInstructorController::class, 'store'])->name('store')->permission('course-instructor.create');
    Route::put('list/{courseInstructor}', [CourseInstructorController::class, 'update'])->name('update')->permission('course-instructor.update');
    Route::delete('/list/{courseInstructor}', [CourseInstructorController::class, 'destroy'])->name('destroy')->permission('course-instructor.delete');
});
