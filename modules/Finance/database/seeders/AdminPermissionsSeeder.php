<?php

declare(strict_types=1);

namespace Modules\Finance\database\seeders;

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

        $role->givePermissionTo("expense.create");
        $role->givePermissionTo("expense.read");
        $role->givePermissionTo("expense.update");
        $role->givePermissionTo("expense.delete");

        $role->givePermissionTo("liquidation.create");
        $role->givePermissionTo("liquidation.read");
        $role->givePermissionTo("liquidation.update");
        $role->givePermissionTo("liquidation.delete");

        $role->givePermissionTo("transaction.create");
        $role->givePermissionTo("transaction.read");
        $role->givePermissionTo("transaction.update");
        $role->givePermissionTo("transaction.delete");
}
}