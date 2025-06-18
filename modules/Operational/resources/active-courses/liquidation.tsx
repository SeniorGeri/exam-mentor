'use client';

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from '@/components/ui/alert-dialog';
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import { route } from "ziggy-js";
import { useTranslation } from 'react-i18next';
import CustomTextArea from '@/components/input/custom-textarea';
import { FormEventHandler } from 'react';
import { CreateLiquidationProps } from './data';

export function CreateLiquidation({ activeCourse, isOpen, closeModal }: CreateLiquidationProps) {

    const { t } = useTranslation('Operational');


    const { data, setData, post, processing, reset, errors, clearErrors } = useForm({
        description: ''
    });

    const createLiquidation: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('liquidation.store', activeCourse.id), {
            preserveScroll: true,
            onSuccess: () => liquidationCreated(),
            onFinish: () => closeModal(),
        });
    };

    const liquidationCreated = () => {
        toast(t('liquidation_created_succ'), { position: 'top-right', duration: 2000 });
        closeModal();
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('create_liquidation')}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t('create_liquidation_desc')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <form className="space-y-6" onSubmit={createLiquidation}>

                    <CustomTextArea
                        id="description"
                        placeholder={t('description')}
                        value={data.description}
                        setFormData={setData}
                    />
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={closeModal}>{t('close')}</AlertDialogCancel>
                        <AlertDialogAction asChild>
                            <button type="submit">{t('create_liquidation')}</button>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </form>

            </AlertDialogContent>
        </AlertDialog>
    );
}
