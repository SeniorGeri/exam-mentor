<?php

declare(strict_types=1);

namespace Modules\Operational\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Operational\Models\School;
use Modules\Operational\Requests\Schools\StoreSchoolRequest;
use Modules\Operational\Requests\Schools\UpdateSchoolRequest;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Settings\Models\Country;

final class SchoolController
{

    /**
     * Return view to create schools
     *
     * @return Response
     */
    public function index(): Response
    {
        $countries = Country::all();
        return Inertia::render('Operational::schools/index', [
            'countries' => $countries,
        ]);
    }
    /**
     * Load schools
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
public function show(FilterTableRequest $request): JsonResponse
{
    $schools = School::filter($request)->with(['country'])->paginate($request->limit);

    return response()->json(['data' => $schools]);
}

    /**
     * Store new School
     *
     * @param  StoreSchoolRequest $request
     * @return RedirectResponse
     */
    public function store(StoreSchoolRequest $request): RedirectResponse
    {
        School::create($request->validated());

        return to_route('school.list');
    }

    /**
     * Update School
     *
     * @param  UpdateSchoolRequest $request
     * @param  School $school
     * @return RedirectResponse
     */
    public function update(UpdateSchoolRequest $request, School $school): RedirectResponse
    {
        $school->fill($request->validated())
        ->setMultipleTranslations($request->translated(), $request->locale)
        ->save();

        return to_route('school.list');
    }

    /**
     * Delete School
     *
     * @param  School $school
     * @return RedirectResponse
     */
    public function destroy(School $school): RedirectResponse
    {
        $school->delete();

return to_route('school.list');
    }
}
