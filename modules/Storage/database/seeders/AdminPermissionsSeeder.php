<?php

declare(strict_types=1);

namespace Modules\Storage\database\seeders;

use App\Enums\RolesEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

final class AdminPermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = Role::findByName(RolesEnum::ADMIN->value);

        $role->givePermissionTo("slider.create");
        $role->givePermissionTo("slider.read");
        $role->givePermissionTo("slider.update");
        $role->givePermissionTo("slider.delete");

    }
}
