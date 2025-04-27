import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditCityProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import {SelectItem} from '@/components/ui/select';
import { Country } from '../countries/data';
import { useCountries } from './countries-context';
import CustomInput from '@/components/input/custom-input';
import CustomSelect from '@/components/input/custom-select';
import CustomTextarea from '@/components/input/custom-textarea';

export function EditCity({city, isOpen, closeModal}: EditCityProps) {

    const { t } = useTranslation('Settings');
    const countries = useCountries(); // Access directly from context

    const { currentLocale } = useLocale();
    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: city?.id,
        city: city?.city ? city?.city[currentLocale] : '',
        country_id: city?.country_id,
        description: city?.description,
        locale: currentLocale ?? null
    });

    useEffect(() =>setData('city', city?.city[data.locale] || '') , [data.locale]);

    const updateCity: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('city.update', city.id), {
            preserveScroll: true,
            onSuccess: () => updatedCity(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedCity = () => {
        toast(t('city_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent>
                <DialogTitle>{t('edit_city')}</DialogTitle>
                <DialogDescription>
                    {t('edit_city_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateCity}>
                    <Languages currentLocale={data.locale} setData={setData}/>

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
                        text = {countries.find((count: Country) => count.id === data.country_id)?.country['en'] || t('select_country')}
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
                            <button type="submit">{t('edit_city')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
