'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {Contact} from "./data";
import {useTranslation} from 'react-i18next';



export const ContactColumns = (): ColumnDef<Contact>[] => {
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
            accessorKey: 'name',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('name')}/>,
            cell: ({row}) => {
                console.log(row.original.is_read)
                return (
                    <div className="flex space-x-2">
                        <span className={`${row.original.is_read ? 'font-light' : 'font-black'} max-w-[500px] truncate`}>{row.getValue('name')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'phone',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('phone')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className={`${row.original.is_read ? 'font-light' : 'font-black'} max-w-[500px] truncate`}>{row.getValue('phone')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'email',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('email')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className={`${row.original.is_read ? 'font-light' : 'font-black'} max-w-[500px] truncate`}>{row.getValue('email')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: false,
        },
        {
            accessorKey: 'subject',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('subject')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className={`${row.original.is_read ? 'font-light' : 'font-black'} max-w-[500px] truncate`}>{row.getValue('subject')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'ip',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('ip')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className={`${row.original.is_read ? 'font-light' : 'font-black'} max-w-[500px] truncate`}>{row.getValue('ip')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },



    ];
}
