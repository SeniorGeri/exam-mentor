'use client';

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { liquidationBreadcrumbs } from './data';
import LiquidationTable from './liquidation';

export default function LiquidationIndex({canRequest}: {canRequest: boolean}) {



    return (
        <AppLayout breadcrumbs={liquidationBreadcrumbs}>
            <Head title="Liquidations" />
                <div className="flex flex-col gap-2 p-4 ">
                    <LiquidationTable canRequest={canRequest}/>
                </div>
        </AppLayout>
    );
}
