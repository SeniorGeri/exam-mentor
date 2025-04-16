'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { PaymentColumns } from './columns';
import { Payment } from './data';
import { PaymentActions } from './actions';
import { CreatePayment } from './create';
import { useLocale } from '@/contexts/locale';

export default function PaymentTable() {

    const { hasPermission } = usePermissions();
    const { currentLocale } = useLocale();

    const columns: ColumnDef<Payment>[] = [
        ...PaymentColumns(currentLocale),
        {
            id: 'actions',
            cell: ({ row }) => <PaymentActions payment={row} />
        }
    ];
    return (

        <DataTable urlPath={route('payment.load')} columns={columns}>
            {hasPermission('payment.create') && (
                <CreatePayment />
            )}

        </DataTable>

    );
}
