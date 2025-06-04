'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { cityBreadcrumbs } from './data';
import { Country } from '../countries/data';
import CityTable from './city';
import {CountriesProvider} from './countries-context';

export default function LanguageIndex({countries}:{countries: Country[]}) {


    return (
        <CountriesProvider countries={countries}>
            <AppLayout breadcrumbs={cityBreadcrumbs}>
                <Head title="Countries" />
                    <div className="flex flex-col gap-2 p-4 ">
                        <CityTable/>
                    </div>
            </AppLayout>
        </CountriesProvider>
    );
}
