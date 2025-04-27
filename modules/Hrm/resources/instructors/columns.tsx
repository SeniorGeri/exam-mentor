'use client';

import {DataTableColumnHeader} from '@/components/data-table/data-table-column-header';
import {ColumnDef} from '@tanstack/react-table';
import {Instructor} from "./data";
import {useTranslation} from 'react-i18next';
import { Avatar, AvatarImage } from '@/components/ui/avatar';



export const InstructorColumns = (): ColumnDef<Instructor>[] => {
    const { t } = useTranslation('Hrm');


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
            accessorKey: 'profile_pic',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('profile_pic')}/>,
            cell: ({row}) => {
                return (
                    <Avatar>
                        <AvatarImage className="h-12 w-12" src={row.getValue('profile_pic')} alt={row.getValue('name')} />
                    </Avatar>
                )
            },
            enableColumnFilter: false,
            enableSorting: false,
        },

        {
            accessorKey: 'name',
            header: ({column}) => <DataTableColumnHeader column={column} title={t('instructor')}/>,
            cell: ({row}) => {
                return (
                    <div className="flex space-x-2">
                        <span className="max-w-[500px] truncate font-light">{row.getValue('name')}</span>
                    </div>
                );
            },
            enableColumnFilter: true,
            enableSorting: true,
        },

    ];
}
