<?php

declare(strict_types=1);

namespace Modules\Operational\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Operational\Models\ActiveCourse;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Operational\Models\ActiveCourseStatus;
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
     * Load active courses
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
    */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $activeCourses = ActiveCourse::with(['coursePrice', 'instructor', 'student', 'status'])
        ->filter($request)
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
        $activeCourse->fill($request->validated())->save();

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
