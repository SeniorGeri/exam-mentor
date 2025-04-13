import { usePage } from '@inertiajs/react';

type Auth = {
    permissions: string[];
};

type InertiaPageProps = {
    auth: Auth;
};


export const usePermissions = () => {
    const { auth } = usePage<InertiaPageProps>().props;
    console.log(auth.permissions);

    return {
        hasPermission: (permission: string) => auth?.permissions?.includes(permission)
    };
};
