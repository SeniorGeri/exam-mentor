<?php

declare(strict_types=1);

namespace Modules\Operational\Actions;

use Modules\Operational\Models\Course;
use Modules\Operational\Models\CourseClassification;
use Modules\Operational\Models\CourseSchool;
use Modules\Operational\Models\CourseSubject;
use Modules\Operational\Models\CourseGrade;
use Modules\Operational\Requests\Courses\StoreCourseRequest;
use Modules\Operational\Requests\Courses\UpdateCourseRequest;

final class AddCourseClassifications
{
    public static function execute(StoreCourseRequest|UpdateCourseRequest $request, Course $course): void
    {
        if($request->has('schools')) {
            
            CourseSchool::insert(array_map(function($school) use ($course) {
                return [
                    'course_id' => $course->id,
                    'school_id' => $school
                ];
            }, $request->schools));
        }

        if($request->has('subjects')) {
            CourseSubject::insert(array_map(function($subject) use ($course) {
                return [
                    'course_id' => $course->id,
                    'subject_id' => $subject
                ];
            }, $request->subjects));
        }

        if($request->has('grades')) {
            CourseGrade::insert(array_map(function($grade) use ($course) {
                return [
                    'course_id' => $course->id,
                    'grade_id' => $grade,
                ];
            }, $request->grades));
        }
    }
}
