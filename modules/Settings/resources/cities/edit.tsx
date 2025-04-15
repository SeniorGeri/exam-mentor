import InputError from '@/components/input-error';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditCityProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Country } from '../countries/data';
import { useCountries } from './countries-context';
import { log } from 'console';

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

                    <div className="grid gap-2">
                        <Label htmlFor="city">{t('city')}</Label>

                        <Input
                            id="city"
                            type="text"
                            name="city"
                            value={data.city}
                            onChange={(e) => setData('city', e.target.value)}
                            placeholder={t('city')}
                            autoComplete="city"
                        />

                        <InputError message={errors.city}/>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="country_id">{t('countries')}</Label>
                        <Select
                            name="country_id"
                            value={data.country_id}
                            onValueChange={(value) => setData("country_id", value)}
                        >
                            <SelectTrigger className="w-full" >
                                <SelectValue placeholder={t('select_country')}>
                                    {data.country_id ? countries.find((country: Country) => country.id.toString() === data.country_id)?.country['en'] : t('select_country')}
                            </SelectValue>

                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>{t('select_country')}</SelectLabel>
                                {countries.map((country : Country) => (
                                    <SelectItem key={country.id} value={country.id}>{country.country['en']}</SelectItem>
                                ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <InputError message={errors.country_id}/>

                    </div>

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
                            <button type="submit">{t('edit_city')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
