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
import FileInput from 'modules/Media/resources/js/file-input';

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

                    <div className="grid gap-2">
                        <Label htmlFor="language">{t('language')}</Label>

                        <Input
                            id="language"
                            type="text"
                            name="language"
                            value={data.language}
                            onChange={(e) => setData('language', e.target.value)}
                            placeholder={t('language')}
                            autoComplete="language"
                        />

                        <InputError message={errors.language}/>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="language_code">{t('language_code')}</Label>

                        <Input
                            id="language_code"
                            type="text"
                            name="language_code"
                            value={data.language_code}
                            onChange={(e) => setData('language_code', e.target.value)}
                            placeholder={t('language_code')}
                            autoComplete="language_code"
                        />

                        <InputError message={errors.language_code}/>
                    </div>

                    <FileInput defaultValue={[data.flag]} inputName='flag' setFormData={setData} />
                    
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
                            <button type="submit">{t('edit_language')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
