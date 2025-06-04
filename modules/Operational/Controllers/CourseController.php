<?php

declare(strict_types=1);

namespace Modules\Operational\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Modules\Operational\Models\Course;
use Modules\Operational\Requests\Courses\StoreCourseRequest;
use Modules\Operational\Requests\Courses\UpdateCourseRequest;
use Modules\Operational\Models\CourseClassification;
use Modules\Operational\Models\Grade;
use Modules\Operational\Models\School;
use Modules\Operational\Models\Subject;
use Inertia\Inertia;
use Inertia\Response;

final class CourseController
{

    /**
     * Return view to create courses
     *
     * @return Response
     */
    public function index(): Response
    {
        $schools = School::all(['id', 'title']);
        $subjects = Subject::all(['id', 'title']);
        $grades = Grade::all(['id', 'title']);

        return Inertia::render('Operational::courses/index',[
            'schools' => $schools,
            'subjects' => $subjects,
            'grades' => $grades
        ]);

    }

    /**
     * Load courses
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
    */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $courses = Course::filter($request)->paginate($request->limit);

        return response()->json(['data' => $courses]);
    }

    /**
     * Store new Course
     *
     * @param  StoreCourseRequest $request
     * @return RedirectResponse
     */
    public function store(StoreCourseRequest $request): RedirectResponse
    {
        $course = Course::create($request->validated());
        if($request->has('classifications')) {
            
            $classifications = array_map(function($classification) use ($course) {
                return [
                    'course_id' => $course->id,
                    'classificable_id' => $classification['id'],
                    'classificable_type' => $classification['className'],
                    'created_at' => now(),
                    'updated_at' => now()
                ];
            }, $request->classifications);
            

            CourseClassification::insert($classifications);
        }
        return to_route('course.list');
    }
    
    /**
     * Update Course
     *
     * @param  UpdateCourseRequest $request
     * @param  Course $course
     * @return RedirectResponse
     */
    public function update(UpdateCourseRequest $request, Course $course): RedirectResponse
    {
        $course->fill($request->validated())
        ->setMultipleTranslations($request->translated(), $request->locale)
        ->save();

        return to_route('course.list');
    }

    /**
     * Delete Course
     *
     * @param  Course $course
     * @return RedirectResponse
     */
    public function destroy(Course $course): RedirectResponse
    {
        $course->delete();

        return to_route('course.list');
    }
}
