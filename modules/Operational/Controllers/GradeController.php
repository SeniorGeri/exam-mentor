<?php

declare(strict_types=1);

namespace Modules\Operational\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Operational\Models\Grade;
use Modules\Operational\Requests\Grades\StoreGradeRequest;
use Modules\Operational\Requests\Grades\UpdateGradeRequest;
use Inertia\Inertia;
use Inertia\Response;

final class GradeController
{

    /**
     * Return view to create grades
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Operational::grades/index');
    }

    /**
     * Load grades
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $grades = Grade::filter($request)->paginate($request->limit);

        return response()->json(['data' => $grades]);
    }

    /**
     * Store new Grade
     *
     * @param  StoreGradeRequest $request
     * @return RedirectResponse
     */
    public function store(StoreGradeRequest $request): RedirectResponse
    {
        Grade::create($request->validated());

        return to_route('grade.list');
    }

    /**
     * Update Grade
     *
     * @param  UpdateGradeRequest $request
     * @param  Grade $grade
     * @return RedirectResponse
     */
    public function update(UpdateGradeRequest $request, Grade $grade): RedirectResponse
    {
        $grade->fill($request->validated())
        ->setMultipleTranslations($request->translated(), $request->locale)
        ->save();

        return to_route('grade.list');
    }

    /**
     * Delete Grade
     *
     * @param  Grade $grade
     * @return RedirectResponse
     */
    public function destroy(Grade $grade): RedirectResponse
    {
        $grade->delete();

        return to_route('grade.list');
    }
}
