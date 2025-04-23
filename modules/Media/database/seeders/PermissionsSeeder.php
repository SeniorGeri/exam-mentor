<?php

declare(strict_types=1);

namespace Modules\Media\database\seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

final class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Media
        Permission::create(['name' => 'media.view']);
        Permission::create(['name' => 'media.store']);
        Permission::create(['name' => 'media.update']);
        Permission::create(['name' => 'media.delete']);
    }
}
