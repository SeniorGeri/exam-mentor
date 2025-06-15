<?php

namespace Modules\Operational\database\seeders;

use App\Enums\RolesEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class StudentPermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = Role::findByName(RolesEnum::STUDENT->value);

    
        $role->givePermissionTo("active-course.read");

    }
}
