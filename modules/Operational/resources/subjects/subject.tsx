'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { SubjectColumns } from './columns';
import { SubjectActions } from './actions';
import { CreateSubject } from './create';
import { useLocale } from '@/contexts/locale';
import { Subject } from './data';

export default function SubjectTable() {

    const { hasPermission } = usePermissions();
    const { currentLocale } = useLocale();

    const columns: ColumnDef<Subject>[] = [
        ...SubjectColumns(currentLocale),
        {
            id: 'actions',
            cell: ({ row }) => <SubjectActions subject={row} />
        }
    ];
    return (

        <DataTable urlPath={route('subject.load')} columns={columns}>
            {hasPermission('subject.create') && (
                <CreateSubject />
            )}

        </DataTable>

    );
}
