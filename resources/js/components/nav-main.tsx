import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Collapsible, CollapsibleContent } from '@radix-ui/react-collapsible';
import { CollapsibleTrigger } from './ui/collapsible';
import { usePermissions } from '@/hooks/use-permissions';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    const { hasPermission, hasAnyPermission} = usePermissions();

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    item.type === 'standalone'
                        ?
                        hasPermission(item.permission) &&
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild isActive={item.href === page.url}
                                    tooltip={{ children: item.title }}
                                >
                                    <Link href={item.href} prefetch>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        :
                        hasAnyPermission(item.permissions) &&
                        <Collapsible defaultOpen={page.url.includes(item.href)} className={item.href}>
                            <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton> {item.icon && <item.icon />}<span>{item.title}</span></SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.subItems.map((subItem)=> hasPermission(subItem.permission) && (
                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton
                                                asChild isActive={subItem.href == page.url}
                                                // tooltip={{ children: subItem.title }}
                                            >
                                                <Link href={subItem.href} prefetch>
                                                    {subItem.icon && <subItem.icon />}
                                                    <span>{subItem.title}</span>
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>


                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
