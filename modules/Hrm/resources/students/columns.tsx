'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {Student} from "./data";
import {useTranslation} from 'react-i18next';



export const StudentColumns = (currentLocale :string): ColumnDef<Student>[] => {
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
            accessorKey: 'student',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('student')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{row.getValue('student')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        // {
        //     accessorKey: 'country',
        //     header: ({column}) => <DataTableColumnHeader column={column} title={t('country')}/>,
        //     cell: ({row}) => {
        //         const country = row.getValue('country').country
        //         return (
        //             <div className="flex space-x-2">
        //                 <span className="max-w-[500px] truncate font-light">{country[currentLocale] || t('not_translated')}</span>
        //             </div>
        //         );
        //     },
        //     enableColumnFilter: true,
        //     enableSorting: true,
        // },
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
