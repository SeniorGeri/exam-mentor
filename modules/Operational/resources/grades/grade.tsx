'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { GradeColumns } from './columns';
import { Grade } from './data';
import { GradeActions } from './actions';
import { CreateGrade } from './create';
import { useLocale } from '@/contexts/locale';

export default function CourseTable() {

    const { hasPermission } = usePermissions();
    const { currentLocale } = useLocale();

    const columns: ColumnDef<Grade>[] = [
        ...GradeColumns(currentLocale),
        {
            id: 'actions',
            cell: ({ row }) => <GradeActions grade={row} />
        }
    ];
    return (

        <DataTable urlPath={route('grade.load')} columns={columns}>
            {hasPermission('grade.create') && (
                <CreateGrade />
            )}

        </DataTable>

    );
}
