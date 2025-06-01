<?php

namespace Modules\Finance\database\seeders;

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

    
        $role->givePermissionTo("liquidation.create");
        $role->givePermissionTo("liquidation.read");

        $role->givePermissionTo("course-pricing.create");
        $role->givePermissionTo("course-pricing.read");
        $role->givePermissionTo("course-pricing.update");
        $role->givePermissionTo("course-pricing.delete");
    }
}
