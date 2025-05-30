<?php

namespace Modules\Hrm\database\seeders;

use Illuminate\Database\Seeder;

class HrmSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(PermissionsSeeder::class);
        $this->call(AdminPermissionsSeeder::class);
        $this->call(InstructorPermissionsSeeder::class);

    }
}
