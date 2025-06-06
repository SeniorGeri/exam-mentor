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
use Modules\Operational\Actions\AddCourseClassifications;
use Modules\Operational\Models\CourseGrade;
use Modules\Operational\Models\CourseSchool;
use Modules\Operational\Models\CourseSubject;

final class CourseController
{

    /**
     * Return view to list courses
     *
     * @return Response
     */
    public function index(): Response
    {

        return Inertia::render('Operational::courses/index');

    }

    /**
     * Return view to create courses
     *
     * @return Response
     */
    public function create(): Response
    {
        $schools = School::all(['id', 'title']);
        $subjects = Subject::all(['id', 'title']);
        $grades = Grade::all(['id', 'title']);

        return Inertia::render('Operational::courses/create',[
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
        DB::beginTransaction();
        $course = Course::create($request->validated());
        AddCourseClassifications::execute($request, $course);
        DB::commit();

    
        return to_route('course.list');
    }
    
    /**
     * Edit Course
     *
     * @param  Course $course
     * @return Response
     */
    public function edit(Course $course): Response
    {
        $schools = School::all(['id', 'title']);
        $subjects = Subject::all(['id', 'title']);
        $grades = Grade::all(['id', 'title']);
        $course->load([
            'schoolIds',
            'subjectIds',
            'gradeIds'
        ]);
        return Inertia::render('Operational::courses/edit',[
            'course' => $course,
            'schools' => $schools,
            'subjects' => $subjects,
            'grades' => $grades
        ]);
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
        DB::beginTransaction();
        $course->fill($request->validated())
        ->setMultipleTranslations($request->translated(), $request->locale)
        ->save();

        CourseSchool::where('course_id', $course->id)->forceDelete();
        CourseSubject::where('course_id', $course->id)->forceDelete();
        CourseGrade::where('course_id', $course->id)->forceDelete();

        AddCourseClassifications::execute($request, $course);
        DB::commit();
      
    
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
