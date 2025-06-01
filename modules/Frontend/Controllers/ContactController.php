<?php

declare(strict_types=1);

namespace Modules\Frontend\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Frontend\Models\ContactUs;
use Modules\Frontend\Requests\ContactUsRequest;
use Illuminate\Support\Facades\DB;
use Modules\Notification\Models\Notification;
use Modules\Notification\Enums\NotificationTypeEnum;

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

        DB::beginTransaction();
        
        ContactUs::create($request->validated());
        Notification::create([
            'title' => __('notification.new_contact'),
            'description' => __('notification.new_contact_message'),
            'notification_type_id' => NotificationTypeEnum::CONTACT->value,
            'receiver_id' => User::first()->id,
            'sender_id' => Auth::check() ? Auth::user()->id : null,
        ]);

        DB::commit();
      
        return to_route('frontend.index');

    }

}
