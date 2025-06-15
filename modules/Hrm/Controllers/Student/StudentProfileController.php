<?php

declare(strict_types=1);

namespace Modules\Hrm\Controllers\Student;

use Inertia\Inertia;
use Inertia\Response;
use Modules\Hrm\Models\Student;

final class StudentProfileController
{

    /**
     * Return view to create instructors
     *
     * @return Response
     */
    public function index(Student $student): Response
    {
       
        $student->load([
            'country:id,country',
            'city:id,city',
            'gender:id,gender',
            'transactions',
            'courses',
            'activeCourses',
            'liquidations'
        ]);
        return Inertia::render('Hrm::students/profile/index',[
            'student' => $student
        ]);

    }

}
