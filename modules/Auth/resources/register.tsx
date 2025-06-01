import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/auth-layout';
import { RegisterForm } from './data';
import { useTranslation } from 'react-i18next';
import CustomInput from '@/components/input/custom-input';
import CustomSwitch from '@/components/input/custom-switch';



export default function Register() {
    const { t } = useTranslation('Auth');
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        instructor: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title={t('create_an_account')} description={t('create_an_account_desc')}>
            <Head title={t('register')} />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <CustomInput
                        id="name"
                        type="text"
                        placeholder={t('name')}
                        value={data.name}
                        setFormData={setData}
                        errorMessage={errors.name}
                    />
                    <CustomInput
                        id="email"
                        type="email"
                        placeholder={t('email')}
                        value={data.email}
                        setFormData={setData}
                        errorMessage={errors.email}
                    />
                    <CustomInput
                        id="phone"
                        type="text"
                        placeholder={t('phone')}
                        value={data.phone}
                        setFormData={setData}
                        errorMessage={errors.phone}
                    />
                    <CustomInput
                        id="password"
                        type="password"
                        placeholder={t('password')}
                        value={data.password}
                        setFormData={setData}
                        errorMessage={errors.password}
                    />
                    <CustomInput
                        id="password_confirmation"
                        type="password"
                        placeholder={t('confirm_password')}
                        value={data.password_confirmation}
                        setFormData={setData}
                        errorMessage={errors.password_confirmation}
                    />

                    <CustomSwitch
                        id="instructor"
                        is_checked={data.instructor}
                        setFormData={setData}
                        placeholder={t('instructor')}
                    />

                    <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {t('create_account')}
                    </Button>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    {t('already_have_an_account')}{' '}
                    <TextLink href={route('login')} tabIndex={6}>
                        {t('login')}
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
