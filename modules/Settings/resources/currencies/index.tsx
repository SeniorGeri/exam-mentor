'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { currencyBreadcrumbs } from './data';
import CurrencyTable from './currency';

export default function LanguageIndex() {



    return (
        <AppLayout breadcrumbs={currencyBreadcrumbs}>
            <Head title="Countries" />
                <div className="flex flex-col gap-2 p-4 ">
                    <CurrencyTable/>
                </div>
        </AppLayout>
    );
}
