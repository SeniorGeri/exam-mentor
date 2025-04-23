<?php

declare(strict_types=1);

namespace Modules\Settings\database\seeders;

use Illuminate\Database\Seeder;
use Modules\Settings\Models\Gender;

final class SettingsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(PermissionsSeeder::class);
        $this->call(AdminPermissionsSeeder::class);

        Gender::create(['gender' => [
            'en' => 'Male',
            'sq' => 'Mashkull',
            'it' => 'maschio',
        ]]);

        Gender::create(['gender' => [
            'en' => 'Female',
            'sq' => 'Femer',
            'it' => 'femmina',
        ]]);
    }
}
