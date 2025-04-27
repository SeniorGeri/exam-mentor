'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {Country} from "./data";
import { useTranslation } from 'react-i18next';
import { TranslatableField } from '@/types/helpers';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';



export const CountryColumns = (currentLocale :string): ColumnDef<Country>[] => {
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
                        <AvatarImage className="h-12 w-12" src={row.getValue('flag')} alt={(row.getValue('country') as Record<string, string>)[currentLocale]} />
                    </Avatar>
                )
            },
            enableColumnFilter: false,
            enableSorting: false,
        },
        {
            accessorKey: 'country',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('country')}/>,
            cell: ({row}) => {
                const country : TranslatableField = row.getValue('country')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{country[currentLocale] || t('not_translated')}</span>
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
