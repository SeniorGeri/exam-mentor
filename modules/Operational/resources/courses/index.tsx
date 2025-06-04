'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { courseBreadcrumbs } from './data';
import CourseTable from './course';
import { ClassificationsProvider } from './classifications-context';
import { School } from '@/modules/Operational/resources/schools/data';
import { Subject } from '@/modules/Operational/resources/subjects/data';
import { Grade } from '@/modules/Operational/resources/grades/data';
import { usePage } from '@inertiajs/react';
import { InertiaLangPageProps } from '@/types/helpers';

export default function CourseIndex({schools, subjects, grades}: {schools: School[], subjects: Subject[], grades: Grade[]}) {

    const { languages } = usePage<InertiaLangPageProps>().props;
    return (
        <ClassificationsProvider classifications={
            {
                'schools': schools.map((school) => {return {value: school.id, label: school.title[languages.main]}}),
                'subjects': subjects.map((subject) => {return {value: subject.id, label: subject.title[languages.main]}}),
                'grades': grades.map((grade) => {return {value: grade.id, label: grade.title[languages.main]}}),
            }
        }>
            <AppLayout breadcrumbs={courseBreadcrumbs}>
                <Head title="Courses" />
                    <div className="flex flex-col gap-2 p-4 ">
                        <CourseTable/>      
                    </div>
            </AppLayout>
        </ClassificationsProvider>
    );
}
