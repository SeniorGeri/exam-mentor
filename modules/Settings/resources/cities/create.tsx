'use client';

import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import { Country } from '../countries/data';
import {  SelectItem } from '@/components/ui/select';
import { useCountries } from './countries-context';
import CustomInput from '@/components/input/custom-input';
import CustomTextarea from '@/components/input/custom-textarea';
import CustomSelect from '@/components/input/custom-select';


export function CreateCity() {

    const countries = useCountries(); // Access directly from context

    const { t } = useTranslation('Settings');


    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        city: '',
        country_id: '',
        description: '',
    });

    const storeCountCreateCity: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('city.store'), {
            preserveScroll: true,
            onSuccess: () => cityCreated(),
            // onFinish: () => reset(),
        });
    };

    const closeModal: () => void = () => {
        clearErrors();
        reset();
        setOpen(false);
    };

    const cityCreated = () => {
        toast(t('city_created_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    {t('create_city')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>{t('create_city')}</DialogTitle>
                <DialogDescription>
                    {t('create_city_desc')}
                </DialogDescription>
                <form className="space-y-6" onSubmit={storeCountCreateCity}>
                    <CustomInput
                        id="city"
                        value={data.city}
                        setFormData={setData}
                        placeholder={t('city')}
                        errorMessage={errors.city}
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
                            <button type="submit">{t('add_city')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
