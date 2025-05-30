<?php

namespace Modules\Notification\database\seeders;

use Illuminate\Database\Seeder;

class NotificationSeeder extends Seeder
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
