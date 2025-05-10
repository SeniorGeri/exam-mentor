<?php

declare(strict_types=1);

namespace Modules\Finance\Controllers;

use App\Http\Requests\Main\FilterTableRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Finance\Models\Expense;
use Modules\Finance\Requests\Expenses\StoreExpenseRequest;
use Modules\Finance\Requests\Expenses\UpdateExpenseRequest;
use Inertia\Inertia;
use Inertia\Response;

final class ExpenseController
{

    /**
     * Return view to create expenses
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Finance::expenses/index');
    }

    /**
     * Load expenses
     *
     * @param  FilterTableRequest $request
     * @return JsonResponse
     */
    public function show(FilterTableRequest $request): JsonResponse
    {
        $expenses = Expense::filter($request)->paginate($request->limit);

        return response()->json(['data' => $expenses]);
    }

    /**
     * Store new expense
     *
     * @param  StoreExpenseRequest $request
     * @return RedirectResponse
     */
    public function store(StoreExpenseRequest $request): RedirectResponse
    {
        Expense::create($request->validated());

        return to_route('expense.list');
    }

    /**
     * Update expense
     *
     * @param  UpdateExpenseRequest $request
     * @param  Expense $expense
     * @return RedirectResponse
     */
    public function update(UpdateExpenseRequest $request, Expense $expense): RedirectResponse
    {
        $expense->fill($request->validated())->save();

        return to_route('expense.list');
    }

    /**
     * Delete expense
     *
     * @param  Expense $expense
     * @return RedirectResponse
     */
    public function destroy(Expense $expense): RedirectResponse
    {
        $expense->delete();

        return to_route('expense.list');
    }
}
