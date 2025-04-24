<?php

namespace Modules\Hrm\database\seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Permission::create(["name" => "instructor.create"]);
        Permission::create(["name" => "instructor.read"]);
        Permission::create(["name" => "instructor.profile"]);
        Permission::create(["name" => "instructor.update"]);
        Permission::create(["name" => "instructor.delete"]);

        Permission::create(["name" => "student.create"]);
        Permission::create(["name" => "student.read"]);
        Permission::create(["name" => "student.profile"]);
        Permission::create(["name" => "student.update"]);
        Permission::create(["name" => "student.delete"]);
    }
}
