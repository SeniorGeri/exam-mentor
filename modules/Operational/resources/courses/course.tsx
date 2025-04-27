'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { CourseColumns } from './columns';
import { Course } from './data';
import { CourseActions } from './actions';
import { CreateCourse } from './create';
import { useLocale } from '@/contexts/locale';

export default function CourseTable() {

    const { hasPermission } = usePermissions();
    const { currentLocale } = useLocale();

    const columns: ColumnDef<Course>[] = [
        ...CourseColumns(currentLocale),
        {
            id: 'actions',
            cell: ({ row }) => <CourseActions course={row} />
        }
    ];
    return (

        <DataTable urlPath={route('course.load')} columns={columns}>
            {hasPermission('course.create') && (
                <CreateCourse />
            )}

        </DataTable>

    );
}
