<?php

declare(strict_types=1);

namespace Modules\Hrm\Controllers\Student;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

final class StudentProfileController
{

    /**
     * Return view to create instructors
     *
     * @return Response
     */
    public function index(User $student): Response
    {
       
        $student->load([
            'country:id,country',
            'city:id,city',
            'gender:id,gender',
            'transactions',
            'activeCourses',
            'activeCourses.courseInstructor',
            'activeCourses.instructor',
            'activeCourses.status',
        ]);
        return Inertia::render('Hrm::students/profile/index',[
            'student' => $student
        ]);

    }

}
