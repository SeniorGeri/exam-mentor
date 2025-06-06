<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use Illuminate\Database\Eloquent\Model;

final class CourseGrade extends Model
{
    protected $fillable = [
        'course_id',
        'grade_id',
    ];
}
