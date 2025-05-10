import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditSchoolProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import FileInput from 'modules/Media/resources/js/file-input';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import CustomSelect from '@/components/input/custom-select';
import { Country } from '@/modules/Settings/resources/countries/data';
import { SelectItem } from '@/components/ui/select';
import { useCountries } from 'modules/Settings/resources/cities/countries-context';

export function EditSchool({school, isOpen, closeModal}: EditSchoolProps) {

    const countries = useCountries(); // Access directly from context
    
    const { t } = useTranslation('Operational');

    const { currentLocale } = useLocale();

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: school?.id,
        title: school?.title ? school?.title[currentLocale] : '',
        description: school?.description,
        image: school?.image,
        country_id: school?.country_id,
        locale: currentLocale ?? null
    });

    useEffect(() =>setData('title', school?.title[data.locale] || '') , [data.locale]);

    const updateSchool: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('school.update', school.id), {
            preserveScroll: true,
            onSuccess: () => updatedSchool(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedSchool = () => {
        toast(t('school_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_school')}</DialogTitle>
                <DialogDescription>
                    {t('edit_school_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateSchool}>
                    <Languages currentLocale={data.locale} setData={setData}/>

                     <CustomInput
                        id="title"
                        value={data.title}
                        setFormData={setData}
                        placeholder={t('title')}
                        errorMessage={errors.title}
                    />

                    <CustomSelect
                        id="country_id"
                        value={data.country_id}
                        text = {countries.find((count: Country) => count.id.toString() === data.country_id.toString())?.country['en'] || t('select_country')}
                        setFormData={setData}
                        placeholder={t('country')}
                        errorMessage={errors.country_id}
                    >   
                        <>
                            {countries.map((country : Country) => (
                                <SelectItem key={country.id} value={country.id.toString()}>{country.country['en']}</SelectItem>
                            ))}
                        </>
                    </CustomSelect>
                    <FileInput defaultValue={[data.image]} inputName='image' setFormData={setData} />


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
                            <button type="submit">{t('edit_school')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
