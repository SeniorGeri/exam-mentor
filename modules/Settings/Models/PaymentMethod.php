<?php

declare (strict_types= 1);

namespace Modules\Settings\Models;

use App\Traits\HasTableFilterTrait;
use App\Traits\HasTranslationsTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

final class PaymentMethod extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    use HasTranslationsTrait;

    protected $fillable = [
        'method',
        'is_primary',
        'image',
        'description',
    ];

    protected array $translatable = [
        'language',
    ];
}
