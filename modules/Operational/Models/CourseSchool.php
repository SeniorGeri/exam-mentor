<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use Illuminate\Database\Eloquent\Model;

final class CourseSchool extends Model
{
    protected $fillable = [
        'course_id',
        'school_id',
    ];
}
