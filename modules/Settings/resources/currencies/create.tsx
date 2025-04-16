'use client';

import InputError from '@/components/input-error';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {Textarea} from '@/components/ui/textarea';
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
                            placeholder={t('description')}
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
                            <button type="submit">{t('add_currency')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
