<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use App\Models\User;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Finance\Models\CoursePricing;


final class ActiveCourse extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    
    protected $fillable = [
        'course_price_id',
        'professor_id',
        'student_id',
        'status_id',
        'value',
        'left',
        'liquidation_percentage',
        'description',
    ];

    public function coursePrice()
    {
        return $this->belongsTo(CoursePricing::class);
    }

    public function professor()
    {
        return $this->belongsTo(User::class);
    }

    public function student()
    {
        return $this->belongsTo(User::class);
    }

    public function status()
    {
        return $this->belongsTo(ActiveCourseStatus::class);
    }
}
