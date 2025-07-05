<?php

declare(strict_types=1);

namespace Modules\Frontend\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Modules\Operational\Models\CourseInstructor;
use Modules\Storage\Models\Slider;

final class MainController
{

    /**
     * Return view of main page
     *
     * @return Response
     */
    public function index(): Response
    {

        $courses = CourseInstructor::with([
            'course:id,title,image',
            'pricingType:id,type',
            'instructor:id,name',
            'language:id,language',
            'course.grades',
            'course.subjects',
            'course.schools',
        ])
        ->orderBy('created_at', 'desc')
        ->limit(4)
        ->get();
        
        $sliders = Slider::whereActive(true)->get();
        
        return Inertia::render('Frontend::main', [
            'courses' => $courses,
            'sliders' => $sliders,
        ]);

    }

    /**
     * Return view of browse page
     *
     * @return Response
     */
    public function browse(string $searchKey = ''): Response
    {
        $courses = CourseInstructor::with([
            'course:id,title,image',
            'pricingType:id,type',
            'instructor:id,name',
            'language:id,language',
            'course.grades',
            'course.subjects',
            'course.schools',
        ])
        ->whereHas('course', function ($query) use ($searchKey) {
            if($searchKey !== ''){
            $query->where('title', 'like', "%{$searchKey}%");
            }
        })
        ->orWhereHas('instructor', function ($query) use ($searchKey) {
            if($searchKey !== ''){
            $query->where('name', 'like', "%{$searchKey}%");
            }
        })
        ->orderBy('created_at', 'desc')
        ->paginate(24);

        return Inertia::render('Frontend::browse', [    
            'coursePaginate' => $courses,
        ]);
    }

    
    /**
     * Return view of course page
     *
     * @return Response
     */
    public function show(int $courseInstructor): Response
    {  
        $course = CourseInstructor::whereId($courseInstructor)
        ->with([
            'course:id,title,image,description',
            'pricingType:id,type',
            'instructor:id,name,profile_pic,specialization',
            'language:id,language',
            'course.grades',
            'course.subjects',
            'course.schools',
            'curricula',
            'includes',
        ])
        ->withCount('courseActive')
        ->first();
        return Inertia::render('Frontend::show', [
            'course' => $course,
        ]);
    }

}
