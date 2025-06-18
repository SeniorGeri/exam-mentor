'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Liquidation, LiquidationActionsProps} from "./data.js";
import {EditLiquidation} from "./edit.js";
import {DeleteLiquidation} from "./delete.js";
import { useTranslation } from 'react-i18next';
import { usePermissions } from '@/hooks/use-permissions.js';

export function LiquidationActions({liquidation}: LiquidationActionsProps) {

    const { t } = useTranslation('Finance');

    const { hasPermission, hasAnyPermission} = usePermissions();

    const [selectedLiquidation, setSelectedLiquidation] = useState<Liquidation| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((liquidation: Liquidation, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedLiquidation(liquidation);
            setSelectedAction(action);
        }, 10)
    }, []);

    if (!hasAnyPermission(['liquidation.update', 'liquidation.delete'])) {
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
                    {hasPermission('liquidation.update') && (
                        <>
                            <DropdownMenuItem onClick={() => handleAction(liquidation.original, 'edit')}>{t('update_liquidation')}</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                        </>
                    )}
                    {hasPermission('liquidation.delete') && (
                        <DropdownMenuItem className="text-red-500" onClick={() => handleAction(liquidation.original, 'delete')}>
                            {t('delete_expense')}
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedLiquidation && selectedAction === 'edit' && (
                    <EditLiquidation liquidation={selectedLiquidation} isOpen={true} closeModal={() => setSelectedLiquidation(undefined)}/>
                )}
                {selectedLiquidation && selectedAction === 'delete' && (
                    <DeleteLiquidation liquidation={selectedLiquidation} isOpen={true} closeModal={() => setSelectedLiquidation(undefined)}/>
                )}
            </div>
        </>
    );
}
