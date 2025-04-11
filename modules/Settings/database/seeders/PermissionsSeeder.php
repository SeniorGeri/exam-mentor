<?php

namespace Modules\Settings\database\seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionsSeeder extends Seeder
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

    }
}
