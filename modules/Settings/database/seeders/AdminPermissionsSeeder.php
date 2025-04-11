<?php

namespace Modules\Settings\database\seeders;

use App\Enums\RolesEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class AdminPermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = Role::findByName(RolesEnum::ADMIN->value);

        $role->givePermissionTo("country.create");
        $role->givePermissionTo("country.read");
        $role->givePermissionTo("country.update");
        $role->givePermissionTo("country.delete");

    }
}
