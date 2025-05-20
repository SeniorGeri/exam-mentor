<?php

declare(strict_types=1);

namespace Modules\Finance\Models;

use App\Models\User;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Operational\Models\Course;
use Modules\Settings\Models\Language;
use Illuminate\Database\Eloquent\Factories\HasFactory;

final class CoursePricing extends Model
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

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function instructor()
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