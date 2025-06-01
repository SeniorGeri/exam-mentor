// Components
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/auth-layout';
import { useTranslation } from 'react-i18next';
import CustomInput from '@/components/input/custom-input';

export default function ForgotPassword({ status }: { status?: string }) {
    const { t } = useTranslation('Auth');

    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthLayout title={t('forgot_password')} description={t('forgot_password_desc')}>
            <Head title={t('forgot_password')} />

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}

            <div className="space-y-6">
                <form onSubmit={submit}>
                    <CustomInput
                        id="email"
                        type="email"
                        placeholder={t('email')}
                        value={data.email}
                        setFormData={setData}
                        errorMessage={errors.email}
                    />  
                    <div className="my-6 flex items-center justify-start">
                        <Button className="w-full" disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            {t('email_password_reset_link')}
                        </Button>
                    </div>
                </form>

                <div className="text-muted-foreground space-x-1 text-center text-sm">
                    <span>{t('or_return_to')}</span>
                    <TextLink href={route('login')}>{t('log_in')}</TextLink>
                </div>
            </div>
        </AuthLayout>
    );
}
