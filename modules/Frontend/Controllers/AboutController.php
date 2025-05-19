<?php

declare(strict_types=1);

namespace Modules\Frontend\Controllers;

use Inertia\Inertia;
use Inertia\Response;

final class AboutController
{

    /**
     * Return view of about page
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Frontend::about');

    }

      /**
     * Return view of terms page
     *
     * @return Response
     */
    public function terms(): Response
    {
        return Inertia::render('Frontend::terms');

    }

    /**
     * Return view of privacy page
     *
     * @return Response
     */
    public function privacy(): Response
    {
        return Inertia::render('Frontend::privacy');

    }
}
