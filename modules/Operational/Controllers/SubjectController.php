<?php

declare(strict_types=1);

namespace Modules\Operational\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Operational\Models\Subject;
use Modules\Operational\Requests\Subjects\StoreSubjectRequest;
use Modules\Operational\Requests\Subjects\UpdateSubjectRequest;
use Inertia\Inertia;
use Inertia\Response;

final class SubjectController
{

    /**
     * Return view to create subjects
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Operational::subjects/index');
    }

    /**
     * Load subjects
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $subjects = Subject::filter($request)->paginate($request->limit);

        return response()->json(['data' => $subjects]);
    }

    /**
     * Store new Subject
     *
     * @param  StoreSubjectRequest $request
     * @return RedirectResponse
     */
    public function store(StoreSubjectRequest $request): RedirectResponse
    {
        Subject::create($request->validated());

        return to_route('subject.list');
    }

    /**
     * Update Subject
     *
     * @param  UpdateSubjectRequest $request
     * @param  Subject $subject
     * @return RedirectResponse
     */
    public function update(UpdateSubjectRequest $request, Subject $subject): RedirectResponse
    {
        $subject->fill($request->validated())
        ->setMultipleTranslations($request->translated(), $request->locale)
        ->save();

        return to_route('subject.list');
    }

    /**
     * Delete Subject
     *
     * @param  Subject $subject
     * @return RedirectResponse
     */
    public function destroy(Subject $subject): RedirectResponse
    {
        $subject->delete();

        return to_route('subject.list');
    }
}
