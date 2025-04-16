'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { CityColumns } from './columns';
import { City } from './data';
import { CityActions } from './actions';
import { CreateCity } from './create';
import { useLocale } from '@/contexts/locale';

export default function CityTable() {

    const { hasPermission } = usePermissions();
    const { currentLocale } = useLocale();

    const columns: ColumnDef<City>[] = [
        ...CityColumns(currentLocale),
        {
            id: 'actions',
            cell: ({ row }) => <CityActions city={row} />
        }
    ];
    return (

        <DataTable urlPath={route('city.load')} columns={columns}>
            {hasPermission('city.create') && (
                <CreateCity/>
            )}

        </DataTable>

    );
}
