<?php

declare(strict_types=1);

namespace Modules\Operational\Actions;

use Modules\Operational\Models\CourseCurriculum;    
use Modules\Operational\Requests\CourseInstructor\StoreCourseInstructorRequest;
use Modules\Operational\Requests\CourseInstructor\UpdateCourseInstructorRequest;
use Modules\Operational\Models\CourseInstructor;

final class AddCourseInstructorCurricula
{
    public static function execute(StoreCourseInstructorRequest|UpdateCourseInstructorRequest $request, CourseInstructor $courseInstructor): void
    {
        if($request->has('curricula')) {
            
            array_map(function ($curriculum) use ($courseInstructor) {
                CourseCurriculum::create([
                    'course_instructor_id' => $courseInstructor->id,
                    'title' => $curriculum['title'],
                    'description' => $curriculum['description'],
                ]);
            }, $request->validated()['curricula']);
        }
    }


    
    public static function edit(StoreCourseInstructorRequest|UpdateCourseInstructorRequest $request, CourseInstructor $courseInstructor): void
    {
        
        CourseCurriculum::where("course_instructor_id", $courseInstructor->id)
        ->whereNotIn('id',   array_filter(array_column($request->validated()['curricula'], 'id'), fn($value) => is_numeric($value)) )
        ->forceDelete();

        if($request->has('curricula')) {
            
            array_map(function ($curriculum) use ($courseInstructor) {
                CourseCurriculum::updateOrCreate(['id' => $curriculum['id']], [
                    'course_instructor_id' => $courseInstructor->id,
                    'title' => $curriculum['title'],
                    'description' => $curriculum['description'],
                ]);
            }, $request->validated()['curricula']);
        }
    }
}
