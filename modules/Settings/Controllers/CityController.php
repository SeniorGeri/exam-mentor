<?php

declare(strict_types=1);

namespace Modules\Settings\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Settings\Models\City;
use Modules\Settings\Requests\Cities\StoreCityRequest;
use Modules\Settings\Requests\Cities\UpdateCityRequest;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Settings\Models\Country;

final class CityController
{

    /**
     * Return view to create cities
     *
     * @return Response
     */
    public function index(): Response
    {
        $countries = Country::all();
        return Inertia::render('Settings::cities/index',['countries' => $countries]);

    }

    /**
     * Load cities
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $cities = City::filter($request)->with(['country:id,country'])->paginate($request->limit);

        return response()->json(['data' => $cities]);
    }

    /**
     * Store new City
     *
     * @param  StoreCityRequest $request
     * @return RedirectResponse
     */
    public function store(StoreCityRequest $request): RedirectResponse
    {
        City::create($request->validated());

        return to_route('city.list');
    }

    /**
     * Update City
     *
     * @param  UpdateCityRequest $request
     * @param  City $City
     * @return RedirectResponse
     */
    public function update(UpdateCityRequest $request, City $City): RedirectResponse
    {
        $City->fill($request->validated())
        ->setMultipleTranslations($request->translated(), $request->locale)
        ->save();

        return to_route('city.list');
    }

    /**
     * Delete City
     *
     * @param  City $City
     * @return RedirectResponse
     */
    public function destroy(City $City): RedirectResponse
    {
        $City->delete();

        return to_route('city.list');
    }
}
