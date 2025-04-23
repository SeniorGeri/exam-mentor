'use client';

import InputError from '@/components/input-error';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {Textarea} from '@/components/ui/textarea';
import {useForm} from '@inertiajs/react';
import FileInput from 'modules/Media/resources/js/file-input';
import {FormEventHandler, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {toast} from 'sonner';
import {route} from "ziggy-js";


export function CreatePayment() {

    const { t } = useTranslation('Settings');


    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        method: '',
        is_primary: false,
        active: false,
        description: '',
        image: ''
    });

    const storePayment: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('payment.store'), {
            preserveScroll: true,
            onSuccess: () => paymentCreated(),
            // onFinish: () => reset(),
        });
    };

    const closeModal: () => void = () => {
        clearErrors();
        reset();
        setOpen(false);
    };

    const paymentCreated = () => {
        toast(t('payment_created_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    {t('create_payment')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{t('create_payment')}</DialogTitle>
                <DialogDescription>
                    {t('create_payment_desc')}
                </DialogDescription>
                <form className="space-y-6" onSubmit={storePayment}>
                    <div className="grid gap-2">
                        <Label htmlFor="method">{t('method')}</Label>

                        <Input
                            id="method"
                            type="text"
                            name="method"
                            value={data.method}
                            onChange={(e) => setData('method', e.target.value)}
                            placeholder={t('method')}
                            autoComplete="method"
                        />

                        <InputError message={errors.method}/>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <div className="flex items-center space-x-2">
                                <Switch id="is_primary" checked={data.is_primary}
                                onCheckedChange={(checked: boolean) => setData('is_primary', checked)}/>

                                <Label htmlFor="is_primary">{t('is_primary')}</Label>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex items-center space-x-2">
                                <Switch id="active" checked={data.active}
                                onCheckedChange={(checked: boolean) => setData('active', checked)}/>

                                <Label htmlFor="active">{t('active')}</Label>
                            </div>
                        </div>
                    </div>

                    <FileInput inputName='image' setFormData={setData} />
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
                            <button type="submit">{t('add_payment')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
