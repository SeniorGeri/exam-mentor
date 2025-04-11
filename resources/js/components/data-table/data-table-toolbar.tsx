'use client';

import {Table} from '@tanstack/react-table';

import {Input} from '@/components/ui/input';
import {DataTableViewOptions} from '@/components/data-table/data-table-view-options';
import {ReactElement, useEffect, useState} from 'react';

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    children: ReactElement;
}

export function DataTableToolbar<TData>({table, children}: DataTableToolbarProps<TData>) {
    const [input, setInput] = useState('');

    useEffect(() => {
        if (input) {
            const timeout = setTimeout(() => {
                table.setGlobalFilter(String(input));
            }, 500);

            return () => clearTimeout(timeout);
        } else {
            table.setGlobalFilter(String(''));
        }
    }, [input, table]);

    return (
        <div className="flex items-center justify-between gap-2">
            <div className="flex flex-1 items-center space-x-2">
                <Input placeholder="Filter..." onChange={(e) => setInput(e.target.value)} className="h-8 w-[150px] lg:w-[250px]"/>
                {/*{table.getColumn('country') && <DataTableFacetedFilter column={table.getColumn('status')} title="Status" options={statuses} />}*/}
                {/*{table.getColumn('priority') && <DataTableFacetedFilter column={table.getColumn('priority')} title="Priority" options={priorities} />}*/}
                {/*{!isFiltered && (*/}
                {/*    <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">*/}
                {/*        Reset*/}
                {/*        <X />*/}
                {/*    </Button>*/}
                {/*)}*/}
            </div>
            {children}
            <DataTableViewOptions table={table}/>
        </div>
    );
}
