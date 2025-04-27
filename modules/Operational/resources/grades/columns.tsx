'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {Grade} from "./data";
import { useTranslation } from 'react-i18next';
import { TranslatableField } from '@/types/helpers';



export const GradeColumns = (currentLocale :string): ColumnDef<Grade>[] => {
    const { t } = useTranslation('Operational');


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
                const title : TranslatableField = row.getValue('title')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{title[currentLocale] || t('not_translated')}</span>
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
