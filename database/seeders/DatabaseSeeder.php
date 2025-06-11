<?php

namespace Database\Seeders;

use App\Enums\RolesEnum;
use App\Models\User;
use Illuminate\Database\Seeder;
use Modules\Finance\database\seeders\FinanceSeeder;
use Modules\Settings\database\seeders\SettingsSeeder;
use Modules\Hrm\database\seeders\HrmSeeder;
use Modules\Notification\database\seeders\NotificationSeeder;
use Modules\Operational\database\seeders\OperationalSeeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

            $this->call(RolesSeeder::class);
     
            $user = User::create([
                'name' => 'admin',
                'email' => 'admin@only-study.com',
                'password' => '12345678',
            ]);

            $user->assignRole(RolesEnum::ADMIN->value);

            $this->call(SettingsSeeder::class);
            $this->call(HrmSeeder::class);
            $this->call(OperationalSeeder::class);
            $this->call(FinanceSeeder::class);
            $this->call(NotificationSeeder::class);

    }
}
