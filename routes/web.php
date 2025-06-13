<?php

use App\Enums\RolesEnum;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

Route::get('/', fn () => redirect()->route('frontend.index'))->name('home');

Route::middleware(['auth', 'verified'])->group(function () {



    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('test' , function () {
        
        $role = Role::findByName(RolesEnum::INSTRUCTOR->value);

    
        $role->givePermissionTo("course.read");
        $role->givePermissionTo("active-course.read");
        $role->givePermissionTo("school.read");
        $role->givePermissionTo("grade.read");
        $role->givePermissionTo("subject.read");


        $role->givePermissionTo("course-instructor.create");
        $role->givePermissionTo("course-instructor.read");
        $role->givePermissionTo("course-instructor.update");
        $role->givePermissionTo("course-instructor.delete");
        
    return 'SUKSES FRATE';
        // Permission::create(["name" => "contact.read"]);
        // Permission::create(["name" => "contact.delete"]);
        // Permission::create(["name" => "contact.update"]);
        // Permission::create(["name" => "notification.read"]);
        // Permission::create(["name" => "notification.delete"]);
        // Permission::create(["name" => "notification.update"]);

        $role = Role::findByName(RolesEnum::ADMIN->value);
        $role->givePermissionTo("notification.read");
        $role->givePermissionTo("notification.delete");
        $role->givePermissionTo("notification.update");
        $role->givePermissionTo("contact.update");

        $role = Role::findByName(RolesEnum::STUDENT->value);
        $role->givePermissionTo("notification.read");
        $role->givePermissionTo("notification.delete");
        $role->givePermissionTo("notification.update");

        $role = Role::findByName(RolesEnum::INSTRUCTOR->value);
        $role->givePermissionTo("notification.read");
        $role->givePermissionTo("notification.delete");
        $role->givePermissionTo("notification.update");

        dd('return');
    });
});

require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';


