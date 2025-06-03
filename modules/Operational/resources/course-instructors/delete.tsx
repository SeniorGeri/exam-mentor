'use client';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteCourseInstructorProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteCourseInstructor({courseInstructor, isOpen, closeModal}: DeleteCourseInstructorProps) {

    const { t } = useTranslation('Operational');

    const destroyCourseInstructor = () => {
        router.delete(route('course-instructor.destroy', courseInstructor.id), {
            preserveScroll: true,
            onSuccess: () => courseInstructorDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const courseInstructorDeleted = () => {
        toast(t('course_instructor_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_course_instructor')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_course_instructor_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyCourseInstructor}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
