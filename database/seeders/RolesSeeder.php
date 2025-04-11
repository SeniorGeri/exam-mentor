<?php

namespace Database\Seeders;

use App\Enums\RolesEnum;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::create(["name" => RolesEnum::ADMIN->value]);
        Role::create(["name" => RolesEnum::INSTRUCTOR->value]);
        Role::create(["name" => RolesEnum::STUDENT->value]);
    }
}
