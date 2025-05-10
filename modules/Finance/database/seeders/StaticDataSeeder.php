<?php

declare(strict_types=1);

namespace Modules\Finance\database\seeders;

use Illuminate\Database\Seeder;
use Modules\Finance\Models\PricingType;

final class StaticDataSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        PricingType::create([
            'type' => 'Private',
        ]);
        PricingType::create([
            'type' => 'Group',
        ]);
        PricingType::create([
            'type' => 'Videos',
        ]);
    }
}
