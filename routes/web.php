<?php

use App\Enums\RolesEnum;
use App\Mail\ContactMail;
use App\Mail\LiquidationRequestMail;
use App\Mail\LiquidationUpdateMail;
use App\Mail\OrderUpdateMail;
use App\Mail\WelcomeMail;
use App\Models\User;
use App\Http\Controllers\Main\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Modules\Finance\Models\Liquidation;
use Modules\Operational\Models\ActiveCourse;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

Route::get('/', fn () => redirect()->route('frontend.index'))->name('home');

Route::middleware(['auth', 'verified'])->group(function () {



    // Route::get('dashboard', function () {
    //     return Inertia::render('dashboard');
    // })->name('dashboard');  

    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard'); 

    Route::get('test' , function () {
        
        // return new ContactMail();
        $liquidation = Liquidation::first();
        $activeCourse = ActiveCourse::first();
        $user = User::first();
        return new OrderUpdateMail(activeCourse: $activeCourse);
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


