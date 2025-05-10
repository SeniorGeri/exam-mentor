'use client';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteCoursePriceProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteCoursePrice({coursePrice, isOpen, closeModal}: DeleteCoursePriceProps) {

    const { t } = useTranslation('Finance');

    const destroyCoursePrice = () => {
        router.delete(route('course-pricing.destroy', coursePrice.id), {
            preserveScroll: true,
            onSuccess: () => coursePriceDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const coursePriceDeleted = () => {
        toast(t('course_price_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_course_price')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_course_price_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyCoursePrice}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
