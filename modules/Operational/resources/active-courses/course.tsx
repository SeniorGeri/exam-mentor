'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { ActiveCourseColumns } from './columns';
import { ActiveCourse } from './data';
import { ActiveCourseActions } from './actions';
import { useLocale } from '@/contexts/locale';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { usePermissions } from '@/hooks/use-permissions.js';

export default function ActiveCourseTable() {

    const { currentLocale } = useLocale();
    const { t } = useTranslation('Operational');
    const { hasPermission } = usePermissions();

    const columns: ColumnDef<ActiveCourse>[] = [
        ...ActiveCourseColumns(currentLocale),
        {
            id: 'actions',
            cell: ({ row }) => <ActiveCourseActions activeCourse={row} />
        }
    ];
    return (

        <DataTable urlPath={route('active-course.load')} columns={columns}>
            {hasPermission('active-course.create') && (
                <a href={route('active-course.create')}>
                    <Button variant="default" size="sm">
                        {t('create_active_course')}
                    </Button>
                </a>
            )}
        </DataTable>

    );
}
