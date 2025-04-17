<?php

declare(strict_types= 1);

namespace Modules\Hrm\Models;

use App\Enums\RolesEnum;
use App\Models\User;
use App\Traits\HasRoleBehaviorTrait;

final class Student extends User
{
    use HasRoleBehaviorTrait;

    protected static string $role = RolesEnum::STUDENT->value;
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
    ];
}
