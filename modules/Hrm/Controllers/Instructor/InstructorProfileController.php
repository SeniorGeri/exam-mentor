<?php

declare(strict_types=1);

namespace Modules\Hrm\Controllers\Instructor;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Hrm\Models\Instructor;

final class InstructorProfileController
{

    /**
     * Return view to create instructors
     *
     * @return Response
     */
    public function index(User $instructor): Response
    {
        $instructor->load([
            'country:id,country',
            'city:id,city',
            'gender:id,gender',
            'transactions',
            'courses.course',
            'activeCourses.courseInstructor',
            'activeCourses.student',
            'activeCourses.status',
            'liquidations'
        ]);
        // ->loadSum('transactions','amount');
        return Inertia::render('Hrm::instructors/profile/index',[
            'instructor' => $instructor
        ]);

    }

}
