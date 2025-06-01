<?php

use App\Enums\RolesEnum;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;



Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/', function () {
        return Inertia::render('dashboard');
    })->name('home');

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('test' , function () {
        
 
        
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


