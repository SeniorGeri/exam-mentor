<?php

namespace Modules\Storage\Models;

use App\Traits\HasTableFilterTrait;
use App\Traits\HasTranslationsTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Slider extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    use HasTranslationsTrait;

    protected $fillable = ['title', 'subtitle', 'button_text', 'button_url', 'image', 'active'];

    protected $translatable = ['title', 'subtitle', 'button_text'];
}
