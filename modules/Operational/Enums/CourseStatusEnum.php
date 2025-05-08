<?php

declare(strict_types=1);

namespace Modules\Operational\Enums;

enum CourseStatusEnum: int
{
    case REQUESTED = 1;

    case APPROVED = 2;

    case ACTIVE = 3;
    
    case FINISHED = 4;

    case REJECTED = 5;
}