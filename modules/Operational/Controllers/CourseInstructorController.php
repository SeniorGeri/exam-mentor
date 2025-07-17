<?php

declare(strict_types=1);

namespace Modules\Operational\Controllers;

use App\Enums\RolesEnum;
use App\Http\Requests\Main\FilterTableRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Modules\Operational\Models\CourseInstructor;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Finance\Models\PricingType;
use Modules\Operational\Actions\AddCourseInstructorCurricula;
use Modules\Operational\Actions\AddCourseInstructorIncludes;
use Modules\Operational\Actions\AddCourseInstructorVideos;
use Modules\Operational\Models\Course;
use Modules\Operational\Models\CourseCurriculum;
use Modules\Operational\Models\CourseIncludes;
use Modules\Operational\Models\CourseInstructorVideo;
use Modules\Operational\Requests\CourseInstructor\StoreCourseInstructorRequest;
use Modules\Operational\Requests\CourseInstructor\UpdateCourseInstructorRequest;
use Modules\Settings\Models\Language;

final class CourseInstructorController
{

    /**
     * Return view to create course pricings
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Operational::course-instructors/index');
    }

     /**
     * Return view to create course pricing
     *
     * @return Response
     */
    public function create(): Response
    {

        $courses = Course::all(['id', 'title']);
        $instructors = User::all(['id', 'name']);
        $pricingTypes = PricingType::all(['id', 'type']);
        return Inertia::render('Operational::course-instructors/create/index', [
            'courses' => $courses,
            'instructors' => $instructors,
            'pricingTypes' => $pricingTypes,
        ]);
    }  

    /**
     * Store new course pricing
     *
     * @param  StoreCourseInstructorRequest $request
     * @return RedirectResponse
     */
    public function store(StoreCourseInstructorRequest $request): RedirectResponse
    {
        DB::beginTransaction();
        $courseInstructor = CourseInstructor::create($request->validated());

        AddCourseInstructorCurricula::execute($request, $courseInstructor);
        AddCourseInstructorIncludes::execute($request, $courseInstructor);
        AddCourseInstructorVideos::execute($request, $courseInstructor);

        DB::commit();

        return to_route('course-instructor.list');
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
        $courseInstructors = CourseInstructor::filter($request)
        ->with(['course', 'instructor', 'pricingType', 'language'])
        ->when($user->hasRole(RolesEnum::INSTRUCTOR->value), function ($query) use ($user) {
            $query->where('instructor_id', $user->id);
        })
        ->paginate($request->limit);

        return response()->json(['data' => $courseInstructors]);
    }

    /**
     * Update course pricing
     *
     * @param  UpdateCourseInstructorRequest $request
     * @param  CourseInstructor $courseInstructor
     * @return RedirectResponse
     */
    public function edit(CourseInstructor $courseInstructor): Response
    {
        $courses = Course::all(['id', 'title']);
        $instructors = User::all(['id', 'name']);
        $pricingTypes = PricingType::all(['id', 'type']);
        
        return Inertia::render('Operational::course-instructors/edit/index', [
            'courseInstructor' => $courseInstructor->load(['curricula', 'includes', 'videos']),
            'courses' => $courses,
            'instructors' => $instructors,
            'pricingTypes' => $pricingTypes,
        ]);
    }

    /**
     * Update course pricing
     *
     * @param  UpdateCourseInstructorRequest $request
     * @param  CourseInstructor $courseInstructor
     * @return RedirectResponse
     */
    public function update(UpdateCourseInstructorRequest $request, CourseInstructor $courseInstructor): RedirectResponse
    {   
        DB::beginTransaction();

        $courseInstructor->fill($request->validated())->save();
        
        AddCourseInstructorCurricula::edit($request, $courseInstructor);
        AddCourseInstructorIncludes::edit($request, $courseInstructor);
        AddCourseInstructorVideos::edit($request, $courseInstructor);

        DB::commit();

        return to_route('course-instructor.list');
    }

    /**
     * Delete course pricing
     *
     * @param  CourseInstructor $courseInstructor
     * @return RedirectResponse
     */
    public function destroy(CourseInstructor $courseInstructor): RedirectResponse
    {
        $courseInstructor->delete();

        return to_route('course-instructor.list');
    }
}
