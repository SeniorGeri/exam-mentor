import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditSliderProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import FileInput from '@/modules/Media/resources/js/file-input';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import CustomSwitch from '@/components/input/custom-switch';

export function EditSlider({slider, isOpen, closeModal}: EditSliderProps) {

    const { t } = useTranslation('Storage');

    const { currentLocale } = useLocale();

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: slider?.id,
        title: slider?.title ? slider?.title[currentLocale] : '',
        subtitle: slider?.subtitle ? slider?.subtitle[currentLocale] : '',
        button_text: slider?.button_text ? slider?.button_text[currentLocale] : '',
        button_url: slider?.button_url,
        active: slider?.active,
        description: slider?.description,
        image: slider?.image,
        locale: currentLocale ?? null
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() =>setData('title', slider?.title[data.locale] || '') , [data.locale]);

    const updateSlider: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('slider.update', slider.id), {
            preserveScroll: true,
            onSuccess: () => updatedSlider(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedSlider = () => {
        toast(t('slider_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_slider')}</DialogTitle>
                <DialogDescription>
                    {t('edit_slider_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateSlider}>
                    <Languages currentLocale={data.locale} setData={setData}/>

                     <CustomInput
                        id="title"
                        value={data.title}
                        setFormData={setData}
                        placeholder={t('title')}
                        errorMessage={errors.title}
                    />


                    <CustomInput
                        id="subtitle"
                        value={data.subtitle}
                        setFormData={setData}
                        placeholder={t('subtitle')}
                        errorMessage={errors.subtitle}
                    />

                    <CustomInput
                        id="button_text"
                        value={data.button_text}
                        setFormData={setData}
                        placeholder={t('button_text')}
                        errorMessage={errors.button_text}
                    />

                    <CustomInput
                        id="button_url"
                        value={data.button_url}
                        setFormData={setData}
                        placeholder={t('button_url')}
                        errorMessage={errors.button_url}
                    />

                    <FileInput defaultValue={[data.image]} inputName='image' setFormData={setData} />

                    <CustomSwitch
                        id="active"
                        is_checked={data.active}
                        setFormData={setData}
                        placeholder={t('active')}
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
                            <button type="submit">{t('edit_slider')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
