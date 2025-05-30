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
        title: 'Operational',
        href: 'operational',
        icon: LayoutGrid,
        type: 'dropdown',
        permissions: ['school.read','subject.read','course.read','grade.read'],
        subItems: [
            {
                title: 'School',
                href: route('school.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'school.read',
            },
            {
                title: 'Subject',
                href: route('subject.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'subject.read',
            },
            {
                title: 'Course',
                href: route('course.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'course.read',
            },
            {
                title: 'Grade',
                href: route('grade.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'grade.read',
            }
        ]
    },
    {
        title: 'Finance',
        href: 'finance',
        icon: LayoutGrid,
        type: 'dropdown',
        permissions: ['course-pricing.read','liquidation.read','expense.read','transaction.read'],
        subItems: [
            {
                title: 'Course Pricing',
                href: route('course-pricing.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'course-pricing.read',
            },
            {
                title: 'Liquidation',
                href: route('liquidation.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'liquidation.read',
            },
            {
                title: 'Expense',
                href: route('expense.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'expense.read',
            },
            {
                title: 'Transaction',
                href: route('transaction.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'transaction.read',
            }
        ]
    },
    {
        title: 'Hrm',
        href: 'hrm',
        icon: LayoutGrid,
        type: 'dropdown',
        permissions: ['instructor.read', 'student.read'],
        subItems: [
            {
                title: 'Instructor',
                href: route('instructor.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'instructor.read',
            },
            {
                title: 'Student',
                href: route('student.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'student.read',
            }
        ]
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
            ,
            {
                title: 'Payment Method',
                href: route('payment.list'),
                icon: LayoutGrid,
                type: 'standalone',
                permission: 'payment.read',
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
