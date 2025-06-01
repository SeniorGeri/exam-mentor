// Components
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/auth-layout';
import { useTranslation } from 'react-i18next';
import CustomInput from '@/components/input/custom-input';

export default function ConfirmPassword() {

    const { t } = useTranslation('Auth');

    const { data, setData, post, processing, errors, reset } = useForm<Required<{ password: string }>>({
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout
            title={t('confirm_password')}
            description={t('confirm_password_desc')}
        >
            <Head title={t('confirm_password')} />

            <form onSubmit={submit}>
                <div className="space-y-6">
                    <CustomInput
                        id="password"
                        type="password"
                        placeholder={t('password')}
                        value={data.password}
                        setFormData={setData}
                        errorMessage={errors.password}
                    />

                    <div className="flex items-center">
                        <Button className="w-full" disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            {t('confirm_password')}
                        </Button>
                    </div>
                </div>
            </form>
        </AuthLayout>
    );
}
