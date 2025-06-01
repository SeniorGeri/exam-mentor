import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/auth-layout';
import { ResetPasswordForm, ResetPasswordProps } from './data';
import { useTranslation } from 'react-i18next';
import CustomInput from '@/components/input/custom-input';


export default function ResetPassword({ token, email }: ResetPasswordProps) {
    const { t } = useTranslation('Auth');
    const { data, setData, post, processing, errors, reset } = useForm<Required<ResetPasswordForm>>({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title={t('reset_password')} description={t('reset_password_desc')}>
            <Head title={t('reset_password')} />

            <form onSubmit={submit}>
                <div className="grid gap-6">
                    <CustomInput
                        id="email"
                        type="email"
                        placeholder={t('email')}
                        value={data.email}
                        setFormData={setData}
                        errorMessage={errors.email}
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

                    <Button type="submit" className="mt-4 w-full" disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {t('reset_password')}
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
