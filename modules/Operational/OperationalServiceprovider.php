<?php

declare(strict_types=1);

namespace Modules\Operational;

use Illuminate\Support\ServiceProvider;

class OperationalServiceProvider extends ServiceProvider
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
        $this->loadRoutesFrom(__DIR__.'/routes/operational.php');

        $this->loadMigrationsFrom(__DIR__.'/database/migrations');

    }
}