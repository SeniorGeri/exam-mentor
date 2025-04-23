<?php

declare(strict_types=1);

namespace Modules\Settings\database\seeders;

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

        $role->givePermissionTo("country.create");
        $role->givePermissionTo("country.read");
        $role->givePermissionTo("country.update");
        $role->givePermissionTo("country.delete");

        $role->givePermissionTo("language.create");
        $role->givePermissionTo("language.read");
        $role->givePermissionTo("language.update");
        $role->givePermissionTo("language.delete");

        $role->givePermissionTo("city.create");
        $role->givePermissionTo("city.read");
        $role->givePermissionTo("city.update");
        $role->givePermissionTo("city.delete");

        $role->givePermissionTo("currency.create");
        $role->givePermissionTo("currency.read");
        $role->givePermissionTo("currency.update");
        $role->givePermissionTo("currency.delete");

        $role->givePermissionTo("payment.create");
        $role->givePermissionTo("payment.read");
        $role->givePermissionTo("payment.update");
        $role->givePermissionTo("payment.delete");
    }
}
