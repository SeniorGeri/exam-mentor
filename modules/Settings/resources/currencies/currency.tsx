'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { CurrencyColumns } from './columns';
import { Currency } from './data';
import { CurrencyActions } from './actions';
import { CreateCurrency } from './create';

export default function CurrencyTable() {

    const { hasPermission } = usePermissions();

    const columns: ColumnDef<Currency>[] = [
        ...CurrencyColumns(),
        {
            id: 'actions',
            cell: ({ row }) => <CurrencyActions currency={row} />
        }
    ];
    return (

        <DataTable urlPath={route('currency.load')} columns={columns}>
            {hasPermission('currency.create') && (
                <CreateCurrency/>
            )}

        </DataTable>

    );
}
