<?php

declare(strict_types=1);

namespace Modules\Frontend\Controllers;

use Inertia\Inertia;
use Inertia\Response;

final class TeamController
{

    /**
     * Return view of team page
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Frontend::team');

    }

}
