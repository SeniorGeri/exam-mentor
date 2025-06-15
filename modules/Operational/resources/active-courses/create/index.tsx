'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { ActiveCourseStatus } from '../data';
import { activeCourseBreadcrumbs } from '../data';
import CreateActiveCourseForm from './create';
import { CourseInstructor } from '../../course-instructors/data';
import { User } from '@/types';

export default function EditActiveCourse({ statuses, students, courseInstructors }: { statuses: ActiveCourseStatus[], students: User[], courseInstructors: CourseInstructor[] }) {
    


    return (
        <AppLayout breadcrumbs={activeCourseBreadcrumbs}>
            <Head title="Courses" />
            <div className="flex flex-col gap-2 p-4 ">
                <CreateActiveCourseForm statuses={statuses} students={students} courseInstructors={courseInstructors} />
            </div>
        </AppLayout>
    );
}
