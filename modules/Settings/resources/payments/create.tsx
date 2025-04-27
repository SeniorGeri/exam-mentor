'use client';

import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import CustomSwitch from '@/components/input/custom-switch';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
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

                    <CustomInput
                        id="method"
                        value={data.method}
                        setFormData={setData}
                        placeholder={t('method')}
                        errorMessage={errors.method}
                    />

                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                                <CustomSwitch
                                    id="is_primary"
                                    is_checked={data.is_primary}
                                    setFormData={setData}
                                    placeholder={t('is_primary')}
                                />
                        </div>
                        <div className="col-span-1">
                            <div className="flex items-center space-x-2">
                                    <CustomSwitch
                                        id="active"
                                        is_checked={data.active}
                                        setFormData={setData}
                                        placeholder={t('active')}
                                    />
                            </div>
                        </div>
                    </div>

                    <FileInput inputName='image' setFormData={setData} />

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
                            <button type="submit">{t('add_payment')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
