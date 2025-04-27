'use client';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteCourseProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteCourse({course, isOpen, closeModal}: DeleteCourseProps) {

    const { t } = useTranslation('Operational');

    const destroyCourse = () => {
        router.delete(route('course.destroy', course.id), {
            preserveScroll: true,
            onSuccess: () => courseDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const courseDeleted = () => {
        toast(t('course_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_course')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_course_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyCourse}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
