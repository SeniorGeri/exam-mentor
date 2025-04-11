import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import {type BreadcrumbItem} from '@/types';
import {type ReactNode} from 'react';
import i18n from '@/i18n';
import { I18nextProvider } from 'react-i18next';
import { Toaster } from "@/components/ui/sonner"

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Store language preference
};

export default ({children, breadcrumbs, ...props}: AppLayoutProps) => (
    <I18nextProvider i18n={i18n}>
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        <Toaster />
            {children}
        </AppLayoutTemplate>
    </I18nextProvider>

);
