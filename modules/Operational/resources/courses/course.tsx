'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { CourseColumns } from './columns';
import { Course } from './data';
import { CourseActions } from './actions';
import { useLocale } from '@/contexts/locale';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export default function CourseTable() {

    const { hasPermission } = usePermissions();
    const { currentLocale } = useLocale();
    const { t } = useTranslation('Operational');    

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
                <a href={route('course.create')}>
                    <Button variant="default" size="sm">
                        {t('create_course')}
                    </Button>
                </a>
            )}

        </DataTable>

    );
}
