'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { CoursePriceColumns } from './columns';
import { CoursePrice } from './data';
import { CoursePriceActions } from './actions';

export default function CoursePriceTable() {

    const { hasPermission } = usePermissions();

    const columns: ColumnDef<CoursePrice>[] = [
        ...CoursePriceColumns(),
        {
            id: 'actions',
            cell: ({ row }) => <CoursePriceActions coursePrice={row} />
        }
    ];
    return (

        <DataTable urlPath={route('course-pricing.load')} columns={columns}>
            {hasPermission('course-pricing.create') && (
                <></>
            )}

        </DataTable>

    );
}
