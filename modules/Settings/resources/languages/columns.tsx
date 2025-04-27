'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {Language} from "./data";
import { useTranslation } from 'react-i18next';
import { TranslatableField } from '@/types/helpers';
import { Avatar, AvatarImage } from '@/components/ui/avatar';



export const LanguageColumns = (currentLocale :string): ColumnDef<Language>[] => {
    const { t } = useTranslation('Settings');


    return [
        {
            accessorKey: 'NR',
            header: () => t('nr'),
            cell: ({row, table}) => {
                return (
                    <div className="flex space-x-2 px-4">
                        <span className="max-w-[50px] truncate font-light">
                            {row.index + 1 + table.getState().pagination.pageIndex * table.getState().pagination.pageSize}
                        </span>
                    </div>
                );
            },
        },
        {
            accessorKey: 'flag',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('flag')}/>,
            cell: ({row}) => {
                return (
                    <Avatar>
                        <AvatarImage className="h-12 w-12 object-fit" src={row.getValue('flag')} alt={(row.getValue('language') as Record<string, string>)[currentLocale]} />
                    </Avatar>
                )
            },
            enableColumnFilter: false,
            enableSorting: false,
        },
        {
            accessorKey: 'language',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('language')}/>,
            cell: ({row}) => {
                const language : TranslatableField = row.getValue('language')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{language[currentLocale] || t('not_translated')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'language_code',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('language_code')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{row.getValue('language_code')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'description',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('description')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{row.getValue('description')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: false,
        },
    ];
}
