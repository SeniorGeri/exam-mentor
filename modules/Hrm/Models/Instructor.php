<?php

declare(strict_types= 1);

namespace Modules\Hrm\Models;

use App\Enums\RolesEnum;
use App\Models\User;
// use App\Traits\HasRoleBehaviorTrait;
use App\Traits\HasTranslationsTrait;
use GeriHoxha\LaravelRoleModels\HasRoleBehavior;

final class Instructor extends User
{
    use HasRoleBehavior;
    use HasTranslationsTrait;
    protected static string $role = RolesEnum::INSTRUCTOR->value;
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
        "bio"
    ];

    protected $translatable = ['bio'];
}
