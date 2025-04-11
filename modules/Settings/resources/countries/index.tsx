'use client';

import { usePermissions } from '../../../../resources/js/hooks/use-permissions';
import AppLayout from '../../../../resources/js/layouts/app-layout';
// import {countryBreadcrumbs} from '../../../../../resources/js/pages/settings/country/data';
import { Head } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '../../../../resources/js/components/data-table/data-table';
import { route } from '../../../../vendor/tightenco/ziggy/src/js';
import { countryColumns } from './columns';
import { Country, countryBreadcrumbs } from './data';
import { CountryActions } from './actions';
import { CreateCountry } from './create';

export default function Countries() {
    const { hasPermission } = usePermissions();

    const columns: ColumnDef<Country>[] = [
        ...countryColumns,
        {
            id: 'actions',
            cell: ({ row }) => <CountryActions country={row} />
        }
    ];
    return (
        <AppLayout breadcrumbs={countryBreadcrumbs}>
            <Head title="Countries" />
            <div className="flex flex-col gap-2 p-4">
                <DataTable urlPath={route('country.load')} columns={columns}>
                    {/* {hasPermission('country') && ( */}
                        <CreateCountry />
                        {/* )} */}

                </DataTable>
            </div>
        </AppLayout>
    );
}
