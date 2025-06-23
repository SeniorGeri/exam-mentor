<?php

declare(strict_types=1);

namespace Modules\Storage\database\seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

final class PermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Permission::create(["name" => "slider.create"]);
        Permission::create(["name" => "slider.read"]);
        Permission::create(["name" => "slider.update"]);
        Permission::create(["name" => "slider.delete"]);

    }
}
