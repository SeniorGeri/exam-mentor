import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditCountryProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import FileInput from '@/modules/Media/resources/js/file-input';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';

export function EditCountry({country, isOpen, closeModal}: EditCountryProps) {

    const { t } = useTranslation('Settings');

    const { currentLocale } = useLocale();

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: country?.id,
        country: country?.country ? country?.country[currentLocale] : '',
        description: country?.description,
        flag: country?.flag,
        locale: currentLocale ?? null
    });

    useEffect(() =>setData('country', country?.country[data.locale] || '') , [data.locale]);

    const updateCountry: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('country.update', country.id), {
            preserveScroll: true,
            onSuccess: () => updatedCountry(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedCountry = () => {
        toast(t('country_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_country')}</DialogTitle>
                <DialogDescription>
                    {t('edit_country_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateCountry}>
                    <Languages currentLocale={data.locale} setData={setData}/>

                     <CustomInput
                        id="country"
                        value={data.country}
                        setFormData={setData}
                        placeholder={t('country')}
                        errorMessage={errors.country}
                    />

                    <FileInput defaultValue={[data.flag]} inputName='flag' setFormData={setData} />


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
                            <button type="submit">{t('edit_country')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
