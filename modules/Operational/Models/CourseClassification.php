<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use Illuminate\Database\Eloquent\Model;

final class CourseClassification extends Model
{
    protected $fillable = [
        'course_id',
        'classificable_id',
        'classificable_type',
    ];
}
