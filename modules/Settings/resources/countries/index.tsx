'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { countryBreadcrumbs } from './data';
import CountryTable from './country';

export default function CountryIndex() {



    return (
        <AppLayout breadcrumbs={countryBreadcrumbs}>
            <Head title="Countries" />
                <div className="flex flex-col gap-2 p-4 ">
                    <CountryTable/>
                </div>
        </AppLayout>
    );
}
