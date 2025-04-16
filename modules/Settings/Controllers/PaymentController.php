<?php

declare(strict_types=1);

namespace Modules\Settings\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Settings\Models\PaymentMethod;
use Modules\Settings\Requests\Payments\StorePaymentRequest;
use Modules\Settings\Requests\Payments\UpdatePaymentRequest;
use Inertia\Inertia;
use Inertia\Response;

final class PaymentController
{

    /**
     * Return view to create payments
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Settings::payments/index');

    }

    /**
     * Load payments
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $payments = PaymentMethod::filter($request)->paginate($request->limit);

        return response()->json(['data' => $payments]);
    }

    /**
     * Store new Payment
     *
     * @param  StorePaymentRequest $request
     * @return RedirectResponse
     */
    public function store(StorePaymentRequest $request): RedirectResponse
    {
        if($request->is_primary) {
            PaymentMethod::query()->update(['is_primary' => false]);
        }

        PaymentMethod::create($request->validated());

        return to_route('payment.list');
    }

    /**
     * Update Payment
     *
     * @param  UpdatePaymentRequest $request
     * @param  PaymentMethod $Payment
     * @return RedirectResponse
     */
    public function update(UpdatePaymentRequest $request, PaymentMethod $Payment): RedirectResponse
    {
        if($request->is_primary && !$Payment->is_primary) {
            PaymentMethod::query()->update(['is_primary' => false]);
        }

        $Payment->fill($request->validated())
        ->setMultipleTranslations($request->translated(), $request->locale)
        ->save();

        return to_route('payment.list');
    }

    /**
     * Delete Payment
     *
     * @param  PaymentMethod $Payment
     * @return RedirectResponse
     */
    public function destroy(PaymentMethod $Payment): RedirectResponse
    {
        $Payment->delete();

        return to_route('payment.list');
    }
}
