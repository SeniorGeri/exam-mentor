<?php

declare(strict_types=1);

namespace Modules\Storage\database\seeders;

use Illuminate\Database\Seeder;

final class SettingsSeeder extends Seeder
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
