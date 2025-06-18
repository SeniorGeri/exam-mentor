'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {Liquidation} from "./data";
import { useTranslation } from 'react-i18next';
import { Instructor } from '@/modules/Hrm/resources/instructors/data';



export const LiquidationColumns = (): ColumnDef<Liquidation>[] => {
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
            accessorKey: 'winner',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('winner')}/>,
            cell: ({row}) => {
                const winner : Instructor = row.getValue('winner')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{winner.name}</span>
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
            accessorKey: 'approved',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('approved')}/>,
            cell: ({row}) => {
                const approved : boolean = row.getValue('approved')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{approved ? t('yes') : t('no')}</span>
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
