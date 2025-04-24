'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { studentBreadcrumbs } from './data';
import StudentTable from './student';
import {StudentDataProvider} from './student-data-context';
import { StudentData } from './data';

export default function LanguageIndex({countries, cities, genders }: StudentData) {



    return (
        <StudentDataProvider studentData={{countries, cities, genders}}>
            <AppLayout breadcrumbs={studentBreadcrumbs}>
                <Head title="Students" />
                    <div className="flex flex-col gap-2 p-4 ">
                        <StudentTable/>
                    </div>
            </AppLayout>
        </StudentDataProvider>
    );
}
