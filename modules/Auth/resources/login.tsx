import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/auth-layout';
import { LoginForm, LoginProps } from './data';
import CustomInput from '@/components/input/custom-input';
import CustomSwitch from '@/components/input/custom-switch';
import { useTranslation } from 'react-i18next';

export default function Login({ status }: LoginProps) {
    const { t } = useTranslation('Auth');

    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title={t('login')} description={t('login_desc')}>
            <Head title={t('login')} />

            <form className="flex flex-col gap-6" onSubmit={submit}>
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
                    
                    <CustomSwitch
                        id="remember"
                        is_checked={data.remember}
                        setFormData={setData}
                        placeholder={t('remember')}
                    />
      
                    <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {t('login')}
                    </Button>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    {t('dont_have_an_account')}{' '}
                    <TextLink href={route('register')} tabIndex={5}>
                        {t('sign_up')}
                    </TextLink>
                    <div className="mx-2">
                        {t('still_not_sure')} ? {t('go_back_and')} {' '}
                        <TextLink href={route('frontend.index')} tabIndex={5}>
                            {t('browse_a_bit_more')}
                        </TextLink>
                    </div>

                  

                </div>
            </form>

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
        </AuthLayout>
    );
}
