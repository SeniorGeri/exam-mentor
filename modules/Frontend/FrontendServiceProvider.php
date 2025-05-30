<?php

declare(strict_types=1);

namespace Modules\Frontend;

use Illuminate\Support\ServiceProvider;

class FrontendServiceProvider extends ServiceProvider
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
        $this->loadRoutesFrom(__DIR__.'/routes/frontend.php');
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');

    }
}