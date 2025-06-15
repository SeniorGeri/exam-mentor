<?php

declare(strict_types= 1);

namespace Modules\Hrm\Models;

use App\Enums\RolesEnum;
use App\Models\User;
use App\Traits\HasTranslationsTrait;
use App\Traits\HasRoleBehaviorTrait;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Finance\Models\Liquidation;
use Modules\Operational\Models\ActiveCourse;
use Modules\Operational\Models\CourseInstructor;


final class Instructor extends User
{
    use HasTranslationsTrait;
    use HasRoleBehaviorTrait;
    use SoftDeletes;
    use HasTableFilterTrait;
    
    protected static string $role = RolesEnum::INSTRUCTOR->value;
    protected $guard_name = 'web';

    protected $table = 'users';



    protected $fillable = [
        "name",
        "email",
        "password",
        "active",
        "city_id",
        "gender_id",
        "address",
        "profile_pic",
        "bio",
        "phone",
        "country_id",
        "specialization"
    ];

    protected $translatable = ['bio'];

    public function courses(): HasMany
    {
        return $this->hasMany(CourseInstructor::class, 'instructor_id');
    }

    public function activeCourses(): HasMany
    {
        return $this->hasMany(ActiveCourse::class, 'instructor_id');
    }
    
    public function liquidations(): HasMany
    {
        return $this->hasMany(Liquidation::class, 'winner_id');
    }
}
