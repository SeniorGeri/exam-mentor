'use client';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteSubjectProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteSubject({subject, isOpen, closeModal}: DeleteSubjectProps) {

    const { t } = useTranslation('Operational');

    const destroySubject = () => {
        router.delete(route('subject.destroy', subject.id), {
            preserveScroll: true,
            onSuccess: () => subjectDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const subjectDeleted = () => {
        toast(t('subject_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_subject')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_subject_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroySubject}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
