'use client';

import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {MoreHorizontal} from 'lucide-react';
import {useCallback, useState} from 'react';
import {Payment, PaymentActionsProps} from "./data.js";
import {EditPayment} from "./edit.js";
import {DeletePayment} from "./delete.js";
import { useTranslation } from 'react-i18next';
import { usePermissions } from '@/hooks/use-permissions.js';

export function PaymentActions({payment}: PaymentActionsProps) {

    const { t } = useTranslation('Settings');

    const { hasPermission, hasAnyPermission} = usePermissions();

    const [selectedPayment, setSelectedPayment] = useState<Payment| undefined>(undefined);

    const [selectedAction, setSelectedAction] = useState<'edit' | 'delete' | null>(null);

    const handleAction = useCallback((payment: Payment, action: 'edit' | 'delete') => {
        setTimeout(() => {
            setSelectedPayment(payment);
            setSelectedAction(action);
        }, 10)
    }, []);

    if (!hasAnyPermission(['payment.update', 'payment.delete'])) {
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
                    {hasPermission('payment.update') && (
                        <>
                            <DropdownMenuItem onClick={() => handleAction(payment.original, 'edit')}>{t('edit_payment')}</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                        </>
                    )}
                    {hasPermission('payment.delete') && (
                        <DropdownMenuItem className="text-red-500" onClick={() => handleAction(payment.original, 'delete')}>
                            {t('delete_payment')}
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center justify-end">
                {selectedPayment && selectedAction === 'edit' && (
                    <EditPayment payment={selectedPayment} isOpen={true} closeModal={() => setSelectedPayment(undefined)}/>
                )}
                {selectedPayment && selectedAction === 'delete' && (
                    <DeletePayment payment={selectedPayment} isOpen={true} closeModal={() => setSelectedPayment(undefined)}/>
                )}
            </div>
        </>
    );
}
