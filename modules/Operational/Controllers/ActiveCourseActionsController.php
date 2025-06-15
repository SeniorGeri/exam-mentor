<?php

declare(strict_types=1);

namespace Modules\Operational\Controllers;

use App\Enums\RolesEnum;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Modules\Operational\Models\ActiveCourse;
use Inertia\Response;


final class ActiveCourseActionsController
{

    /**
     * Return view to create active courses
     *
     * @return Response
     */
    public function store(ActiveCourse $activeCourse): RedirectResponse
    {
        
        $user = Auth::user();
        
        if(
            $user->hasRole(RolesEnum::ADMIN->value) || 
            ($user->hasRole(RolesEnum::INSTRUCTOR->value) && $user->id == $activeCourse->instructor_id)) {
            $activeCourse->decrement('left', 1);
        }

        return to_route('active-course.list');


    }

}
