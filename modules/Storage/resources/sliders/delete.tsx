'use strict';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteSliderProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteSlider({slider, isOpen, closeModal}: DeleteSliderProps) {

    const { t } = useTranslation('Storage');

    const destroySlider = () => {
        router.delete(route('slider.destroy', slider.id), {
            preserveScroll: true,
            onSuccess: () => sliderDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const sliderDeleted = () => {
        toast(t('slider_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_slider')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_slider_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroySlider}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
