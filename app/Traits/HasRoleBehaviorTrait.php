<?php

declare(strict_types=1);

namespace App\Traits;

use App\Models\User;

trait HasRoleBehaviorTrait
{
    protected static function booted(): void
    {
        static::addGlobalScope('role', function ($query): void
        {
            $query->role(static::$role);
        });

        static::created(function ($model): void
        {
            if (! $model->hasRole(static::$role)) {
                $model->assignRole(static::$role);
                User::find($model->id)->assignRole(static::$role);
            }
        });
    }
}