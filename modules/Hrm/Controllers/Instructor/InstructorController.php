<?php

declare(strict_types=1);

namespace Modules\Hrm\Controllers\Instructor;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Hrm\Models\Instructor;
use Modules\Hrm\Requests\Instructors\StoreInstructorRequest;
use Modules\Hrm\Requests\Instructors\UpdateInstructorRequest;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Settings\Models\City;
use Modules\Settings\Models\Country;
use Modules\Settings\Models\Gender;

final class InstructorController
{

    /**
     * Return view to create instructors
     *
     * @return Response
     */
    public function index(): Response
    {
        $countries = Country::all();
        $cities = City::all();
        $genders = Gender::all();

        return Inertia::render('Hrm::instructors/index',[
            'countries' => $countries,
            'cities'=> $cities,
            'genders' => $genders
        ]);

    }

    /**
     * Load instructors
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $instructors = Instructor::filter($request)->with(['country:id,country'])->paginate($request->limit);

        return response()->json(['data' => $instructors]);
    }

    /**
     * Store new Instructor
     *
     * @param  StoreInstructorRequest $request
     * @return RedirectResponse
     */
    public function store(StoreInstructorRequest $request): RedirectResponse
    {
        Instructor::create($request->validated());

        return to_route('instructor.list');
    }

    /**
     * Update Instructor
     *
     * @param  UpdateInstructorRequest $request
     * @param  Instructor $Instructor
     * @return RedirectResponse
     */
    public function update(UpdateInstructorRequest $request, Instructor $Instructor): RedirectResponse
    {
        $Instructor->fill($request->validated())
        ->setMultipleTranslations($request->translated(), $request->locale)
        ->save();

        return to_route('instructor.list');
    }

    /**
     * Delete Instructor
     *
     * @param  Instructor $Instructor
     * @return RedirectResponse
     */
    public function destroy(Instructor $Instructor): RedirectResponse
    {
        $Instructor->delete();

        return to_route('instructor.list');
    }
}
