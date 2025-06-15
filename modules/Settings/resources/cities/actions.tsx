'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {City, CityActionsProps} from "./data.js";
import {EditCity} from "./edit.js";
import {DeleteCity} from "./delete.js";
import { useTranslation } from 'react-i18next';
import { usePermissions } from '@/hooks/use-permissions';

export function CityActions({city}: CityActionsProps) {

    const { t } = useTranslation('Settings');

    const { hasPermission, hasAnyPermission} = usePermissions();

    const [selectedCity, setSelectedCity] = useState<City| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((city: City, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedCity(city);
            setSelectedAction(action);
        }, 10)
    }, []);

    if (!hasAnyPermission(['city.update', 'city.delete'])) {
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
                    {hasPermission('city.update') && (
                        <>
                        <DropdownMenuItem onClick={() => handleAction(city.original, 'edit')}>{t('edit_city')}</DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        </>
                    )}

                    {hasPermission('city.delete') && (
                        <DropdownMenuItem className="text-red-500" onClick={() => handleAction(city.original, 'delete')}>
                            {t('delete_city')}
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedCity && selectedAction === 'edit' && (
                    <EditCity city={selectedCity} isOpen={true} closeModal={() => setSelectedCity(undefined)}/>
                )}
                {selectedCity && selectedAction === 'delete' && (
                    <DeleteCity city={selectedCity} isOpen={true} closeModal={() => setSelectedCity(undefined)}/>
                )}
            </div>
        </>
    );
}
