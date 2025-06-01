import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';
import { LocaleProvider } from '@/contexts/locale';

const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Store language preference
};
export default function AuthLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <LocaleProvider>
            <AuthLayoutTemplate title={title} description={description} {...props}>
                {children}
            </AuthLayoutTemplate>
        </LocaleProvider>
    );
}
