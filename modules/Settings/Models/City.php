<?php

declare (strict_types= 1);

namespace Modules\Settings\Models;

use App\Traits\HasTableFilterTrait;
use App\Traits\HasTranslationsTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

final class City extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    use HasTranslationsTrait;

    protected $fillable = ['country_id', 'description', 'city'];

    protected $translatable = ['city'];

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }
}
