'use client';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import { useTranslation } from 'react-i18next';
import { DeleteNotificationProps } from './data';

export function DeleteNotification({notification, isOpen, closeModal}: DeleteNotificationProps) {

    const { t } = useTranslation('Notification');

    const destroyNotification = () => {
        router.delete(route('notification.delete', notification.id), {
            preserveScroll: true,
            onSuccess: () => notificationDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const notificationDeleted = () => {
        toast(t('notification_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_notification')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_notification_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyNotification}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
