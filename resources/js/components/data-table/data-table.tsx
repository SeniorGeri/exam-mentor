'use client';

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    Table as TableType,
    useReactTable,
    VisibilityState,
} from '@tanstack/react-table';

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import * as React from 'react';
import {ReactElement, useEffect, useState} from 'react';
import {DataTablePagination} from './data-table-pagination';
import {DataTableToolbar} from './data-table-toolbar';

export interface FilterRequest<TData> {
    urlPath: string;
    pageIndex: number;
    pageSize: number;
    filter: string;
    columns: ColumnDef<TData>[];
    sorting: SortingState;
}

export type ColumnFilter = {
    accessorKey: string;
    enableColumnFilter: boolean;
    enableSorting: boolean;
};

export async function fetchData<TData>({
                                           urlPath,
                                           pageIndex,
                                           pageSize,
                                           filter,
                                           columns,
                                           sorting,
                                       }: FilterRequest<TData>): Promise<{ data: TData[]; stats: TableStats }> {
    const filteredColumns: ColumnDef<TData>[] = columns.filter((column: ColumnDef<TData>) => column.enableColumnFilter);

    let columnsToFilter = '';
    if (filteredColumns.length > 0) {
        columnsToFilter = filteredColumns.map((column: ColumnFilter) => column.accessorKey).join(',');
    }

    const filterKey: string = filter !== '' ? `&filter=${filter}` : '';
    const sort: string = sorting.length > 0 ? `&sort=${sorting[0].id}` : '';
    const direction: string = sorting.length > 0 ? `&direction=${sorting[0].desc ? 'desc' : 'asc'}` : '';

    const response = await fetch(`${urlPath}?page=${pageIndex + 1}&limit=${pageSize}&columns=${columnsToFilter}${filterKey}${sort}${direction}`);

    const data = await response.json();
    return {
        data: data.data.data,
        stats: {
            totalRows: data.data.total,
            from: data.data.from,
            to: data.data.to,
        },
    };
}

interface DataTableProps<TData> {
    urlPath: string;
    columns: ColumnDef<TData>[];
    children: ReactElement;
}

export type TableStats = {
    totalRows: number;
    from: number;
    to: number;
};

export function DataTable<TData>({columns, urlPath, children}: DataTableProps<TData>) {
    const [data, setData] = useState([]);

    const [globalFilter, setGlobalFilter] = useState('');

    const [rowSelection, setRowSelection] = React.useState({});

    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

    const [sorting, setSorting] = React.useState<SortingState>([]);

    const [tableStats, setTableStats] = React.useState<TableStats>({totalRows: 0, from: 0, to: 0});

    const [pagination, setPagination] = useState({
        urlPath: urlPath,
        pageIndex: 0, // Current page
        pageSize: 10, // Rows per page
    });

    useEffect(() => {
        const loadTableData = async () => {
            const {data, stats} = await fetchData({...pagination, filter: globalFilter, columns: columns, sorting: sorting});
            setData(data);
            setTableStats(stats);
        };
        loadTableData().then(() => {
        });
    }, [pagination, globalFilter, sorting, columns]);

    const table: TableType<TData> = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            pagination,
            globalFilter,
        },
        pageCount: Math.ceil(tableStats.totalRows / pagination.pageSize),
        manualPagination: true,
        onGlobalFilterChange: setGlobalFilter,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="space-y-4">
            <DataTableToolbar table={table}>{children}</DataTableToolbar>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <DataTablePagination table={table} stats={tableStats}/>
        </div>
    );
}
