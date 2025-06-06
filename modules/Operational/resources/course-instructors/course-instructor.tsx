'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { CourseInstructorColumns } from './columns';
import { CourseInstructorActions } from './actions';
import { CourseInstructor } from './data';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export default function CourseInstructorTable() {

    const { hasPermission } = usePermissions();
    const { t } = useTranslation('Operational');

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
                 <a href={route('course-instructor.create')}>
                 <Button variant="default" size="sm">
                     {t('create_course_instructor')}
                 </Button>
             </a>
            )}

        </DataTable>

    );
}
