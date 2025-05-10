<?php

declare(strict_types=1);

namespace Modules\Finance\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Modules\Finance\Models\Transaction;
use Inertia\Inertia;
use Inertia\Response;

final class TransactionController
{

    /**
     * Return view to create transactions
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Finance::transactions/index');
    }

    /**
     * Load transactions
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $transactions = Transaction::with(['user', 'transactionable'])
        ->filter($request)
        ->paginate($request->limit);

        return response()->json(['data' => $transactions]);
    }


}
