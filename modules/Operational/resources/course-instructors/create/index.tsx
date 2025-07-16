'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { courseInstructorBreadcrumbs } from '../data';
import { User } from '@/types';
import { Course } from '../../courses/data';
import { PricingType } from '@/modules/Frontend/resources/data';
import CreateCourseInstructorForm from './form';

export default function CreateCourseInstructor({ courses, instructors, pricingTypes }: { courses: Course[], instructors: User[], pricingTypes: PricingType[] }) {

    return (
        <AppLayout breadcrumbs={courseInstructorBreadcrumbs}>
            <Head title="Courses" />
            <CreateCourseInstructorForm courses={courses} instructors={instructors} pricingTypes={pricingTypes} />
        </AppLayout>
    );
}
