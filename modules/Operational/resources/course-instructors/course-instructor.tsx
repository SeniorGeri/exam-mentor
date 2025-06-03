'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { CourseInstructorColumns } from './columns';
import { CourseInstructorActions } from './actions';
import { CourseInstructor } from './data';

export default function CourseInstructorTable() {

    const { hasPermission } = usePermissions();

    const columns: ColumnDef<CourseInstructor>[] = [
        ...CourseInstructorColumns(),
        {
            id: 'actions',
            cell: ({ row }) => <CourseInstructorActions courseInstructor={row} />
        }
    ];
    return (

        <DataTable urlPath={route('course-instructor.load')} columns={columns}>
            {hasPermission('course-instructor.create') && (
                <></>
            )}

        </DataTable>

    );
}
