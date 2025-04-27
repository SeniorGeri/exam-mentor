import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {useForm} from '@inertiajs/react';
import {FormEventHandler} from 'react';
import {toast} from 'sonner';
import {EditStudentProps} from "./data";
import {route} from "ziggy-js";
import { useTranslation } from 'react-i18next';
import {SelectItem} from '@/components/ui/select';
import { Country } from '@/modules/Settings/resources/countries/data';    
import { useStudentData } from './student-data-context';
import CustomSelect from '@/components/input/custom-select';
import CustomTextarea from '@/components/input/custom-textarea';
import CustomSwitch from '@/components/input/switch-input';
import CustomInput from '@/components/input/custom-input';
import FileInput from 'modules/Media/resources/js/file-input';
import { City } from '@/modules/Settings/resources/cities/data';
import { Gender } from '@/modules/Settings/resources/genders/data';

export function EditStudent({student, isOpen, closeModal}: EditStudentProps) {

    const { t } = useTranslation('Hrm');
    const studentData = useStudentData(); // Access directly from context

    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: student?.id,
        name: student?.name ,
        email: student?.email,
        country_id: student?.country_id,
        city_id: student?.city_id,
        gender_id: student?.gender_id,
        active: student?.active,
        address: student?.address,
        bio: student?.bio,
        profile_pic: student?.profile_pic,
        description: student?.description,
    });

    const updateStudent: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('student.update', student.id), {
            preserveScroll: true,
            onSuccess: () => updatedStudent(),
            onError: (error) => toast(error.description, {position: 'top-right', duration: 2000}),
            onFinish: () => reset(),
        });
    };

    const updatedStudent = () => {
        toast(t('student_edit_succ'), {position: 'top-right', duration: 2000});
        clearErrors();
        reset();
        closeModal();

    };

    return (
        <Dialog open={isOpen} modal={true}>
            <DialogContent className="sm:max-w-4xl">
            <DialogTitle>{t('edit_student')}</DialogTitle>
                <DialogDescription>
                    {t('edit_student_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateStudent}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-3">

                    <CustomInput
                        id="name"
                        value={data.name}
                        setFormData={setData}
                        placeholder={t('name')}
                        errorMessage={errors.name}
                        className='col-span-1'
                    />

                    <CustomInput 
                        id="email"
                        type="email"
                        value={data.email}
                        setFormData={setData}
                        placeholder={t('email')}
                        errorMessage={errors.email}
                        className='col-span-1'
                    />    

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-3">

                    <CustomSelect
                        id="country_id"
                        className='col-span-1'
                        value={data.country_id}
                        text = {studentData.countries.find((count: Country) => count.id === data.country_id)?.country['en'] || t('select_country')}
                        setFormData={setData}
                        placeholder={t('country')}
                        errorMessage={errors.country_id}
                    >   
                        <>
                            {studentData.countries.map((country : Country) => (
                                <SelectItem key={country.id} value={country.id.toString()}>{country.country['en']}</SelectItem>
                            ))}
                        </>
                    </CustomSelect>

                    <CustomSelect
                        id="city_id"
                        className='col-span-1'
                        value={data.city_id}
                        text = {studentData.cities.find((city: City) => city.id === data.city_id)?.city['en'] || t('select_city')}
                        setFormData={setData}
                        placeholder={t('city')}
                        errorMessage={errors.city_id}
                    >   
                        <>
                            {studentData.cities.map((city : City) => (
                                <SelectItem key={city.id} value={city.id.toString()}>{city.city['en']}</SelectItem>
                            ))}
                        </>
                    </CustomSelect>

                    <CustomSelect
                        id="gender_id"
                        className='col-span-1'
                        value={data.gender_id}
                        text = {studentData.genders.find((gender: Gender) => gender.id.toString() === data.gender_id?.toString())?.gender['en'] || t('select_gender')}
                        setFormData={setData}
                        placeholder={t('gender')}
                        errorMessage={errors.gender_id}
                    >   
                        <>
                            {studentData.genders.map((gender : Gender) => (
                                <SelectItem key={gender.id} value={gender.id.toString()}>{gender.gender['en']}</SelectItem>
                            ))}
                        </>
                    </CustomSelect>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-3 gap-1">
                    <div className="grid col-span-2">

                    <FileInput defaultValue={[data.profile_pic]} inputName='profile_pic' setFormData={setData} />


                    </div>

                    <div className="grid col-span-1 gap-2">
                        <CustomInput  
                            id="address"
                            value={data.address}
                            setFormData={setData}
                            placeholder={t('address')}
                            errorMessage={errors.address}
                        />
                        
                        <CustomSwitch
                            id="active"
                            is_checked={data.active}
                            setFormData={setData}
                            placeholder={t('active')}
                        />
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-3 gap-1">
                    <CustomTextarea 
                        id="description"
                        value={data.description}
                        setFormData={setData}
                        placeholder={t('description')}
                        errorMessage={errors.description}
                    />

                    <CustomTextarea 
                        id="bio"
                        value={data.bio}
                        setFormData={setData}
                        placeholder={t('bio')}
                        errorMessage={errors.bio}
                    />
                </div>

                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary" onClick={closeModal}>
                                {t('close')}
                            </Button>
                        </DialogClose>

                        <Button variant="default" disabled={processing} asChild>
                            <button type="submit">{t('edit_student')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
