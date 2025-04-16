'use strict';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteCurrencyProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteCurrency({currency, isOpen, closeModal}: DeleteCurrencyProps) {

    const { t } = useTranslation('Settings');

    const destroyCurrency = () => {
        router.delete(route('currency.destroy', currency.id), {
            preserveScroll: true,
            onSuccess: () => currencyDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const currencyDeleted = () => {
        toast(t('currency_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_currency')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_currency_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyCurrency}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
