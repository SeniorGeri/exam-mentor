<?php

declare(strict_types=1);

namespace App\Enums;

enum RolesEnum: string
{
    case ADMIN = 'admin';

    case INSTRUCTOR = 'instructor';

    case STUDENT = 'student';
}