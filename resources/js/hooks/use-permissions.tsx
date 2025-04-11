import { usePage } from '@inertiajs/react';

export const usePermissions = () => {
    const { auth } = usePage().props;

    return {
        hasPermission: (permission: any) => auth?.permissions?.includes(permission)
    };
};
