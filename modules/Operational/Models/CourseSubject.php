<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use Illuminate\Database\Eloquent\Model;

final class CourseSubject extends Model
{
    protected $fillable = [
        'course_id',
        'subject_id',
    ];
}
