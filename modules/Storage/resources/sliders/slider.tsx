'use client';

import { usePermissions } from '@/hooks/use-permissions';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/data-table/data-table';
import { route } from 'ziggy-js';
import { Slider } from './data';
import { SliderActions } from './actions';
import { CreateSlider } from './create';
import { useLocale } from '@/contexts/locale';
import { SliderColumns } from './columns';

export default function SliderTable() {

    const { hasPermission } = usePermissions();
    const { currentLocale } = useLocale();

    const columns: ColumnDef<Slider>[] = [
        ...SliderColumns(currentLocale),
        {
            id: 'actions',
            cell: ({ row }) => <SliderActions slider={row} />
        }
    ];
    return (

        <DataTable urlPath={route('slider.load')} columns={columns}>
            {hasPermission('slider.create') && (
                <CreateSlider />
            )}

        </DataTable>

    );
}
