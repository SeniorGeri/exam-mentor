<?php

declare(strict_types=1);

namespace Modules\Settings;

use Illuminate\Support\ServiceProvider;

final class SettingsServiceProvider extends ServiceProvider
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
        $this->loadRoutesFrom(__DIR__.'/routes/settings.php');

        $this->loadMigrationsFrom(__DIR__.'/database/migrations');

    }
}