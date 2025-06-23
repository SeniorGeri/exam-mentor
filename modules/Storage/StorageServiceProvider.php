<?php

declare(strict_types=1);

namespace Modules\Storage;

use Illuminate\Support\ServiceProvider;

final class StorageServiceProvider extends ServiceProvider
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
        $this->loadRoutesFrom(__DIR__.'/routes/storage.php');

        $this->loadMigrationsFrom(__DIR__.'/database/migrations');

    }
}