'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Classification, courseBreadcrumbs } from './data';
import CourseTable from './course';
import { ClassificationsProvider } from './classifications-context';

export default function CourseIndex({classifications}: {classifications: Classification[]}) {



    return (
        <ClassificationsProvider classifications={classifications}>
            <AppLayout breadcrumbs={courseBreadcrumbs}>
                <Head title="Courses" />
                    <div className="flex flex-col gap-2 p-4 ">
                        <CourseTable/>      
                    </div>
            </AppLayout>
        </ClassificationsProvider>
    );
}
