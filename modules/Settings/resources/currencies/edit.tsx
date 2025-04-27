import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler} from 'react';
import {toast} from 'sonner';
import {EditCurrencyProps} from "./data";
import {route} from "ziggy-js";
import { useTranslation } from 'react-i18next';
import CustomTextarea from '@/components/input/custom-textarea';
import CustomInput from '@/components/input/custom-input';
import CustomSwitch from '@/components/input/custom-switch';


export function EditCurrency({currency, isOpen, closeModal}: EditCurrencyProps) {

    const { t } = useTranslation('Settings');

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: currency?.id,
        symbol: currency?.symbol,
        currency_code: currency?.currency_code,
        is_primary: currency?.is_primary,
        exchange: currency?.exchange,
        description: currency?.description,

    });

    const updateCurrency: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('currency.update', currency.id), {
            preserveScroll: true,
            onSuccess: () => updatedCurrency(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedCurrency = () => {
        toast(t('currency_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_currency')}</DialogTitle>
                <DialogDescription>
                    {t('edit_currency_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateCurrency}>
                  
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
                            <button type="submit">{t('edit_currency')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
