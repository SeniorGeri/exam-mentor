<?php

declare(strict_types=1);

namespace App\Traits;


trait HasRoleBehaviorTrait
{
    protected static string $role = '';

    protected static function booted(): void
    {
        static::addGlobalScope('role', function ($query): void
        {
            $query->role(static::$role);
        });

        static::creating(function ($model): void
        {
            if (! $model->hasRole(static::$role)) {
                $model->assignRole(static::$role);
            }
        });
    }
}