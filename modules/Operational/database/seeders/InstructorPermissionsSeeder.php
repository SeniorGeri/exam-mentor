<?php

namespace Modules\Operational\database\seeders;

use App\Enums\RolesEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class InstructorPermissionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $role = Role::findByName(RolesEnum::INSTRUCTOR->value);

    
        $role->givePermissionTo("course.read");
        $role->givePermissionTo("active-course.read");
        $role->givePermissionTo("school.read");
        $role->givePermissionTo("grade.read");
        $role->givePermissionTo("subject.read");


        $role->givePermissionTo("course-instructor.create");
        $role->givePermissionTo("course-instructor.read"); 
        $role->givePermissionTo("course-instructor.update");

        $role->givePermissionTo("active-course.lessons");
        $role->givePermissionTo("active-course.read");

    }
}
