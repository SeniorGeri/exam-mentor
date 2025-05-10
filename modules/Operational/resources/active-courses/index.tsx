'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { activeCourseBreadcrumbs } from './data';
import CourseTable from './course';
import { StatusProvider } from './status-context';
import { ActiveCourseStatus } from './data';

export default function CourseIndex({activeCourseStatuses}: {activeCourseStatuses: ActiveCourseStatus[]}) {



    return (
        <StatusProvider activeCourseStatuses={activeCourseStatuses}>
            <AppLayout breadcrumbs={activeCourseBreadcrumbs}>
                <Head title="Courses" />
                    <div className="flex flex-col gap-2 p-4 ">
                        <CourseTable/>      
                    </div>
            </AppLayout>
        </StatusProvider>
    );
}
