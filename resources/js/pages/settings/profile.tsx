import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import CustomInput from '@/components/input/custom-input';
import { InertiaLangPageProps } from '@/types/helpers';
import FileInput from '@/modules/Media/resources/js/file-input';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: '/settings/profile',
    },
];

type ProfileForm = {
    name: string;
    phone: string;
    address: string;
    profile_pic: string;
}

export default function Profile({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
    const { auth } = usePage<SharedData>().props;
    const { languages } = usePage<InertiaLangPageProps>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<ProfileForm>({
        name: auth.user.name,
        phone: auth.user.phone,
        address: auth.user.address,
        profile_pic: auth.user.profile_pic,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Profile information" description="Update your name and email address" />

                    <form onSubmit={submit} className="space-y-6">

                    <FileInput inputName='profile_pic' setFormData={setData} defaultValue={[data.profile_pic]}/>

                        <div className="grid gap-2">

                            <CustomInput
                                id="name"
                                type="text"
                                value={data.name}
                                setFormData={setData}
                                placeholder="Full name"
                            />
                            <InputError className="mt-2" message={errors.name} />
                        </div>

                        <div className="grid gap-2">
                            <CustomInput
                                id="email"
                                type="email"
                                value={auth.user.email}
                                disabled
                                placeholder="Email address"
                            />
                        </div>

                        <div className="grid gap-2">

                            <CustomInput
                                id="phone"
                                type="text"
                                value={data.phone}
                                setFormData={setData}
                                placeholder="Phone number"
                            />
                            <InputError className="mt-2" message={errors.phone} />
                        </div>

                        <div className="grid gap-2">

                            <CustomInput
                                id="address"
                                type="text"
                                value={data.address}
                                setFormData={setData}
                                placeholder="Address"
                            />
                            <InputError className="mt-2" message={errors.address} />
                        </div>

                        <div className="grid gap-2">
                            <CustomInput
                                id="country"
                                type="text"
                                value={auth.user.country?.country ? auth.user.country?.country[languages.main] : ''}
                                disabled
                                placeholder="Country"
                            />
                        </div>
                        
                        <div className="grid gap-2">
                            <CustomInput
                                id="city"
                                type="text"
                                value={auth.user.city?.city ? auth.user.city?.city[languages.main] : ''}
                                disabled
                                placeholder="City"
                            />
                        </div>
                        
                        <div className="grid gap-2">
                            <CustomInput
                                id="gender"
                                type="text"
                                value={auth.user.gender?.gender ? auth.user.gender?.gender[languages.main] : ''}
                                disabled
                                placeholder="Gender"
                            />
                        </div>
                        

                        {mustVerifyEmail && auth.user.email_verified_at === null && (
                            <div>
                                <p className="text-muted-foreground -mt-4 text-sm">
                                    Your email address is unverified.{' '}
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                    >
                                        Click here to resend the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && (
                                    <div className="mt-2 text-sm font-medium text-green-600">
                                        A new verification link has been sent to your email address.
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save</Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-neutral-600">Saved</p>
                            </Transition>
                        </div>
                    </form>
                </div>

                <DeleteUser />
            </SettingsLayout>
        </AppLayout>
    );
}
