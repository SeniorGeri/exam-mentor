<?php

declare(strict_types= 1);

namespace Modules\Hrm\Models;

use App\Enums\RolesEnum;
use App\Models\User;
use App\Traits\HasRoleBehaviorTrait;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Operational\Models\ActiveCourse;

final class Student extends User
{
    use HasRoleBehaviorTrait;
    use SoftDeletes;
    use HasTableFilterTrait;
    
    protected static string $role = RolesEnum::STUDENT->value;
    protected $table = 'users';
    protected $guard_name = 'web';

    protected $fillable = [
        "name",
        "email",
        "password",
        "active",
        "city_id",
        "gender_id",
        "address",
        "profile_pic",
        "phone",
        "country_id"
    ];

    public function activeCourses(): HasMany
    {
        return $this->hasMany(ActiveCourse::class, 'student_id');
    }
}
