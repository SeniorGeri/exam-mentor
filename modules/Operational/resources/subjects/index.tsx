'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { subjectBreadcrumbs } from './data';
import SubjectTable from './subject';

export default function SubjectIndex() {



    return (
        <AppLayout breadcrumbs={subjectBreadcrumbs}>
            <Head title="Subjects" />
                <div className="flex flex-col gap-2 p-4 ">
                    <SubjectTable/>
                </div>
        </AppLayout>
    );
}
