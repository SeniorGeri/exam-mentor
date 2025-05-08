<?php

declare(strict_types=1);

namespace Modules\Finance\Enums;

enum PricingTypesEnum: int
{
    case PRIVATE = 1;

    case GROUP = 2;

    case VIDEOS = 3;
}