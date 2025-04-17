<?php

declare(strict_types=1);

namespace Modules\Hrm\Controllers\Student;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Hrm\Models\Student;
use Modules\Hrm\Requests\Students\StoreStudentRequest;
use Modules\Hrm\Requests\Students\UpdateStudentRequest;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Settings\Models\City;
use Modules\Settings\Models\Country;
use Modules\Settings\Models\Gender;

final class StudentController
{

    /**
     * Return view to create students
     *
     * @return Response
     */
    public function index(): Response
    {
        $countries = Country::all();
        $cities = City::all();
        $genders = Gender::all();

        return Inertia::render('Hrm::students/index',[
            'countries' => $countries,
            'cities' => $cities,
            'genders'=> $genders
        ]);

    }

    /**
     * Load students
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $students = Student::filter($request)->with(['country:id,country'])->paginate($request->limit);

        return response()->json(['data' => $students]);
    }

    /**
     * Store new Student
     *
     * @param  StoreStudentRequest $request
     * @return RedirectResponse
     */
    public function store(StoreStudentRequest $request): RedirectResponse
    {
        Student::create($request->validated());

        return to_route('student.list');
    }

    /**
     * Update Student
     *
     * @param  UpdateStudentRequest $request
     * @param  Student $Student
     * @return RedirectResponse
     */
    public function update(UpdateStudentRequest $request, Student $Student): RedirectResponse
    {
        $Student->fill($request->validated())
        ->save();

        return to_route('student.list');
    }

    /**
     * Delete Student
     *
     * @param  Student $Student
     * @return RedirectResponse
     */
    public function destroy(Student $Student): RedirectResponse
    {
        $Student->delete();

        return to_route('student.list');
    }
}
