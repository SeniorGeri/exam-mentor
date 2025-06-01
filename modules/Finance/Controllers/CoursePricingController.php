<?php

declare(strict_types=1);

namespace Modules\Finance\Controllers;

use App\Enums\RolesEnum;
use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Modules\Finance\Models\CoursePricing;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Finance\Requests\CoursePricing\StoreCoursePricingRequest;
use Modules\Finance\Requests\CoursePricing\UpdateStorePricingRequest;

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
     * Store new course pricing
     *
     * @param  StoreCoursePricingRequest $request
     * @return RedirectResponse
     */
    public function store(StoreCoursePricingRequest $request): RedirectResponse
    {
        CoursePricing::create($request->validated());

        return to_route('course-pricing.list');
    }   

    /**
     * Load course pricings
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $user = Auth::user();
        $coursePricings = CoursePricing::with(['course', 'instructor', 'pricingType', 'language'])
        ->when($user->hasRole(RolesEnum::INSTRUCTOR->value), function ($query) use ($user) {
            $query->where('instructor_id', $user->id);
        })
        ->filter($request)
        ->paginate($request->limit);

        return response()->json(['data' => $coursePricings]);
    }

    /**
     * Update course pricing
     *
     * @param  UpdateStorePricingRequest $request
     * @param  CoursePricing $coursePricing
     * @return RedirectResponse
     */
    public function update(UpdateStorePricingRequest $request, CoursePricing $coursePricing): RedirectResponse
    {
        $coursePricing->fill($request->validated())->save();

        return to_route('course-pricing.list');
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
