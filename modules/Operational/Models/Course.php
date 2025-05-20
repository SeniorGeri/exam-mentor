<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use App\Traits\HasTableFilterTrait;
use App\Traits\HasTranslationsTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

final class Course extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    use HasTranslationsTrait;
    use HasFactory;

    protected $fillable = ['title', 'description', 'image'];

    protected $translatable = ['title'];

    // public function classifications(): HasManyThrough
    // {
    //     // return $this->hasManyThrough(CourseClassification::class, Classification::class);
    // }
}
