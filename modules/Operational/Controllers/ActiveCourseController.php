<?php

declare(strict_types=1);

namespace Modules\Operational\Controllers;

use App\Enums\RolesEnum;
use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Modules\Operational\Models\ActiveCourse;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Hrm\Models\Student;
use Modules\Operational\Models\ActiveCourseStatus;
use Modules\Operational\Models\CourseInstructor;
use Modules\Operational\Requests\ActiveCourses\StoreActiveCourseRequest;
use Modules\Operational\Requests\ActiveCourses\UpdateActiveCourseRequest;

final class ActiveCourseController
{

    /**
     * Return view to create active courses
     *
     * @return Response
     */
    public function index(): Response
    {
        
        $activeCourseStatuses = ActiveCourseStatus::all();
        return Inertia::render('Operational::active-courses/index', [
            'activeCourseStatuses' => $activeCourseStatuses
        ]);

    }

    /**
     * Return view to create active courses
     *
     * @return Response
     */
    public function create(): Response
    {
        $activeCourseStatuses = ActiveCourseStatus::all();
        $courseInstructors = CourseInstructor::with(['course', 'instructor'])->get();
        $students = Student::all();

        return Inertia::render('Operational::active-courses/create/index', [
            'statuses' => $activeCourseStatuses,
            'courseInstructors' => $courseInstructors,
            'students' => $students
        ]);
    }

    /**
     * Store new active course
     *
     * @param  StoreActiveCourseRequest $request
     * @return RedirectResponse
     */
    public function store(StoreActiveCourseRequest $request): RedirectResponse
    {
        ActiveCourse::create($request->validated());

        return to_route('active-course.list');
    }

    /**
     * Load active courses
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
    */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $user = Auth::user();
        $activeCourses = ActiveCourse::filter($request)
        ->with(['courseInstructor', 'instructor', 'student', 'status', 'liquidation'])
        ->when($user->hasRole(RolesEnum::INSTRUCTOR->value), function ($query) use ($user) {
            $query->where('instructor_id', $user->id);
        })
        ->when($user->hasRole(RolesEnum::STUDENT->value), function ($query) use ($user) {
            $query->where('student_id', $user->id);
        })
        ->paginate($request->limit);

        return response()->json(['data' => $activeCourses]);
    }

    /**
     * Update Active Course
     *
     * @param  UpdateActiveCourseRequest $request
     * @param  ActiveCourse $activeCourse
     * @return RedirectResponse
     */
    public function update(UpdateActiveCourseRequest $request, ActiveCourse $activeCourse): RedirectResponse
    {   
        $user = Auth::user();

        if($user->hasRole(RolesEnum::ADMIN->value)) {
            $activeCourse->fill($request->validated())->save();
        }

        return to_route('active-course.list');
    }

    /**
     * Delete active course
     *
     * @param  ActiveCourse $activeCourse
     * @return RedirectResponse
     */
    public function destroy(ActiveCourse $activeCourse): RedirectResponse
    {
        $activeCourse->delete();

        return to_route('active-course.list');
    }
}
