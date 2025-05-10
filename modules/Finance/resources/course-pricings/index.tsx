'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { coursePriceBreadcrumbs } from './data';
import CoursePriceTable from './course-price';

export default function CoursePriceIndex() {



    return (
        <AppLayout breadcrumbs={coursePriceBreadcrumbs}>
            <Head title="Course Prices" />
                <div className="flex flex-col gap-2 p-4 ">
                    <CoursePriceTable/>
                </div>
        </AppLayout>
    );
}
