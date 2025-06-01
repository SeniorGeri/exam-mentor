<?php

namespace Modules\Notification\database\seeders;

use App\Enums\RolesEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class InstrustorPermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = Role::findByName(RolesEnum::INSTRUCTOR->value);
        
        $role->givePermissionTo("notification.read");
        $role->givePermissionTo("notification.delete");
        $role->givePermissionTo("notification.update");

    }
}
