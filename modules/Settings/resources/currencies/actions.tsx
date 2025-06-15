'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Currency, CurrencyActionsProps} from "./data.js";
import {EditCurrency} from "./edit.js";
import {DeleteCurrency} from "./delete.js";
import { useTranslation } from 'react-i18next';
import { usePermissions } from '@/hooks/use-permissions.js';

export function CurrencyActions({currency}: CurrencyActionsProps) {

    const { t } = useTranslation('Settings');

    const { hasPermission, hasAnyPermission} = usePermissions();

    const [selectedCurrency, setSelectedCurrency] = useState<Currency| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((currency: Currency, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedCurrency(currency);
            setSelectedAction(action);
        }, 10)
    }, []);

    if (!hasAnyPermission(['currency.update', 'currency.delete'])) {
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
                    {hasPermission('currency.update') && (
                        <>
                            <DropdownMenuItem onClick={() => handleAction(currency.original, 'edit')}>{t('edit_currency')}</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                        </>
                    )}
                    {hasPermission('currency.delete') && (
                        <DropdownMenuItem className="text-red-500" onClick={() => handleAction(currency.original, 'delete')}>
                            {t('delete_currency')}
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedCurrency && selectedAction === 'edit' && (
                    <EditCurrency currency={selectedCurrency} isOpen={true} closeModal={() => setSelectedCurrency(undefined)}/>
                )}
                {selectedCurrency && selectedAction === 'delete' && (
                    <DeleteCurrency currency={selectedCurrency} isOpen={true} closeModal={() => setSelectedCurrency(undefined)}/>
                )}
            </div>
        </>
    );
}
