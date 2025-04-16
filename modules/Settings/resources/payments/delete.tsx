'use strict';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeletePaymentProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeletePayment({payment, isOpen, closeModal}: DeletePaymentProps) {

    const { t } = useTranslation('Settings');

    const destroyPayment = () => {
        router.delete(route('payment.destroy', payment.id), {
            preserveScroll: true,
            onSuccess: () => paymentDeleted(),
            onFinish: () => closeModal(),
        });
    }

    const paymentDeleted = () => {
        toast(t('payment_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_payment')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_payment_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyPayment}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
