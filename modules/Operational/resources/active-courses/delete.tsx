'use client';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteActiveCourseProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteActiveCourse({activeCourse, isOpen, closeModal}: DeleteActiveCourseProps) {

    const { t } = useTranslation('Operational');

    const destroyCourse = () => {
        router.delete(route('active-course.destroy', activeCourse.id), {
            preserveScroll: true,
            onSuccess: () => activeCourseDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const activeCourseDeleted = () => {
        toast(t('active_course_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_active_course')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_active_course_desc')}
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
