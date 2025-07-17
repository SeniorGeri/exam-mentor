<?php

declare(strict_types=1);

namespace Modules\Operational\Actions;

use Modules\Operational\Models\CourseIncludes;    
use Modules\Operational\Requests\CourseInstructor\StoreCourseInstructorRequest;
use Modules\Operational\Requests\CourseInstructor\UpdateCourseInstructorRequest;
use Modules\Operational\Models\CourseInstructor;

final class AddCourseInstructorIncludes
{
    public static function execute(StoreCourseInstructorRequest|UpdateCourseInstructorRequest $request, CourseInstructor $courseInstructor): void
    {
        if($request->has('includes')) {
            
            array_map(function ($include) use ($courseInstructor) {
                CourseIncludes::create([
                    'course_instructor_id' => $courseInstructor->id,
                    'title' => $include['title'],
                ]);
            }, $request->validated()['includes']);
        }
    }

    public static function edit(StoreCourseInstructorRequest|UpdateCourseInstructorRequest $request, CourseInstructor $courseInstructor): void
    {

        CourseIncludes::where("course_instructor_id", $courseInstructor->id)
        ->whereNotIn('id', array_filter(array_column($request->validated()['includes'], 'id'), fn($value) => is_numeric($value)) )
        ->forceDelete();
        
        
        if($request->has('includes')) {
            
            array_map(function ($include) use ($courseInstructor) {
                CourseIncludes::updateOrCreate(['id' => $include['id']], [
                    'course_instructor_id' => $courseInstructor->id,
                    'title' => $include['title'],
                ]);
            }, $request->validated()['includes']);
        }
    }
}
