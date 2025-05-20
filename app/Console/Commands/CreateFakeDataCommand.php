<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Modules\Finance\Models\CoursePricing;
use Modules\Operational\Models\Course;

class CreateFakeDataCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-fake-data-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        CoursePricing::create([
            'course_id' => 1,
            'instructor_id' => 1,
            'pricing_type_id' => 1,
            'language_id' => 1,
            'price' => 100,
            'longevity' => 1,
            'description' => 'Description',
        ]);
    }
}
