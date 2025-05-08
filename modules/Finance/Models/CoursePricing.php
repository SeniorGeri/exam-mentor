<?php

declare(strict_types=1);

namespace Modules\Finance\Models;

use App\Models\User;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Operational\Models\Course;
use Modules\Settings\Models\Language;

final class CoursePricing extends Model
{
    use SoftDeletes;
    use HasTableFilterTrait;
    protected $fillable = [
        'course_id',
        'professor_id',
        'pricing_type_id',
        'language_id',
        'price',
        'longevity',
        'description',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function professor()
    {
        return $this->belongsTo(User::class);
    }

    public function pricingType()
    {
        return $this->belongsTo(PricingType::class);
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}