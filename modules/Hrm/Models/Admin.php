<?php

declare(strict_types= 1);

namespace Modules\Hrm\Models;

use App\Enums\RolesEnum;
use App\Models\User;
use App\Traits\HasRoleBehaviorTrait;

final class Admin extends User
{
    use HasRoleBehaviorTrait;

    protected static string $role = RolesEnum::ADMIN->value;
    protected $table = 'users';

}
