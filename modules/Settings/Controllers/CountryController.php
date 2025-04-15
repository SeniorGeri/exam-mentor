<?php

declare(strict_types=1);

namespace Modules\Settings\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Settings\Models\Country;
use Modules\Settings\Requests\Countries\StoreCountryRequest;
use Modules\Settings\Requests\Countries\UpdateCountryRequest;
use Inertia\Inertia;
use Inertia\Response;

final class CountryController
{

    /**
     * Return view to create countries
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Settings::countries/index');

    }

    /**
     * Load countries
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $countries = Country::filter($request)->paginate($request->limit);

        return response()->json(['data' => $countries]);
    }

    /**
     * Store new Country
     *
     * @param  StoreCountryRequest $request
     * @return RedirectResponse
     */
    public function store(StoreCountryRequest $request): RedirectResponse
    {
        Country::create($request->validated());

        return to_route('country.list');
    }

    /**
     * Update Country
     *
     * @param  UpdateCountryRequest $request
     * @param  Country $Country
     * @return RedirectResponse
     */
    public function update(UpdateCountryRequest $request, Country $Country): RedirectResponse
    {
        $Country->fill($request->validated())
        ->setMultipleTranslations($request->translated(), $request->locale)
        ->save();

        return to_route('country.list');
    }

    /**
     * Delete Country
     *
     * @param  Country $Country
     * @return RedirectResponse
     */
    public function destroy(Country $Country): RedirectResponse
    {
        $Country->delete();

        return to_route('country.list');
    }
}
