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
import { Country } from '@/modules/Settings/resources/countries/data';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useStudentData } from './student-data-context';
import { City } from '@/modules/Settings/resources/cities/data';
import { Gender } from '@/modules/Settings/resources/genders/data';
import FileInput from 'modules/Media/resources/js/file-input';
import { Switch } from '@/components/ui/switch';


export function CreateStudent() {

    const studentData = useStudentData(); // Access directly from context

    const { t } = useTranslation('Settings');


    const [open, setOpen] = useState(false);

    const {data, setData, post, processing, reset, errors, clearErrors} = useForm({
        name: '',
        email: '',
        password: '',
        country_id: '',
        city_id: '',
        gender_id: '',
        active: false,
        address: '',
        bio: '',
        profile_pic: '',
        description: '',
    });

    const storeCountCreateStudent: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('student.store'), {
            preserveScroll: true,
            onSuccess: () => studentCreated(),
            // onFinish: () => reset(),
        });
    };

    const closeModal: () => void = () => {
        clearErrors();
        reset();
        setOpen(false);
    };

    const studentCreated = () => {
        toast(t('student_created_succ'), {position: 'top-right', duration: 2000});
        closeModal();
    };

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" size="sm" onClick={() => setOpen(true)}>
                    {t('create_student')}
                </Button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-6xl">
                <DialogTitle>{t('create_student')}</DialogTitle>
                <DialogDescription>
                    {t('create_student_desc')}
                </DialogDescription>
                <form className="space-y-6" onSubmit={storeCountCreateStudent}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-3">
                        <div className="grid col-span-1">
                            <Label htmlFor="name">{t('name')}</Label>

                            <Input
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder={t('name')}
                                autoComplete="name"
                            />

                            <InputError message={errors.name}/>
                        </div>
                      
                        <div className="grid col-span-1">
                            <Label htmlFor="email">{t('email')}</Label>

                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder={t('email')}
                                autoComplete="email"
                            />

                            <InputError message={errors.email}/>
                        </div>

                        <div className="grid col-span-1">
                            <Label htmlFor="password">{t('password')}</Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder={t('password')}
                                autoComplete="password"
                            />

                            <InputError message={errors.password}/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-3">
                        <div className="grid col-span-1">
 
                        <Label htmlFor="country_id">{t('countries')}</Label>
                        <Select
                            name="country_id"
                            value={data.country_id}
                            onValueChange={(value) => setData("country_id", value)}
                        >
                            <SelectTrigger className="w-full" >
                                <SelectValue placeholder={t('select_country')}>
                                    {data.country_id ? studentData.countries.find((count: Country) => count.id.toString() === data.country_id)?.country['en'] : t('select_country')}
                            </SelectValue>

                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>{t('select_country')}</SelectLabel>
                                {studentData.countries.map((country : Country) => (
                                    <SelectItem key={country.id} value={country.id}>{country.country['en']}</SelectItem>
                                ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <InputError message={errors.country_id}/>

                        </div>
                        <div className="grid col-span-1">
 
                            <Label htmlFor="city_id">{t('cities')}</Label>
                            <Select
                                name="city_id"
                                value={data.city_id}
                                onValueChange={(value) => setData("city_id", value)}
                            >
                                <SelectTrigger className="w-full" >
                                    <SelectValue placeholder={t('select_city')}>
                                        {data.city_id ? studentData.cities.find((city: City) => city.id.toString() === data.city_id)?.city['en'] : t('select_city')}
                                </SelectValue>

                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>{t('select_city')}</SelectLabel>
                                    {studentData.cities.map((city : City) => (
                                        <SelectItem key={city.id} value={city.id}>{city.city['en']}</SelectItem>
                                    ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <InputError message={errors.city_id}/>

                        </div>

                        <div className="grid col-span-1">

                            <Label htmlFor="gender_id">{t('cities')}</Label>
                            <Select
                                name="gender_id"
                                value={data.gender_id}
                                onValueChange={(value) => setData("gender_id", value)}
                            >
                                <SelectTrigger className="w-full" >
                                    <SelectValue placeholder={t('select_gender')}>
                                        {data.gender_id ? studentData.genders.find((gender: Gender) => gender.id.toString() === data.gender_id)?.gender['en'] : t('select_gender')}
                                </SelectValue>

                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>{t('select_gender')}</SelectLabel>
                                    {studentData.genders.map((gender : Gender) => (
                                        <SelectItem key={gender.id} value={gender.id}>{gender.gender['en']}</SelectItem>
                                    ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <InputError message={errors.gender_id}/>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-3 gap-1">
                        <div className="grid col-span-2">
 
                     
                        <FileInput inputName='profile_pic' setFormData={setData} />

                        </div>
                        <div className="grid col-span-1 gap-2">
                            <div className="flex items-center">
                                <Switch id="active" checked={data.active}
                                onCheckedChange={(checked: boolean) => setData('active', checked)}/>

                                <Label htmlFor="active">{t('active')}</Label>
                            </div>
                            <div>
                                <Label htmlFor="address">{t('address')}</Label>

                                <Input
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    placeholder={t('address')}
                                    autoComplete="address"
                                />

                                <InputError message={errors.address}/>
                            </div>
                        
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-3 gap-1">
                        <div className="grid col-span-1">
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

                        <div className="grid col-span-1">
                            <Textarea
                                id="bio"
                                name="bio"
                                value={data.bio}
                                onChange={(e) => setData('bio', e.target.value)}
                                placeholder={t('bio')}
                                autoComplete="bio"
                            />

                            <InputError message={errors.bio}/>
                        </div>
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
