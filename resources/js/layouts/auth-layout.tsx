import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';
import { LocaleProvider } from '@/contexts/locale';
import i18n from '@/i18n';

i18n.changeLanguage('en');

export default function AuthLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <LocaleProvider>
            <AuthLayoutTemplate title={title} description={description} {...props}>
                {children}
            </AuthLayoutTemplate>
        </LocaleProvider>
    );
}
