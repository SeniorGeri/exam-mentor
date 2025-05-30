'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { notificationBreadcrumbs } from './data';
import { DataTable } from '@/components/data-table/data-table';
import { ColumnDef } from '@tanstack/react-table';
import { Notification } from './data';
import { NotificationColumns } from './columns';
import { NotificationActions } from './actions';
import { route } from 'ziggy-js';

export default function LanguageIndex() {

    const columns: ColumnDef<Notification>[] = [
        ...NotificationColumns(),
        {
            id: 'actions',
            cell: ({ row }) => <NotificationActions notification={row} />
        }
    ];

    return (
            <AppLayout breadcrumbs={notificationBreadcrumbs}>
                <Head title="Notifications" />
                    <div className="flex flex-col gap-2 p-4 ">
                          <DataTable urlPath={route('notification.load')} columns={columns}>
                                <></>
                        </DataTable>
                    </div>
            </AppLayout>
    );
}
