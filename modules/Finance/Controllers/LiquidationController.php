<?php

declare(strict_types=1);

namespace Modules\Finance\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Finance\Models\Liquidation;
use Modules\Finance\Requests\Liquidations\UpdateLiquidationRequest;
use Inertia\Inertia;
use Inertia\Response;

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

    /**
     * Load liquidations
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $liquidations = Liquidation::with(['activeCourse', 'createdBy', 'winner'])
        ->filter($request)
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
