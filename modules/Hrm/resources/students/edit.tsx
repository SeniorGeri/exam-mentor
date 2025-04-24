import InputError from '@/components/input-error';
import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {useForm} from '@inertiajs/react';
import {FormEventHandler, useEffect} from 'react';
import {toast} from 'sonner';
import {EditStudentProps} from "./data";
import {route} from "ziggy-js";
import { useLocale } from '@/contexts/locale';
import { Languages } from '@/components/languages';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Country } from '@/modules/Settings/resources/countries/data';    
import { useStudentData } from './student-data-context';

export function EditStudent({student, isOpen, closeModal}: EditStudentProps) {

    const { t } = useTranslation('Settings');
    const studentData = useStudentData(); // Access directly from context

    const { currentLocale } = useLocale();
    const {data, setData, put, processing, reset, errors, clearErrors} = useForm({
        id: student?.id,
        student: student?.name ? student?.name : '',
        country_id: student?.country_id,
        description: student?.description,
        locale: currentLocale ?? null
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
            <DialogContent>
                <DialogTitle>{t('edit_student')}</DialogTitle>
                <DialogDescription>
                    {t('edit_student_desc')}
                </DialogDescription>

                <form className="space-y-6" onSubmit={updateStudent}>
                    <Languages currentLocale={data.locale} setData={setData}/>

                    <div className="grid gap-2">
                        <Label htmlFor="student">{t('student')}</Label>

                        <Input
                            id="student"
                            type="text"
                            name="student"
                            value={data.student}
                            onChange={(e) => setData('student', e.target.value)}
                            placeholder={t('student')}
                            autoComplete="student"
                        />

                        <InputError message={errors.student}/>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="country_id">{t('countries')}</Label>
                        {/* <Select
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
                        </Select> */}
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
                            <button type="submit">{t('edit_student')}</button>
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
