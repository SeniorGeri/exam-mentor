<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\HasTranslationsTrait;

final class CourseCurriculum extends Model
{

    use SoftDeletes;
    use HasTranslationsTrait;
    
    protected $fillable = [
        'course_instructor_id',
        'title',
        'description',
    ];

    protected $translatable = ['title', 'description'];

    public function courseInstructor(): BelongsTo
    {
        return $this->belongsTo(CourseInstructor::class);
    }
}
