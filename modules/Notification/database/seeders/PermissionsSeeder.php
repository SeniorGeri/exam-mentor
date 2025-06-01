<?php

namespace Modules\Notification\database\seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Permission::create(["name" => "contact.read"]);
        Permission::create(["name" => "contact.delete"]);
        Permission::create(["name" => "contact.update"]);

        Permission::create(["name" => "notification.read"]);
        Permission::create(["name" => "notification.delete"]);
        Permission::create(["name" => "notification.update"]);
    }
}
