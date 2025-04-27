<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

final class CourseClassification extends Model
{
    protected $fillable = [
        'course_id',
        'classificable_id',
        'classificable_type',
    ];

    public function classificable(): MorphTo
    {
        return $this->morphTo();
    }
}
