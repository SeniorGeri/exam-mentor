import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
        type: 'standalone'
    },
    {
        title: 'Settings',
        href: 'settings',
        icon: LayoutGrid,
        type: 'dropdown',
        permissions: ['country.read', 'city.read', 'language.read','method.read', 'currency.read'],
        subItems: [
            {
                title: 'Country',
                href: route('country.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'country.read',
            },
            {
                title: 'City',
                href: route('city.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'city.read',
            },
            {
                title: 'Language',
                href: route('language.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'language.read',
            },
            {
                title: 'Currency',
                href: route('currency.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'currency.read',
            }
        ]
    }
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
