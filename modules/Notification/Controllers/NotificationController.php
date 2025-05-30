<?php

declare(strict_types=1);

namespace Modules\Notification\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Frontend\Models\ContactUs;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Notification\Models\Notification;

final class NotificationController
{

    /**
     * Return view to create notification list
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Notification::notifications/index');

    }

    /**
     * Load notifications
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $notifications = Notification::filter($request)->paginate($request->limit);

        return response()->json(['data' => $notifications]);
    }

    /**
     * Update Notification
     *
     * @param  Notification $notification
     * @return RedirectResponse
     */
    public function update(Notification $notification): RedirectResponse
    {
        $notification->update([
            'read' => true,
        ]);

        return to_route('notification.list');
    }

    /**
     * Delete Notification
     *
     * @param  Notification $notification
     * @return RedirectResponse
     */
    public function destroy(Notification $notification): RedirectResponse
    {
        $notification->delete();

        return to_route('notification.list');
    }
}
