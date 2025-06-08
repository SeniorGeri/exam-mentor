'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { schoolBreadcrumbs } from './data';
import SchoolTable from './school';
import { CountriesProvider } from '@/modules/Settings/resources/cities/countries-context';
import { Country } from '@/modules/Settings/resources/countries/data';

export default function SchoolIndex({countries}:{countries: Country[]}) {



    return (
        <CountriesProvider countries={countries}>
            <AppLayout breadcrumbs={schoolBreadcrumbs}>
                <Head title="Schools" />
                    <div className="flex flex-col gap-2 p-4 ">
                        <SchoolTable/>
                    </div>
            </AppLayout>
        </CountriesProvider>
    );
}
