'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { paymentBreadcrumbs } from './data';
import PaymentTable from './payment';

export default function PaymentIndex() {

    return (
        <AppLayout breadcrumbs={paymentBreadcrumbs}>
            <Head title="Payment" />
                <div className="flex flex-col gap-2 p-4 ">
                    <PaymentTable/>
                </div>
        </AppLayout>
    );
}
