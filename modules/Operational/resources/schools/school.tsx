'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { SchoolColumns } from './columns';
import { SchoolActions } from './actions';
import { CreateSchool } from './create';
import { useLocale } from '@/contexts/locale';
import { School } from './data';

export default function SchoolTable() {

    const { hasPermission } = usePermissions();
    const { currentLocale } = useLocale();

    const columns: ColumnDef<School>[] = [
        ...SchoolColumns(currentLocale),
        {
            id: 'actions',
            cell: ({ row }) => <SchoolActions school={row} />
        }
    ];
    return (

        <DataTable urlPath={route('school.load')} columns={columns}>
            {hasPermission('school.create') && (
                <CreateSchool />
            )}

        </DataTable>

    );
}
