'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { CountryColumns } from './columns';
import { Country } from './data';
import { CountryActions } from './actions';
import { CreateCountry } from './create';
import { useLocale } from '@/contexts/locale';

export default function CountryTable() {

    const { hasPermission } = usePermissions();
    const { currentLocale } = useLocale();

    const columns: ColumnDef<Country>[] = [
        ...CountryColumns(currentLocale),
        {
            id: 'actions',
            cell: ({ row }) => <CountryActions country={row} />
        }
    ];
    return (

        <DataTable urlPath={route('country.load')} columns={columns}>
            {hasPermission('country.create') && (
                <CreateCountry />
            )}

        </DataTable>

    );
}
