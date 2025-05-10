'use client';

import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,} from '@/components/ui/alert-dialog';
import {router} from '@inertiajs/react';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import {DeleteExpenseProps} from "./data";
import { useTranslation } from 'react-i18next';

export function DeleteExpense({expense, isOpen, closeModal}: DeleteExpenseProps) {

    const { t } = useTranslation('Finance');

    const destroyExpense = () => {
        router.delete(route('expense.destroy', expense.id), {
            preserveScroll: true,
            onSuccess: () => expenseDeleted(),
            onFinish: () => closeModal(),
        });
    };

    const expenseDeleted = () => {
        toast(t('expense_delete_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('delete_expense')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('delete_expense_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                    <AlertDialogAction onClick={destroyExpense}>{t('delete')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
