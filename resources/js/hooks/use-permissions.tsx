import { usePage } from '@inertiajs/react';

type Auth = {
    permissions: string[];
};

type InertiaPageProps = {
    auth: Auth;
};


export const usePermissions = () => {
    const { auth } = usePage<InertiaPageProps>().props;

    const hasPermission = (permission: string): boolean =>
        auth?.permissions?.includes(permission);

    const hasAnyPermission = (permissions: string[]): boolean =>
        permissions.some((permission) => hasPermission(permission));

    return {
        hasPermission,
        hasAnyPermission,
    };
};
