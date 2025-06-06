'use client';

import CustomInput from '@/components/input/custom-input';
import CustomSelect from '@/components/input/custom-select';
import CustomTextarea from '@/components/input/custom-textarea';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import FileInput from '@/modules/Media/resources/js/file-input';
import {FormEventHandler, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import { useCountries } from 'modules/Settings/resources/cities/countries-context';
import { SelectItem } from '@/components/ui/select';
import { Country } from '@/modules/Settings/resources/countries/data';

export function CreateSchool() {

    const countries = useCountries(); // Access directly from context
    
    const { t } = useTranslation('Operational');

    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        image: '',
        title: '',
        description: '',
        country_id: ''
    });

    const storeSchool: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('school.store'), {
            preserveScroll: true,
            onSuccess: () => schoolCreated(),
            // onFinish: () => reset(),
        });
    };

    const closeModal: () => void = () => {
        clearErrors();
        reset();
        setOpen(false);
    };

    const schoolCreated = () => {
        toast(t('school_created_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    {t('create_school')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{t('create_school')}</DialogTitle>
                <DialogDescription>
                    {t('create_school_desc')}
                </DialogDescription>
                <form className="space-y-6" onSubmit={storeSchool}>

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
                        text = {countries.find((count: Country) => count.id.toString() === data.country_id)?.country['en'] || t('select_country')}
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
                            <button type="submit">{t('add_school')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
