'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { courseBreadcrumbs } from './data';
import CourseTable from './course';


export default function CourseIndex() {
    return (
   
            <AppLayout breadcrumbs={courseBreadcrumbs}>
                <Head title="Courses" />
                    <div className="flex flex-col gap-2 p-4 ">
                        <CourseTable/>      
                    </div>
            </AppLayout>
    );
}
