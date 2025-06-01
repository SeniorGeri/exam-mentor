<?php

declare(strict_types=1);

namespace Modules\Notification\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Frontend\Models\ContactUs;
use Inertia\Inertia;
use Inertia\Response;


final class ContactListController
{

    /**
     * Return view to create contact list
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Notification::contacts/index');

    }

    /**
     * Load contacts
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $contacts = ContactUs::filter($request)->paginate($request->limit);

        return response()->json(['data' => $contacts]);
    }

    /**
     * Update ContactUs
     *
     * @param  ContactUs $contact
     * @return RedirectResponse
     */
    public function update(ContactUs $contact): RedirectResponse
    {
        $contact->update([
            'is_read' => true,
        ]);

        return to_route('contact.list');
    }


    /**
     * Delete Contact
     *
     * @param  ContactUs $contact
     * @return RedirectResponse
     */
    public function destroy(ContactUs $contact): RedirectResponse
    {
        $contact->delete();

        return to_route('contact.list');
    }
}
