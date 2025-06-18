<?php

use App\Enums\RolesEnum;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

Route::get('/', fn () => redirect()->route('frontend.index'))->name('home');

Route::middleware(['auth', 'verified'])->group(function () {



    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');  

    Route::get('test' , function () {
        
        return new ContactMail();
        // Permission::create(["name" => "active-course.lessons"]);

        $role = Role::findByName(RolesEnum::INSTRUCTOR->value);
        $role->givePermissionTo("liquidation.create");

        // $role = Role::findByName(RolesEnum::STUDENT->value);
        // $role->givePermissionTo("active-course.read");
    

        // $role = Role::findByName(RolesEnum::ADMIN->value);
        // $role->givePermissionTo("active-course.lessons");
        
    return 'SUKSES FRATE';
     
    });
});

require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';


