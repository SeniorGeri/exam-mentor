'use client';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteGradeProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteGrade({grade, isOpen, closeModal}: DeleteGradeProps) {

    const { t } = useTranslation('Operational');

    const destroyGrade = () => {
        router.delete(route('grade.destroy', grade.id), {
            preserveScroll: true,
            onSuccess: () => gradeDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const gradeDeleted = () => {
        toast(t('grade_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_grade')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_grade_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyGrade}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
