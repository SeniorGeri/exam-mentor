<?php

declare(strict_types=1);

namespace Modules\Frontend\Controllers;

use Modules\Finance\Models\CoursePricing;
use Inertia\Inertia;
use Inertia\Response;

final class MainController
{

    /**
     * Return view of main page
     *
     * @return Response
     */
    public function index(): Response
    {

        $courses = CoursePricing::with([
            'course:id,title,image',
            'pricingType:id,name',
            'instructor:id,name',
            'language:id,language'
        ])
        ->orderBy('created_at', 'desc')
        ->limit(4)
        ->get();

        return Inertia::render('Frontend::main', [
            'courses' => $courses,
        ]);

    }

    /**
     * Return view of browse page
     *
     * @return Response
     */
    public function browse(string $searchKey = ''): Response
    {
        $courses = CoursePricing::with([
            'course:id,title,image',
            'pricingType:id,name',
            'instructor:id,name',
            'language:id,language'
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

    public function show(CoursePricing $coursePricing): Response
    {
        $course = $coursePricing->with([
            'course:id,title,image,description',
            'pricingType:id,name',
            'instructor:id,name',
            'language:id,language'
        ])->first();

        return Inertia::render('Frontend::show', [
            'course' => $course,
        ]);
    }

}
