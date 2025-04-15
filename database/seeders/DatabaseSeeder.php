<?php

namespace Database\Seeders;

use App\Enums\RolesEnum;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Modules\Settings\database\seeders\SettingsSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

            User::factory(10)->create();
            $this->call(RolesSeeder::class);
            $this->call(SettingsSeeder::class);

            $user = User::create([
                'name' => 'admin',
                'email' => 'admin@exam-mentor.com',
                'password' => Hash::make('12345678'),
            ]);

            $user->assignRole(RolesEnum::ADMIN->value);

    }
}
