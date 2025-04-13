'use client';

import AppLayout from '../../../../resources/js/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { countryBreadcrumbs } from './data';
import { useTranslation } from 'react-i18next';
import CountryTable from './country';

export default function CountryIndex() {

    const { t } = useTranslation('Settings');


    return (
        <AppLayout breadcrumbs={countryBreadcrumbs}>
            <Head title="Countries" />
            <div className="flex flex-col gap-2 p-4">
                <CountryTable/>
            </div>
        </AppLayout>
    );
}
