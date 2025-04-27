'use strict';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import { useTranslation } from 'react-i18next';
import { DeleteInstructorProps } from './data';

export function DeleteInstructor({instructor, isOpen, closeModal}: DeleteInstructorProps) {

    const { t } = useTranslation('Hrm');

    const destroyInstructor = () => {
        router.delete(route('instructor.destroy', instructor.id), {
            preserveScroll: true,
            onSuccess: () => instructorDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const instructorDeleted = () => {
        toast(t('instructor_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_instructor')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_instructor_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyInstructor}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
