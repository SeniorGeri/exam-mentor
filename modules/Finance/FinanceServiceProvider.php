<?php

declare(strict_types=1);

namespace Modules\Finance;

use Illuminate\Support\ServiceProvider;

final class FinanceServiceProvider extends ServiceProvider
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
        $this->loadRoutesFrom(__DIR__.'/routes/finance.php');

        $this->loadMigrationsFrom(__DIR__.'/database/migrations');

    }
}