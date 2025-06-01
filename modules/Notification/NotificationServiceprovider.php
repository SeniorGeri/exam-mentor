<?php

declare(strict_types=1);

namespace Modules\Notification;

use Illuminate\Support\ServiceProvider;

final class NotificationServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->loadRoutesFrom(__DIR__.'/routes/notification.php');

        $this->loadMigrationsFrom(__DIR__.'/database/migrations');

    }
}