'use client';

import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import CustomSwitch from '@/components/input/switch-input';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {toast} from 'sonner';
import {route} from "ziggy-js";


export function CreateCurrency() {


    const { t } = useTranslation('Settings');


    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        symbol: '',
        currency_code: '',
        is_primary: false,
        exchange: 1,
        description: '',
    });

    const storeCountCreateCurrency: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('currency.store'), {
            preserveScroll: true,
            onSuccess: () => currencyCreated(),
            // onFinish: () => reset(),
        });
    };

    const closeModal: () => void = () => {
        clearErrors();
        reset();
        setOpen(false);
    };

    const currencyCreated = () => {
        toast(t('currency_created_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    {t('create_currency')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{t('create_currency')}</DialogTitle>
                <DialogDescription>
                    {t('create_currency_desc')}
                </DialogDescription>
                <form className="space-y-6" onSubmit={storeCountCreateCurrency}>

                    <CustomInput
                        id="symbol"
                        value={data.symbol}
                        setFormData={setData}
                        placeholder={t('symbol')}
                        errorMessage={errors.symbol}
                    />
            

                    <CustomInput
                        id="currency_code"
                        value={data.currency_code}
                        setFormData={setData}
                        placeholder={t('currency_code')}
                        errorMessage={errors.currency_code}
                    />

                    <CustomSwitch
                        id="is_primary"
                        is_checked={data.is_primary}
                        setFormData={setData}
                        placeholder={t('is_primary')}
                    />

                    <CustomInput
                        id="exchange"
                        value={data.exchange}
                        setFormData={setData}
                        placeholder={t('exchange')}
                        errorMessage={errors.exchange}
                        type="number"
                        step={0.01}
                    />


                    <CustomTextarea
                        id="description"
                        value={data.description}
                        setFormData={setData}
                        placeholder={t('description')}
                        errorMessage={errors.description}
                    />

                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary" onClick={closeModal}>
                                {t('close')}
                            </Button>
                        </DialogClose>

                        <Button variant="default" disabled={processing} asChild>
                            <button type="submit">{t('add_currency')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
