<?php

declare(strict_types=1);

namespace Modules\Finance\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Finance\Models\CoursePricing;
use Inertia\Inertia;
use Inertia\Response;

final class CoursePricingController
{

    /**
     * Return view to create course pricings
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Finance::course-pricings/index');
    }

    /**
     * Load course pricings
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $coursePricings = CoursePricing::with(['course', 'instructor', 'pricingType', 'language'])
        ->filter($request)
        ->paginate($request->limit);

        return response()->json(['data' => $coursePricings]);
    }

    /**
     * Delete course pricing
     *
     * @param  CoursePricing $coursePricing
     * @return RedirectResponse
     */
    public function destroy(CoursePricing $coursePricing): RedirectResponse
    {
        $coursePricing->delete();

        return to_route('course-pricing.list');
    }
}
