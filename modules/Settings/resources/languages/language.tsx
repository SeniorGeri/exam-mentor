'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { LanguageColumns } from './columns';
import { Language } from './data';
import { LanguageActions } from './actions';
import { CreateLanguage } from './create';
import { useLocale } from '@/contexts/locale';

export default function LanguageTable() {

    const { hasPermission } = usePermissions();
    const { currentLocale } = useLocale();

    const columns: ColumnDef<Language>[] = [
        ...LanguageColumns(currentLocale),
        {
            id: 'actions',
            cell: ({ row }) => <LanguageActions language={row} />
        }
    ];
    return (

        <DataTable urlPath={route('language.load')} columns={columns}>
            {hasPermission('language.create') && (
                <CreateLanguage />
            )}

        </DataTable>

    );
}
