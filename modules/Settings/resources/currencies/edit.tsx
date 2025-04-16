import InputError from '@/components/input-error';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditCurrencyProps} from "./data";
import {route} from "ziggy-js";
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import { Switch } from '@/components/ui/switch';


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
                    <div className="grid gap-2">
                        <Label htmlFor="symbol">{t('symbol')}</Label>

                        <Input
                            id="symbol"
                            type="text"
                            name="symbol"
                            value={data.symbol}
                            onChange={(e) => setData('symbol', e.target.value)}
                            placeholder={t('symbol')}
                            autoComplete="symbol"
                        />

                        <InputError message={errors.symbol}/>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="currency_code">{t('currency_code')}</Label>

                        <Input
                            id="currency_code"
                            type="string"
                            name="currency_code"
                            value={data.currency_code}
                            onChange={(e) => setData('currency_code', e.target.value)}
                            placeholder={t('currency_code')}
                            autoComplete="currency_code"
                        />

                        <InputError message={errors.symbol}/>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="is_primary" checked={data.is_primary}
                        onCheckedChange={(checked: boolean) => setData('is_primary', checked)}/>

                        <Label htmlFor="is_primary">{t('is_primary')}</Label>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="exchange">{t('exchange')}</Label>

                        <Input
                            id="exchange"
                            type="number"
                            step={0.01}
                            name="exchange"
                            value={data.exchange}
                            onChange={(e) => setData('exchange', parseFloat(e.target.value))}
                            placeholder={t('exchange')}
                            autoComplete="exchange"
                        />

                        <InputError message={errors.symbol}/>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">{t('description')}</Label>

                        <Textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Shenime"
                            autoComplete="description"
                        />

                        <InputError message={errors.description}/>
                    </div>

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
