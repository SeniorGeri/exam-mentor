'use client';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import { useTranslation } from 'react-i18next';
import { DeleteContactProps } from './data';

export function DeleteContact({contact, isOpen, closeModal}: DeleteContactProps) {

    const { t } = useTranslation('Notification');

    const destroyContact = () => {
        router.delete(route('contact.destroy', contact.id), {
            preserveScroll: true,
            onSuccess: () => contactDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const contactDeleted = () => {
        toast(t('contact_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_contact')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_contact_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyContact}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
