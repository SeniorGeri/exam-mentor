'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {Country} from "./data";



export const countryColumns = (currentLocale :string): ColumnDef<Country>[] => {


    return [
        {
            accessorKey: 'NR',
            header: () => 'Nr',
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
            accessorKey: 'country',
            header: ({column}) => <DataTableColumnHeader column={column} title="Shteti"/>,
            cell: ({row}) => {
                const country = row.getValue('country')
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{country[currentLocale] || 'Not Translated'}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },
        {
            accessorKey: 'description',
            header: ({column}) => <DataTableColumnHeader column={column} title="Shenime"/>,
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
