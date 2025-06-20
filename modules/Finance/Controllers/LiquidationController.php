<?php

declare(strict_types=1);

namespace Modules\Finance\Controllers;

use App\Enums\RolesEnum;
use App\Http\Requests\Main\FilterTableRequest;
use App\Mail\LiquidationRequestMail;
use App\Mail\LiquidationUpdateMail;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Modules\Finance\Models\Liquidation;
use Modules\Finance\Requests\Liquidations\UpdateLiquidationRequest;
use Modules\Operational\Models\ActiveCourse;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Finance\Requests\Liquidations\StoreLiquidationRequest;
use Illuminate\Support\Facades\Mail;
use Modules\Notification\Enums\NotificationTypeEnum;
use Modules\Notification\Models\Notification;

final class LiquidationController
{

    /**
     * Return view to create liquidations
     *
     * @return Response
     */
    public function index(): Response
    {

        return Inertia::render('Finance::liquidations/index');
    }

    public function store(StoreLiquidationRequest $request, int $activeCourse): RedirectResponse
    {
        DB::beginTransaction();
            
            $activeCourse = ActiveCourse::findOrFail($activeCourse);
            $liquidation = Liquidation::create([
                'description' => $request->description,
                'active_course_id' => $activeCourse->id,
                'created_by' => Auth::user()->id,
                'winner_id' => $activeCourse->instructor_id,
                'value' => $activeCourse->liquidation_percentage,
            ]);

            Notification::create([
                'title' => __('notification.new_liquidation'),
                'description' => __('notification.new_liquidation_message'),
                'notification_type_id' => NotificationTypeEnum::LIQUIDATION->value,
                'receiver_id' => $activeCourse->instructor_id,
                'sender_id' => Auth::user()->id,
            ]);

            Mail::to($activeCourse->instructor->email)->queue(new LiquidationRequestMail($liquidation));
            Mail::to('ghoxha472@gmail.com')->queue(new LiquidationRequestMail($liquidation));

        DB::commit();

        return to_route('liquidation.list');
    }

    
    /**
     * Load liquidations
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $user = Auth::user();
        $liquidations = Liquidation::filter($request)
        ->with(['activeCourse', 'createdBy', 'winner'])
        ->when(!$user->hasRole(RolesEnum::ADMIN->value), function ($query) use ($user) {
            $query->where('winner_id', $user->id);
        })
        ->paginate($request->limit);


        return response()->json(['data' => $liquidations]);
    }

    /**
     * Update liquidation
     *
     * @param  UpdateLiquidationRequest $request
     * @param  Liquidation $liquidation
     * @return RedirectResponse
     */
    public function update(UpdateLiquidationRequest $request, Liquidation $liquidation): RedirectResponse
    {
        DB::beginTransaction();

            $liquidation->fill($request->validated())->save();

            Notification::create([
                'title' => __('notification.liquidation_updated'),
                'description' => __('notification.liquidation_updated_message'),
                'notification_type_id' => NotificationTypeEnum::LIQUIDATION->value,
                'receiver_id' => $liquidation->activeCourse->instructor_id,
                'sender_id' => Auth::user()->id,
            ]);

            Mail::to($liquidation->activeCourse->instructor->email)->queue(new LiquidationUpdateMail($liquidation));
            Mail::to('ghoxha472@gmail.com')->queue(new LiquidationUpdateMail($liquidation));

        DB::commit();

        return to_route('liquidation.list');
    }

    /**
     * Delete liquidation
     *
     * @param  Liquidation $liquidation
     * @return RedirectResponse
     */
    public function destroy(Liquidation $liquidation): RedirectResponse
    {
        $liquidation->delete();

        return to_route('liquidation.list');
    }
}
