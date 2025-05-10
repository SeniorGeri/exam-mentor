'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { TransactionColumns } from './columns';
import { Transaction } from './data';

export default function TransactionTable() {

    const { hasPermission } = usePermissions();

    const columns: ColumnDef<Transaction>[] = TransactionColumns();
    
    return (

        <DataTable urlPath={route('transaction.load')} columns={columns}>
            {hasPermission('transaction.create') && (
                <></>
            )}

        </DataTable>

    );
}
