'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Slider, SliderActionsProps} from "./data.js";
import {EditSlider} from "./edit.js";
import {DeleteSlider} from "./delete.js";
import { useTranslation } from 'react-i18next';
import { usePermissions } from '@/hooks/use-permissions.js';

export function SliderActions({slider}: SliderActionsProps) {

    const { t } = useTranslation('Storage');

    const { hasPermission, hasAnyPermission} = usePermissions();

    const [selectedSlider, setSelectedSlider] = useState<Slider| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((slider: Slider, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedSlider(slider);
            setSelectedAction(action);
        }, 10)
    }, []);

    if (!hasAnyPermission(['slider.update', 'slider.delete'])) {
        return null;
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="data-[state=open]:bg-muted flex h-6 w-8 p-0">
                        <MoreHorizontal/>
                        <span className="sr-only">{t('open_menu')}</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[160px]">
                    {hasPermission('slider.update') && (
                        <>
                            <DropdownMenuItem onClick={() => handleAction(slider.original, 'edit')}>{t('edit_slider')}</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                        </>
                    )}
                    {hasPermission('slider.delete') && (
                        <DropdownMenuItem className="text-red-500" onClick={() => handleAction(slider.original, 'delete')}>
                            {t('delete_slider')}
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedSlider && selectedAction === 'edit' && (
                    <EditSlider slider={selectedSlider} isOpen={true} closeModal={() => setSelectedSlider(undefined)}/>
                )}
                {selectedSlider && selectedAction === 'delete' && (
                    <DeleteSlider slider={selectedSlider} isOpen={true} closeModal={() => setSelectedSlider(undefined)}/>
                )}
            </div>
        </>
    );
}
