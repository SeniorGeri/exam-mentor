<?php

namespace Modules\Operational\database\seeders;

use App\Enums\RolesEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class InstructorPermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = Role::findByName(RolesEnum::INSTRUCTOR->value);

    
        $role->givePermissionTo("course.create");
        $role->givePermissionTo("course.read");
        $role->givePermissionTo("course.update");
        $role->givePermissionTo("course.delete");

        $role->givePermissionTo("active-course.create");
        $role->givePermissionTo("active-course.read");
        $role->givePermissionTo("active-course.update");
        $role->givePermissionTo("active-course.delete");

    }
}
