import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Bell, BellRing, Book, BookOpen, CalendarArrowUp, CircleGauge, Cog, Coins, Euro, Folder, GraduationCap, HandCoins, Handshake, Images, Landmark, Languages, LogOut, Map, Megaphone, PiggyBank, ReceiptEuro, School, ShieldCheck, Sliders, User, UserCheck, UsersRound, } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: CircleGauge,
        type: 'standalone'
    },
    {
        title: 'Operational',
        href: 'operational',
        icon: Handshake,
        type: 'dropdown',
        permissions: ['active-course.read','course-instructor.read','school.read','subject.read','course.read','grade.read'],
        subItems: [
            {
                title: 'Active course',
                href: route('active-course.list'),
                icon: ShieldCheck,
                type: 'standalone',
                permission: 'active-course.read',
            },
            {
                title: 'Course Instructor',
                href: route('course-instructor.list'),
                icon: HandCoins,
                type: 'standalone',
                permission: 'course-instructor.read',
            },
            {
                title: 'Course',
                href: route('course.list'),
                icon: GraduationCap,
                type: 'standalone',
                permission: 'course.read',
            },
            {
                title: 'School',
                href: route('school.list'),
                icon: School,
                type: 'standalone',
                permission: 'school.read',
            },
            {
                title: 'Subject',
                href: route('subject.list'),
                icon: Book,
                type: 'standalone',
                permission: 'subject.read',
            },
            {
                title: 'Grade',
                href: route('grade.list'),
                icon: CalendarArrowUp,
                type: 'standalone',
                permission: 'grade.read',
            }
        ]
    },
    {
        title: 'Finance',
        href: 'finance',
        icon: HandCoins,
        type: 'dropdown',
        permissions: ['liquidation.read','expense.read','transaction.read'],
        subItems: [    
            {
                title: 'Liquidation',
                href: route('liquidation.list'),
                icon: Landmark,
                type: 'standalone',
                permission: 'liquidation.read',
            },
            {
                title: 'Expense',
                href: route('expense.list'),
                icon: Coins,
                type: 'standalone',
                permission: 'expense.read',
            },
            {
                title: 'Transaction',
                href: route('transaction.list'),
                icon: PiggyBank,
                type: 'standalone',
                permission: 'transaction.read',
            }
        ]
    },
    {
        title: 'Hrm',
        href: 'hrm',
        icon: UsersRound,
        type: 'dropdown',
        permissions: ['instructor.read', 'student.read'],
        subItems: [
            {
                title: 'Instructor',
                href: route('instructor.list'),
                icon: UserCheck,
                type: 'standalone',
                permission: 'instructor.read',
            },
            {
                title: 'Student',
                href: route('student.list'),
                icon: User,
                type: 'standalone',
                permission: 'student.read',
            }
        ]
    },
    {
        title: 'Media',
        href: 'media',
        icon: Images,
        type: 'dropdown',
        permissions: ['slider.read'],
        subItems: [
            {
                title: 'Slider',
                href: route('slider.list'),
                icon: Sliders,
                type: 'standalone',
                permission: 'slider.read',
            },
        ]
    },
    {
        title: 'Notification',
        href: 'notification',
        icon: Bell,
        type: 'dropdown',
        permissions: ['notification.read','contact.read'],
        subItems: [
            {
                title: 'Notification',
                href: route('notification.list'),
                icon: BellRing,
                type: 'standalone',
                permission: 'notification.read',
            },
            {
                title: 'Contact',
                href: route('contact.list'),
                icon: Megaphone,
                type: 'standalone',
                permission: 'contact.read',
            }
        ]
    },
    {
        title: 'Settings',
        href: 'settings',
        icon: Cog,
        type: 'dropdown',
        permissions: ['country.read', 'city.read', 'language.read','method.read', 'currency.read'],
        subItems: [
            {
                title: 'Country',
                href: route('country.list'),
                icon: Map,
                type: 'standalone',
                permission: 'country.read',
            },
            {
                title: 'City',
                href: route('city.list'),
                icon: Map,
                type: 'standalone',
                permission: 'city.read',
            },
            {
                title: 'Language',
                href: route('language.list'),
                icon: Languages,
                type: 'standalone',
                permission: 'language.read',
            },
            {
                title: 'Currency',
                href: route('currency.list'),
                icon: Euro,
                type: 'standalone',
                permission: 'currency.read',
            }
            ,
            {
                title: 'Payment Method',
                href: route('payment.list'),
                icon: ReceiptEuro,
                type: 'standalone',
                permission: 'payment.read',
            }
        ]
    }

];

const footerNavItems: NavItem[] = [
    {
        title: 'Main page',
        href: route('frontend.index'),
        icon: LogOut,
        type: 'standalone',
    }
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
