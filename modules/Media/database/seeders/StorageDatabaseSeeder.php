<?php

declare(strict_types=1);

namespace Modules\Media\database\seeders;

use Illuminate\Database\Seeder;

final class StorageDatabaseSeeder extends Seeder
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
