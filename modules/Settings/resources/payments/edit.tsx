import InputError from '@/components/input-error';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditPaymentProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import { Switch } from '@/components/ui/switch';
import FileInput from 'modules/Media/resources/js/file-input';

export function EditPayment({payment, isOpen, closeModal}: EditPaymentProps) {

    const { t } = useTranslation('Settings');

    const { currentLocale } = useLocale();

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: payment?.id,
        method: payment?.method ? payment?.method[currentLocale] : '',
        description: payment?.description,
        is_primary: payment?.is_primary,
        active: payment?.active,
        image: payment?.image,
        locale: currentLocale ?? null
    });

    useEffect(() =>setData('method', payment?.method[data.locale] || '') , [data.locale]);

    const updatePayment: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('payment.update', payment.id), {
            preserveScroll: true,
            onSuccess: () => updatedPayment(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedPayment = () => {
        toast(t('payment_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_payment')}</DialogTitle>
                <DialogDescription>
                    {t('edit_payment_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updatePayment}>
                    <Languages currentLocale={data.locale} setData={setData}/>

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

                    <FileInput defaultValue={[data.image]} inputName='image' setFormData={setData} />

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
                            <button type="submit">{t('edit_payment')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
