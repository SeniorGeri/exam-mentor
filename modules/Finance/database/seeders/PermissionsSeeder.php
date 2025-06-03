<?php

declare(strict_types=1);

namespace Modules\Finance\database\seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

final class PermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Permission::create(["name" => "expense.create"]);
        Permission::create(["name" => "expense.read"]);
        Permission::create(["name" => "expense.update"]);
        Permission::create(["name" => "expense.delete"]);

        Permission::create(["name" => "liquidation.create"]);
        Permission::create(["name" => "liquidation.read"]);
        Permission::create(["name" => "liquidation.update"]);
        Permission::create(["name" => "liquidation.delete"]);

        Permission::create(["name" => "transaction.create"]);
        Permission::create(["name" => "transaction.read"]);
        Permission::create(["name" => "transaction.update"]);
        Permission::create(["name" => "transaction.delete"]);

    }
}
