<?php

declare(strict_types=1);

namespace Modules\Finance\database\seeders;

use Illuminate\Database\Seeder;

final class OperationalSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(PermissionsSeeder::class);
        $this->call(AdminPermissionsSeeder::class);
        $this->call(StaticDataSeeder::class);
    }
}
