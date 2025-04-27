'use client';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteSchoolProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteSchool({school, isOpen, closeModal}: DeleteSchoolProps) {

    const { t } = useTranslation('Operational');

    const destroySchool = () => {
        router.delete(route('school.destroy', school.id), {
            preserveScroll: true,
            onSuccess: () => schoolDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const schoolDeleted = () => {
        toast(t('school_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_school')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_school_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroySchool}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
