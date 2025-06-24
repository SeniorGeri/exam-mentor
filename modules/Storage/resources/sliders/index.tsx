'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { sliderBreadcrumbs } from './data';
import SliderTable from './slider';

export default function SliderIndex() {



    return (
        <AppLayout breadcrumbs={sliderBreadcrumbs}>
            <Head title="Sliders" />
                <div className="flex flex-col gap-2 p-4 ">
                    <SliderTable/>
                </div>
        </AppLayout>
    );
}
