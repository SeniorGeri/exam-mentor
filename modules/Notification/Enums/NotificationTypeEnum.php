<?php

declare(strict_types=1);

namespace Modules\Notification\Enums;

enum NotificationTypeEnum: int
{
    case CONTACT = 1;

    case PAYMENT = 2;

    case LIQUIDATION = 3;

    case INSTRUCTOR = 4;

    case ORDER = 5;
}