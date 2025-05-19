<?php

declare(strict_types=1);

namespace Modules\Frontend\Controllers;

use Inertia\Inertia;
use Inertia\Response;

final class ContactController
{

    /**
     * Return view of contact page
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Frontend::contact');

    }

    
    /**
     * Store contact form data
     *
     * @return Response
     */
    public function store(): Response
    {
        return Inertia::render('Frontend::contact');

    }

}
