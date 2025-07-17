<?php

declare(strict_types=1);

namespace Modules\Operational\Actions;

use Modules\Operational\Models\CourseInstructorVideo;    
use Modules\Operational\Requests\CourseInstructor\StoreCourseInstructorRequest;
use Modules\Operational\Requests\CourseInstructor\UpdateCourseInstructorRequest;
use Modules\Operational\Models\CourseInstructor;

final class AddCourseInstructorVideos
{
    public static function execute(StoreCourseInstructorRequest|UpdateCourseInstructorRequest $request, CourseInstructor $courseInstructor): void
    {
        if($request->has('videos')) {

            array_map(function ($video) use ($courseInstructor) {
                CourseInstructorVideo::create([
                    'course_instructor_id' => $courseInstructor->id,
                    'title' => $video['title'],
                    'video_url' => $video['video_url'],
                    'is_free' => $video['is_free'],
                    'description' => $video['description'] ?? null,
                ]);
            }, $request->validated()['videos']);
        }
    }

    public static function edit(StoreCourseInstructorRequest|UpdateCourseInstructorRequest $request, CourseInstructor $courseInstructor): void
    {
        CourseInstructorVideo::where("course_instructor_id", $courseInstructor->id)
        ->whereNotIn('id', array_filter(array_column($request->validated()['videos'], 'id'), fn($value) => is_numeric($value)) )
        ->forceDelete();
        
        if($request->has('videos')) {
            
            array_map(function ($video) use ($courseInstructor) {
                CourseInstructorVideo::updateOrCreate(['id' => $video['id']], [
                    'course_instructor_id' => $courseInstructor->id,
                    'title' => $video['title'],
                    'video_url' => $video['video_url'],
                    'is_free' => $video['is_free'],
                    'description' => $video['description'] ?? null,
                ]);
            }, $request->validated()['videos']);
        }
    }
}
