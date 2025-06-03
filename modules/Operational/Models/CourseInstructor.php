<?php

declare(strict_types=1);

namespace Modules\Operational\Models;

use App\Models\User;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Operational\Models\Course;
use Modules\Settings\Models\Language;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Finance\Models\PricingType;

final class CourseInstructor extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    use HasFactory;

    protected $fillable = [
        'course_id',
        'instructor_id',
        'pricing_type_id',
        'language_id',
        'price',
        'longevity',
        'description',
    ];

    public function course(): BelongsTo 
    {
        return $this->belongsTo(Course::class);
    }
 
    public function instructor(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function pricingType(): BelongsTo
    {
        return $this->belongsTo(PricingType::class);
    }

    public function language(): BelongsTo
    {
        return $this->belongsTo(Language::class);
    }
}