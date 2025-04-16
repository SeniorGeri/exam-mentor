<?php

declare(strict_types=1);

namespace Modules\Settings\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Settings\Models\Currency;
use Modules\Settings\Requests\Currencies\StoreCurrencyRequest;
use Modules\Settings\Requests\Currencies\UpdateCurrencyRequest;
use Inertia\Inertia;
use Inertia\Response;

final class CurrencyController
{

    /**
     * Return view to create currencies
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Settings::currencies/index');

    }

    /**
     * Load currencies
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $currencies = Currency::filter($request)->paginate($request->limit);

        return response()->json(['data' => $currencies]);
    }

    /**
     * Store new Currency
     *
     * @param  StoreCurrencyRequest $request
     * @return RedirectResponse
     */
    public function store(StoreCurrencyRequest $request): RedirectResponse
    {
        if($request->is_primary){
            Currency::query()->update(['is_primary' => false]);
        }
        Currency::create($request->validated());

        return to_route('currency.list');
    }

    /**
     * Update Currency
     *
     * @param  UpdateCurrencyRequest $request
     * @param  Currency $Currency
     * @return RedirectResponse
     */
    public function update(UpdateCurrencyRequest $request, Currency $Currency): RedirectResponse
    {
        if($request->is_primary && !$Currency->is_primary) {
            Currency::query()->update(['is_primary' => false]);
        }
        $Currency->update($request->validated());

        return to_route('currency.list');
    }

    /**
     * Delete Currency
     *
     * @param  Currency $Currency
     * @return RedirectResponse
     */
    public function destroy(Currency $Currency): RedirectResponse
    {
        $Currency->delete();

        return to_route('currency.list');
    }
}
