'use client';

import InputError from '@/components/input-error';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {toast} from 'sonner';
import {route} from "ziggy-js";
import { Country } from '../countries/data';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCountries } from './countries-context';


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
                                    {data.country_id ? countries.find((count: Country) => count.id.toString() === data.country_id)?.country['en'] : t('select_country')}
                            </SelectValue>

                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>t('select_country')</SelectLabel>
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
                            placeholder={t('description')}
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
                            <button type="submit">{t('add_city')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
