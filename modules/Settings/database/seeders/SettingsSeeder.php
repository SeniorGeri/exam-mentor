<?php

declare(strict_types=1);

namespace Modules\Settings\database\seeders;

use Illuminate\Database\Seeder;
use Modules\Settings\Models\Gender;
use Modules\Settings\Models\Language;

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

        Language::create([
            'language' => [
                'en' => 'English',
                'sq' => 'Anglisht',
                'it' => 'Inglese',
            ],
            'language_code' => 'en',
        ]);

        Language::create([
            'language' => [
                'en' => 'Albanian',
                'sq' => 'Shqip',
                'it' => 'Albanese',
            ],
            'language_code' => 'sq',
        ]);

        Language::create([
            'language' => [
                'en' => 'Italian',
                'sq' => 'Italiaisht',
                'it' => 'Italiano',
            ],
            'language_code' => 'it',
    ]);
    }
}
