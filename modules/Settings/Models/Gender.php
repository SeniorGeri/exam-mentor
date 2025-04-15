<?php

declare (strict_types= 1);

namespace Modules\Settings\Models;

use App\Traits\HasTranslationsTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

final class Gender extends Model
{
    use SoftDeletes;
    use HasTranslationsTrait;

    protected $fillable = [
        'gender',
        'image',
        'description',
    ];

    protected array $translatable = [
        'gender',
    ];
}
