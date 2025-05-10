'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { ExpenseColumns } from './columns';
import { Expense } from './data';
import { ExpenseActions } from './actions';
import { CreateExpense } from './create';

export default function ExpenseTable() {

    const { hasPermission } = usePermissions();

    const columns: ColumnDef<Expense>[] = [
        ...ExpenseColumns(),
        {
            id: 'actions',
            cell: ({ row }) => <ExpenseActions expense={row} />
        }
    ];
    return (

        <DataTable urlPath={route('expense.load')} columns={columns}>
            {hasPermission('expense.create') && (
                <CreateExpense />
            )}

        </DataTable>

    );
}
