'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { gradeBreadcrumbs } from './data';
import GradeTable from './grade';

export default function GradeIndex() {



    return (
        <AppLayout breadcrumbs={gradeBreadcrumbs}>
            <Head title="Grades" />
                <div className="flex flex-col gap-2 p-4 ">
                    <GradeTable/>
                </div>
        </AppLayout>
    );
}
