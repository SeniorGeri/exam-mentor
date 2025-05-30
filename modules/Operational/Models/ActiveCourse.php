<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use App\Models\User;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Finance\Models\CoursePricing;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Operational\Models\ActiveCourseStatus;

final class ActiveCourse extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    
    protected $fillable = [
        'course_price_id',
        'instructor_id',
        'student_id',
        'status_id',
        'value',
        'left',
        'liquidation_percentage',
        'description',
    ];

    public function coursePrice(): BelongsTo
    {
        return $this->belongsTo(CoursePricing::class);
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
