'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { transactionBreadcrumbs } from './data';
import TransactionTable from './transaction';

export default function TransactionIndex() {



    return (
        <AppLayout breadcrumbs={transactionBreadcrumbs}>
            <Head title="Transactions" />
                <div className="flex flex-col gap-2 p-4 ">
                    <TransactionTable/>
                </div>
        </AppLayout>
    );
}
