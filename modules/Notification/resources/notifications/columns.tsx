'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {Notification} from "./data";
import {useTranslation} from 'react-i18next';



export const NotificationColumns = (): ColumnDef<Notification>[] => {
    const { t } = useTranslation('Notification');


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
            accessorKey: 'title',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('title')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className={`${row.original.is_read ? 'font-light' : 'font-black'} max-w-[500px] truncate`}>{row.getValue('title')}</span>
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
                        <span className={`${row.original.is_read ? 'font-light' : 'font-black'} max-w-[500px] truncate`}>{row.getValue('description')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'type',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('type')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className={`${row.original.is_read ? 'font-light' : 'font-black'} max-w-[500px] truncate`}>{row.getValue('notification_type')?.type}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: false,
        },
        {
            accessorKey: 'sender',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('sender')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className={`${row.original.is_read ? 'font-light' : 'font-black'} max-w-[500px] truncate`}>{row.getValue('sender')?.name}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'created_at',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('created_at')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className={`${row.original.is_read ? 'font-light' : 'font-black'} max-w-[500px] truncate`}>{row.getValue('created_at')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },



    ];
}
