'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { LiquidationColumns } from './columns';
import { Liquidation } from './data';
import { LiquidationActions } from './actions';
import { CreateLiquidation } from './create';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function LiquidationTable({canRequest}: {canRequest: boolean}) {

    const { hasPermission } = usePermissions();

    const { t } = useTranslation('Finance');

    const [isOpen, setIsOpen] = useState(false);

    const columns: ColumnDef<Liquidation>[] = [
        ...LiquidationColumns(),
        {
            id: 'actions',
            cell: ({ row }) => <LiquidationActions liquidation={row} />
        }
    ];
    return (

        <DataTable urlPath={route('liquidation.load')} columns={columns}>
            {hasPermission('liquidation.create') && canRequest && (
                <>
                    <Button onClick={() => {setIsOpen(true)}}>{t('create_liquidation')}</Button>
                    <CreateLiquidation isOpen={isOpen} closeModal={() => {setIsOpen(false)}} />
                </>
            )}

        </DataTable>

    );
}
