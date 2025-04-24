'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { CreateStudent } from './create';
import { useLocale } from '@/contexts/locale';
import { StudentColumns } from './columns';
import { Student } from './data';
import { StudentActions } from './actions';

export default function StudentTable() {

    const { hasPermission } = usePermissions();
    const { currentLocale } = useLocale();

    const columns: ColumnDef<Student>[] = [
        ...StudentColumns(currentLocale),
        {
            id: 'actions',
            cell: ({ row }) => <StudentActions student={row} />
        }
    ];
    return (

        <DataTable urlPath={route('student.load')} columns={columns}>
            {hasPermission('student.create') && (
                <CreateStudent/>
            )}

        </DataTable>

    );
}
