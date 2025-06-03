'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { courseInstructorBreadcrumbs } from './data';
import CourseInstructorTable from './course-instructor';

export default function CourseInstructorIndex() {



    return (
        <AppLayout breadcrumbs={courseInstructorBreadcrumbs}>
            <Head title="Course Instructors" />
                <div className="flex flex-col gap-2 p-4 ">
                    <CourseInstructorTable/>
                </div>
        </AppLayout>
    );
}
