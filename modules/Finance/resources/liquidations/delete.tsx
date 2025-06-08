'use client';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteLiquidationProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteLiquidation({liquidation, isOpen, closeModal}: DeleteLiquidationProps) {

    const { t } = useTranslation('Finance');
 
    const destroyLiquidation = () => {
        router.delete(route('liquidation.destroy', liquidation.id), {
            preserveScroll: true,
            onSuccess: () => liquidationDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const liquidationDeleted = () => {
        toast(t('liquidation_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_liquidation')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_liquidation_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyLiquidation}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
