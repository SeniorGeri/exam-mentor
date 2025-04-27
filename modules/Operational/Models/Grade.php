<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use App\Traits\HasTableFilterTrait;
use App\Traits\HasTranslationsTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

final class Grade extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    use HasTranslationsTrait;

    protected $fillable = ['title', 'description'];

    protected $translatable = ['title'];

}
