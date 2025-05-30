'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { contactBreadcrumbs } from './data';
import { DataTable } from '@/components/data-table/data-table';
import { ColumnDef } from '@tanstack/react-table';
import { Contact } from './data';
import { ContactColumns } from './columns';
import { ContactActions } from './actions';
import { route } from 'ziggy-js';

export default function LanguageIndex() {

    const columns: ColumnDef<Contact>[] = [
        ...ContactColumns(),
        {
            id: 'actions',
            cell: ({ row }) => <ContactActions contact={row} />
        }
    ];

    return (
            <AppLayout breadcrumbs={contactBreadcrumbs}>
                <Head title="Instructors" />
                    <div className="flex flex-col gap-2 p-4 ">
                          <DataTable urlPath={route('contact.load')} columns={columns}>
                                <></>
                        </DataTable>
                    </div>
            </AppLayout>
    );
}
