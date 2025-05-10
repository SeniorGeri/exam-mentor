'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {Transaction} from "./data";
import { useTranslation } from 'react-i18next';



export const TransactionColumns = (): ColumnDef<Transaction>[] => {
    const { t } = useTranslation('Finance');


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
            accessorKey: 'income',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('income')}/>,
            cell: ({row}) => {
                const income : boolean = row.getValue('income')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{income ? t('income') : t('expense')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'value',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('value')}/>,
            cell: ({row}) => {
                const value : number = row.getValue('value')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{value}</span>
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
