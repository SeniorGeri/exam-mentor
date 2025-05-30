<?php

declare(strict_types=1);

namespace Modules\Frontend\Controllers;

use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Frontend\Models\ContactUs;
use Modules\Frontend\Requests\ContactUsRequest;

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
    public function store(ContactUsRequest $request): RedirectResponse
    {
        ContactUs::create($request->validated());
        return to_route('frontend.index');

    }

}
