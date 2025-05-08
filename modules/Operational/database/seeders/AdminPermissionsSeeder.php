<?php

declare(strict_types=1);

namespace Modules\Operational\database\seeders;

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

        $role->givePermissionTo("school.create");
        $role->givePermissionTo("school.read");
        $role->givePermissionTo("school.update");
        $role->givePermissionTo("school.delete");

        $role->givePermissionTo("grade.create");
        $role->givePermissionTo("grade.read");
        $role->givePermissionTo("grade.update");
        $role->givePermissionTo("grade.delete");

        $role->givePermissionTo("subject.create");
        $role->givePermissionTo("subject.read");
        $role->givePermissionTo("subject.update");
        $role->givePermissionTo("subject.delete");

        $role->givePermissionTo("course.create");
        $role->givePermissionTo("course.read");
        $role->givePermissionTo("course.update");
        $role->givePermissionTo("course.delete");

        $role->givePermissionTo("active-course.create");
        $role->givePermissionTo("active-course.read");
        $role->givePermissionTo("active-course.update");
        $role->givePermissionTo("active-course.delete");
    }
}
