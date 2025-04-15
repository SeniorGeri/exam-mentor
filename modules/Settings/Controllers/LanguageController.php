<?php

declare(strict_types=1);

namespace Modules\Settings\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Settings\Models\Language;
use Modules\Settings\Requests\Languages\StoreLanguageRequest;
use Modules\Settings\Requests\Languages\UpdateLanguageRequest;
use Inertia\Inertia;
use Inertia\Response;

final class LanguageController
{

    /**
     * Return view to create languages
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Settings::languages/index');

    }

    /**
     * Load languages
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $languages = Language::filter($request)->paginate($request->limit);

        return response()->json(['data' => $languages]);
    }

    /**
     * Store new Language
     *
     * @param  StoreLanguageRequest $request
     * @return RedirectResponse
     */
    public function store(StoreLanguageRequest $request): RedirectResponse
    {
        Language::create($request->validated());

        return to_route('language.list');
    }

    /**
     * Update Language
     *
     * @param  UpdateLanguageRequest $request
     * @param  Language $Language
     * @return RedirectResponse
     */
    public function update(UpdateLanguageRequest $request, Language $Language): RedirectResponse
    {
        $Language->fill($request->validated())
        ->setMultipleTranslations($request->translated(), $request->locale)
        ->save();

        return to_route('language.list');
    }

    /**
     * Delete Language
     *
     * @param  Language $Language
     * @return RedirectResponse
     */
    public function destroy(Language $Language): RedirectResponse
    {
        $Language->delete();

        return to_route('language.list');
    }
}
