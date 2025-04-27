<?php

declare(strict_types=1);

namespace Modules\Settings\database\seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

final class PermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Permission::create(["name" => "country.create"]);
        Permission::create(["name" => "country.read"]);
        Permission::create(["name" => "country.update"]);
        Permission::create(["name" => "country.delete"]);

        Permission::create(["name" => "language.create"]);
        Permission::create(["name" => "language.read"]);
        Permission::create(["name" => "language.update"]);
        Permission::create(["name" => "language.delete"]);

        Permission::create(["name" => "city.create"]);
        Permission::create(["name" => "city.read"]);
        Permission::create(["name" => "city.update"]);
        Permission::create(["name" => "city.delete"]);

        Permission::create(["name" => "currency.create"]);
        Permission::create(["name" => "currency.read"]);
        Permission::create(["name" => "currency.update"]);
        Permission::create(["name" => "currency.delete"]);

        Permission::create(["name" => "payment.create"]);
        Permission::create(["name" => "payment.read"]);
        Permission::create(["name" => "payment.update"]);
        Permission::create(["name" => "payment.delete"]);

    }
}
