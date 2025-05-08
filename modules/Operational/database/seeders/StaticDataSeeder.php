<?php

declare(strict_types=1);

namespace Modules\Operational\database\seeders;

use Illuminate\Database\Seeder;
use Modules\Operational\Models\ActiveCourseStatus;

final class StaticDataSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        ActiveCourseStatus::create([
            'status' => 'Requested',
        ]);
        ActiveCourseStatus::create([
            'status' => 'Approved',
        ]);
        ActiveCourseStatus::create([
            'status' => 'Active',
        ]);
        ActiveCourseStatus::create([
            'status' => 'Finished',
        ]);
        ActiveCourseStatus::create([
            'status' => 'Rejected',
        ]);
    }
}
