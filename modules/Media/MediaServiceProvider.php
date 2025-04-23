<?php

declare(strict_types=1);

namespace Modules\Media;

use Illuminate\Support\ServiceProvider;

final class MediaServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->loadRoutesFrom(__DIR__ . '/routes/web.php');

        $this->loadMigrationsFrom(__DIR__ . '/database/migrations');
    }
}
