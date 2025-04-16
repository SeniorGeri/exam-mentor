<?php

declare (strict_types= 1);

namespace Modules\Settings\Models;

use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

final class Currency extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;


    protected $fillable = ['exchange', 'description', 'symbol', 'is_primary', 'currency_code'];

    protected function exchange(): Attribute
    {
        return Attribute::make(
            get: fn (int $value) => $value/100,
            set: fn (float $value) => $value*100,
        );
    }

}
