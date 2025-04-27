<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use App\Traits\HasTableFilterTrait;
use App\Traits\HasTranslationsTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Settings\Models\Country;

final class School extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    use HasTranslationsTrait;

    protected $fillable = ['title', 'description', 'image', 'country_id'];

    protected $translatable = ['title'];

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }

}
