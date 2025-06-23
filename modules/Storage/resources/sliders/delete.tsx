'use strict';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteCountryProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteCountry({country, isOpen, closeModal}: DeleteCountryProps) {

    const { t } = useTranslation('Settings');

    const destroyCountry = () => {
        router.delete(route('country.destroy', country.id), {
            preserveScroll: true,
            onSuccess: () => countryDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const countryDeleted = () => {
        toast(t('country_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_country')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_country_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyCountry}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
