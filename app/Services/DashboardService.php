<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Finance\Models\Liquidation;
use Modules\Hrm\Models\Instructor;
use Modules\Hrm\Models\Student;
use Modules\Operational\Models\ActiveCourse;
use Modules\Operational\Models\Course;
use Modules\Operational\Enums\CourseStatusEnum;
use Modules\Operational\Models\CourseInstructor;

class DashboardService
{       
    public function getAdminView() : Response
    {
        $instructors = Instructor::select([DB::raw('COUNT(*) as total'), DB::raw('SUM(CASE WHEN active = 1 THEN 1 ELSE 0 END) as total_active')])->first();
        $students = Student::select([DB::raw('COUNT(*) as total'), DB::raw('SUM(CASE WHEN active = 1 THEN 1 ELSE 0 END) as total_active')])->first();
        $courses = Course::count();
        $activeCourses = ActiveCourse::select([
            DB::raw('COUNT(*) as total'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::FINISHED->value . ' THEN 1 ELSE 0 END) as total_finished'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::ACTIVE->value . ' THEN 1 ELSE 0 END) as total_active'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::REQUESTED->value . ' THEN 1 ELSE 0 END) as total_requested'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::REJECTED->value . ' THEN 1 ELSE 0 END) as total_rejected'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::APPROVED->value . ' THEN 1 ELSE 0 END) as total_approved'),
        ])->first();

        $instructorList = Instructor::withCount('activeCourses')
        ->orderBy('active_courses_count', 'desc')
        ->take(3)
        ->get();

        $studentList = Student::withCount('activeCourses')
        ->orderBy('active_courses_count', 'desc')
        ->take(3)
        ->get();
            
        return Inertia::render('dashboards/admin', [
            'instructors' => $instructors,
            'students' => $students,
            'courses' => $courses,
            'activeCourses' => $activeCourses,
            'instructorList' => $instructorList,
            'studentList' => $studentList,
        ]);
    }

    public function getInstructorView($user) : Response
    {

        $courses = CourseInstructor::whereInstructorId($user->id)->count();

        $activeCourses = ActiveCourse::whereCourseInstructorId($user->id)->select([
            DB::raw('COUNT(*) as total'),
            DB::raw('
            SUM(CASE WHEN status_id = ' . CourseStatusEnum::FINISHED->value . ' 
            OR WHEN status_id = ' . CourseStatusEnum::ACTIVE->value . ' 
            OR WHEN status_id = ' . CourseStatusEnum::APPROVED->value . ' 
            THEN value ELSE 0 END) as total_price'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::FINISHED->value . ' THEN 1 ELSE 0 END) as total_finished'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::ACTIVE->value . ' THEN 1 ELSE 0 END) as total_active'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::REQUESTED->value . ' THEN 1 ELSE 0 END) as total_requested'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::REJECTED->value . ' THEN 1 ELSE 0 END) as total_rejected'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::APPROVED->value . ' THEN 1 ELSE 0 END) as total_approved'),
        ])->first();

        $activeCoursesList = ActiveCourse::whereCourseInstructorId($user->id)
        ->whereIn('status_id', [CourseStatusEnum::ACTIVE->value, CourseStatusEnum::APPROVED->value])
        ->get();
        
        $liquidations = Liquidation::whereWinnerId($user->id)->get();

        return Inertia::render('dashboards/instructor', [
            'user' => $user,
            'courses' => $courses,
            'activeCourses' => $activeCourses,
            'activeCoursesList' => $activeCoursesList,
            'liquidations' => $liquidations
        ]);
    }

    public function getStudentView($user) : Response
    {

        $activeCourses = ActiveCourse::whereStudentId($user->id)->select([
            DB::raw('COUNT(*) as total'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::FINISHED->value . ' THEN 1 ELSE 0 END) as total_finished'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::ACTIVE->value . ' THEN 1 ELSE 0 END) as total_active'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::REQUESTED->value . ' THEN 1 ELSE 0 END) as total_requested'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::REJECTED->value . ' THEN 1 ELSE 0 END) as total_rejected'),
            DB::raw('SUM(CASE WHEN status_id = ' . CourseStatusEnum::APPROVED->value . ' THEN 1 ELSE 0 END) as total_approved'),
        ])->first();

        return Inertia::render('dashboards/student', [
            'user' => $user,
            'activeCourses' => $activeCourses
        ]);
    }
}
