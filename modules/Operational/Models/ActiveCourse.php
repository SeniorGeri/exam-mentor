<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use App\Models\User;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Operational\Models\CourseInstructor;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Operational\Models\ActiveCourseStatus;

final class ActiveCourse extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    
    protected $fillable = [
        'course_instructor_id',
        'instructor_id',
        'student_id',
        'status_id',
        'value',
        'left',
        'liquidation_percentage',
        'description',
    ];

    public function courseInstructor(): BelongsTo
    {
        return $this->belongsTo(CourseInstructor::class);
    }

    public function instructor(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function student(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(ActiveCourseStatus::class);
    }
}
