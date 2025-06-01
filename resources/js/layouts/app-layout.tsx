import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import {type BreadcrumbItem} from '@/types';
import {type ReactNode} from 'react';
import i18n from '@/i18n';
import { Toaster } from "@/components/ui/sonner"
import { LocaleProvider } from '@/contexts/locale';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

i18n.changeLanguage('en');

export default ({children, breadcrumbs, ...props}: AppLayoutProps) => (
    <LocaleProvider>
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            <Toaster />
            {children}
        </AppLayoutTemplate>
    </LocaleProvider>
);
