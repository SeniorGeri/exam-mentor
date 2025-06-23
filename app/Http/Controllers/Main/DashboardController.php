<?php

declare(strict_types=1);

namespace App\Http\Controllers\Main;

use App\Enums\RolesEnum;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use App\Services\DashboardService;

final class DashboardController
{

    public function __construct(
        private DashboardService $dashboardService
    ) {}

    /**
     * Return view to dashboard
     *
     * @return Response
     */
    public function index(): Response
    {
        $user = Auth::user();

        if ($user->hasRole(RolesEnum::ADMIN->value)) {
           return $this->dashboardService->getAdminView();
        }
        if($user->hasRole(RolesEnum::INSTRUCTOR->value)) {
            return $this->dashboardService->getInstructorView($user);
        }
        if($user->hasRole(RolesEnum::STUDENT->value)) {
            return $this->dashboardService->getStudentView($user);
        }

        return $this->dashboardService->getStudentView($user);
    }
}
