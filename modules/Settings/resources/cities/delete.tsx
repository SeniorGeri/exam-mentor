'use strict';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteCityProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteCity({city, isOpen, closeModal}: DeleteCityProps) {

    const { t } = useTranslation('Settings');

    const destroyCity = () => {
        router.delete(route('city.destroy', city.id), {
            preserveScroll: true,
            onSuccess: () => cityDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const cityDeleted = () => {
        toast(t('city_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_city')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_city_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyCity}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
