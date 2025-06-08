'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { CourseInstructor, courseInstructorBreadcrumbs } from '../data';
import EditCourseInstructorForm from './form';

export default function EditCourseInstructor({ courseInstructor, courses, instructors, pricingTypes }: { courseInstructor: CourseInstructor, courses: Course[], instructors: User[], pricingTypes: PricingType[] }) {
    


    return (
        <AppLayout breadcrumbs={courseInstructorBreadcrumbs}>
            <Head title="Courses" />
            <div className="flex flex-col gap-2 p-4 ">
                <EditCourseInstructorForm courseInstructor={courseInstructor} courses={courses} instructors={instructors} pricingTypes={pricingTypes} />
            </div>
        </AppLayout>
    );
}
