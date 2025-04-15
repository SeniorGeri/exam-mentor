'use strict';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteLanguageProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteLanguage({language, isOpen, closeModal}: DeleteLanguageProps) {

    const { t } = useTranslation('Settings');

    const destroyLanguage = () => {
        router.delete(route('language.destroy', language.id), {
            preserveScroll: true,
            onSuccess: () => languageDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const languageDeleted = () => {
        toast(t('language_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_language')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_language_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyLanguage}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
