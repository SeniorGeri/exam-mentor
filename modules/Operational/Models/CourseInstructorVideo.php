<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Operational\Models\CourseInstructor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class CourseInstructorVideo extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    use HasFactory;

    protected $fillable = [
        'course_instructor_id',
        'title',
        'video_url',
        'is_free',
        'content'
    ];

    public function courseInstructor(): BelongsTo
    {
        return $this->belongsTo(CourseInstructor::class);
    }
}