<?php

declare(strict_types=1);

namespace Modules\Finance\Models;

use Illuminate\Database\Eloquent\Model;

final class PricingType extends Model
{
    protected $fillable = [
        'type',
    ];
}
