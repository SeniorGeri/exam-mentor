<?php

declare(strict_types=1);

namespace Modules\Operational\database\seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

final class PermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Permission::create(["name" => "school.create"]);
        Permission::create(["name" => "school.read"]);
        Permission::create(["name" => "school.update"]);
        Permission::create(["name" => "school.delete"]);

        Permission::create(["name" => "grade.create"]);
        Permission::create(["name" => "grade.read"]);
        Permission::create(["name" => "grade.update"]);
        Permission::create(["name" => "grade.delete"]);

        Permission::create(["name" => "subject.create"]);
        Permission::create(["name" => "subject.read"]);
        Permission::create(["name" => "subject.update"]);
        Permission::create(["name" => "subject.delete"]);

        Permission::create(["name" => "course.create"]);
        Permission::create(["name" => "course.read"]);
        Permission::create(["name" => "course.update"]);
        Permission::create(["name" => "course.delete"]);

        
        Permission::create(["name" => "course-instructor.create"]);
        Permission::create(["name" => "course-instructor.read"]);
        Permission::create(["name" => "course-instructor.update"]);
        Permission::create(["name" => "course-instructor.delete"]);

        Permission::create(["name" => "active-course.create"]);
        Permission::create(["name" => "active-course.read"]);
        Permission::create(["name" => "active-course.update"]);
        Permission::create(["name" => "active-course.delete"]);

    }
}
