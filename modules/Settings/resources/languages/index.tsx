'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { languageBreadcrumbs } from './data';
import LanguageTable from './language';

export default function LanguageIndex() {



    return (
        <AppLayout breadcrumbs={languageBreadcrumbs}>
            <Head title="Countries" />
                <div className="flex flex-col gap-2 p-4 ">
                    <LanguageTable/>
                </div>
        </AppLayout>
    );
}
