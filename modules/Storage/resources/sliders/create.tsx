'use client';

import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import FileInput from '@/modules/Media/resources/js/file-input';
import {FormEventHandler, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import CustomSwitch from '@/components/input/custom-switch';


export function CreateSlider() {

    const { t } = useTranslation('Storage');


    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        title: '',
        subtitle: '',
        button_text: '',
        button_url: '',
        active: false,
        description: '',
        image: ''
    });

    const storeSliderCreateSlider: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('slider.store'), {
            preserveScroll: true,
            onSuccess: () => sliderCreated(),
            onFinish: () => reset(),
        });
    };

    const closeModal: () => void = () => {
        clearErrors();
        reset();
        setOpen(false);
    };

    const sliderCreated = () => {
        toast(t('slider_created_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    {t('create_slider')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{t('create_slider')}</DialogTitle>
                <DialogDescription>
                    {t('create_slider_desc')}
                </DialogDescription>
                <form className="space-y-6" onSubmit={storeSliderCreateSlider}>

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

                    <FileInput inputName='image' setFormData={setData} />

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
                            <button type="submit">{t('add_slider')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
