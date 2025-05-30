<?php

namespace Modules\Notification\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class NotificationType extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'type',
    ];

    public function notifications(): HasMany
    {
        return $this->hasMany(Notification::class);
    }
}
