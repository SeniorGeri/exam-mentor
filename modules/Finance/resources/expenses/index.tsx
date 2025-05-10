'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { expenseBreadcrumbs } from './data';
import ExpenseTable from './expense';

export default function ExpenseIndex() {



    return (
        <AppLayout breadcrumbs={expenseBreadcrumbs}>
            <Head title="Expenses" />
                <div className="flex flex-col gap-2 p-4 ">
                    <ExpenseTable/>
                </div>
        </AppLayout>
    );
}
