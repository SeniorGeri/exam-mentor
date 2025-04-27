'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {Payment} from "./data";
import { useTranslation } from 'react-i18next';
import { TranslatableField } from '@/types/helpers';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarImage } from '@/components/ui/avatar';



export const PaymentColumns = (currentLocale :string): ColumnDef<Payment>[] => {
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
            accessorKey: 'image',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('image')}/>,
            cell: ({row}) => {
                return (
                    <Avatar>
                        <AvatarImage className="h-12 w-12" src={row.getValue('image')} alt={(row.getValue('method') as Record<string, string>)[currentLocale]} />
                    </Avatar>
                )
            },
            enableColumnFilter: false,
            enableSorting: false,
        },

        {
            accessorKey: 'method',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('method')}/>,
            cell: ({row}) => {
                const method : TranslatableField = row.getValue('method')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{method[currentLocale] || t('not_translated')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'is_primary',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('is_primary')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{row.getValue('is_primary') ? t('yes'): t('no')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'active',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('active')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{row.getValue('active') ? t('yes'): t('no')}</span>
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
