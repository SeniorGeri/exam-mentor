<?php

declare(strict_types=1);

namespace Modules\Hrm;

use Illuminate\Support\ServiceProvider;

class HrmServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void {}

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadRoutesFrom(__DIR__.'/routes/hrm.php');

        $this->loadMigrationsFrom(__DIR__.'/database/migrations');

    }
}