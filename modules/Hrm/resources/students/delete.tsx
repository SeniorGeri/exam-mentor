'use strict';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteStudentProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteStudent({student, isOpen, closeModal}: DeleteStudentProps) {

    const { t } = useTranslation('Hrm');

    const destroyStudent = () => {
        router.delete(route('student.destroy', student.id), {
            preserveScroll: true,
            onSuccess: () => studentDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const studentDeleted = () => {
        toast(t('student_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_student')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_student_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyStudent}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
