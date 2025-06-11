<?php

declare(strict_types= 1);

namespace Modules\Hrm\Models;

use App\Enums\RolesEnum;
use App\Models\User;
use App\Traits\HasTranslationsTrait;
use App\Traits\HasRoleBehaviorTrait;
use App\Traits\HasTableFilterTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Settings\Models\City;
use Modules\Settings\Models\Country;
use Modules\Settings\Models\Gender;

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

}
