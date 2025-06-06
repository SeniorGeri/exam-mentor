import InputError from '@/components/input-error';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditLanguageProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import FileInput from '@/modules/Media/resources/js/file-input';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';

export function EditLanguage({language, isOpen, closeModal}: EditLanguageProps) {

    const { t } = useTranslation('Settings');

    const { currentLocale } = useLocale();

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: language?.id,
        language: language?.language ? language?.language[currentLocale] : '',
        language_code: language?.language_code,
        description: language?.description,
        flag: language?.flag,
        locale: currentLocale ?? null
    });

    useEffect(() =>setData('language', language?.language[data.locale] || '') , [data.locale]);

    const updateLanguage: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('language.update', language.id), {
            preserveScroll: true,
            onSuccess: () => updatedLanguage(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedLanguage = () => {
        toast(t('language_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_language')}</DialogTitle>
                <DialogDescription>
                    {t('edit_language_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateLanguage}>
                    <Languages currentLocale={data.locale} setData={setData}/>

                    <CustomInput
                        id="language"
                        value={data.language}
                        setFormData={setData}
                        placeholder={t('language')}
                        errorMessage={errors.language}
                    />

                    <FileInput inputName='flag' setFormData={setData} defaultValue={[data.flag]} />

                    <CustomInput
                        id="language_code"
                        value={data.language_code}
                        setFormData={setData}
                        placeholder={t('language_code')}
                        errorMessage={errors.language_code}
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
                            <button type="submit">{t('edit_language')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
