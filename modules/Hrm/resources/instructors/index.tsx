'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { instructorBreadcrumbs } from './data';
import { InstructorData } from './data';
import { InstructorDataProvider } from './instructor-data-context';
import InstructorTable from './instructor';

export default function LanguageIndex({countries, cities, genders }: InstructorData) {



    return (
        <InstructorDataProvider instructorData={{countries, cities, genders}}>
            <AppLayout breadcrumbs={instructorBreadcrumbs}>
                <Head title="Instructors" />
                    <div className="flex flex-col gap-2 p-4 ">
                        <InstructorTable/>
                    </div>
            </AppLayout>
        </InstructorDataProvider>
    );
}
