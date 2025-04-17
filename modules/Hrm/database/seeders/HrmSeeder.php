<?php

namespace Modules\Settings\database\seeders;

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

    }
}
