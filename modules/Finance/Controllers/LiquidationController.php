<?php

declare(strict_types=1);

namespace Modules\Finance\Controllers;

use App\Enums\RolesEnum;
use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Modules\Finance\Models\Liquidation;
use Modules\Finance\Requests\Liquidations\UpdateLiquidationRequest;
use Modules\Operational\Models\ActiveCourse;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Operational\Enums\CourseStatusEnum;
use Modules\Operational\Models\ActiveCourseStatus;

final class LiquidationController
{

    /**
     * Return view to create liquidations
     *
     * @return Response
     */
    public function index(): Response
    {
        $canRequest = false;
        if(Auth::user()->hasRole(RolesEnum::INSTRUCTOR->value) && 
            ActiveCourse::whereInstructorId(Auth::user()->id)
            ->whereStatusId(CourseStatusEnum::FINISHED->value)
            ->whereLiquidationId(null)
            ->exists()
        ) {
            $canRequest = true;
        }
        return Inertia::render('Finance::liquidations/index', [
            'canRequest' => $canRequest
        ]);
    }

    // public function store(LiquidationRequest $request): RedirectResponse
    // {
        
    // }
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
        $liquidation->fill($request->validated())->save();

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
