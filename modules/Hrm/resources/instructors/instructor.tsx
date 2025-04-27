'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { CreateInstructor } from './create';
import { InstructorColumns } from './columns';
import { Instructor } from './data';
import { InstructorActions } from './actions';

export default function InstructorTable() {

    const { hasPermission } = usePermissions();

    const columns: ColumnDef<Instructor>[] = [
        ...InstructorColumns(),
        {
            id: 'actions',
            cell: ({ row }) => <InstructorActions instructor={row} />
        }
    ];
    return (

        <DataTable urlPath={route('instructor.load')} columns={columns}>
            {hasPermission('instructor.create') && (
                <CreateInstructor/>
            )}

        </DataTable>

    );
}
