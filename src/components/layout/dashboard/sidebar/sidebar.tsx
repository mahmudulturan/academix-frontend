"use client";
import Icon from '@/components/common/icon';
import { dashboardRoutes } from '@/constant/navlinks';
import { ArrowRight01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { FC, useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import NavLink from '@/components/common/navlink';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface NavItemProps {
    route: typeof dashboardRoutes[0];
    isActive?: boolean;
    isExpanded?: boolean;
    onToggle?: () => void;
}

const NavItem: FC<NavItemProps> = ({ route, isExpanded, onToggle }) => {
    const hasSubmenu = route.children && route.children.length > 0;

    return (
        <div>
            {
                hasSubmenu ?
                    (<>
                        <Button
                            className='w-full text-start'
                            variant={"outline"}
                            onClick={onToggle}>
                            <Icon
                                icon={route.icon}
                            />
                            <span className='flex-1'>{route.name}</span>
                            <Icon
                                icon={ArrowRight01Icon}
                                altIcon={ArrowDown01Icon}
                                showAlt={isExpanded}
                                className='text-gray-400'
                            />
                        </Button>

                        {hasSubmenu && isExpanded && route.children && (
                            <div className='border-l-2 pl-4 ml-4 mt-1 mb-2 space-y-1'>
                                {route.children.map((child, index) => (
                                    <NavLink
                                        key={index}
                                        href={child.path}
                                        active='default'
                                        other='outline'
                                        className='mt-1'
                                    >
                                        {child.name}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </>
                    )
                    :
                    <NavLink
                        href={route.path}
                        active='default'
                        other='outline'
                        className='text-start'
                    >
                        <Icon
                            icon={route.icon}
                        />
                        <span className='flex-1'>{route.name}</span>

                    </NavLink>
            }
        </div>
    );
};

const DashboardSidebar: FC = () => {
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
        'Dashboard': true
    });



    const toggleExpanded = (routeName: string) => {
        setExpandedItems(prev => ({
            ...prev,
            [routeName]: !prev[routeName]
        }));
    };

    return (
        <div className='w-64 bg-background border-r h-full flex flex-col'>
            {/* logo */}
            <div className='flex items-center gap-2 px-6 py-4 max-h-16 border-b'>
                <div className='w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center'>
                    <span className='text-white text-sm font-semibold'>A</span>
                </div>
                <span className='font-semibold text-gray-900'>Academix</span>
            </div>

            {/* navlinks */}
            <div className='flex-1 py-4 px-3'>
                <nav className='space-y-2 h-[calc(100vh-181px)] overflow-y-auto'>
                    {dashboardRoutes.map((route, index) => (
                        <NavItem
                            key={index}
                            route={route}
                            isExpanded={expandedItems[route.name]}
                            onToggle={() => toggleExpanded(route.name)}
                        />
                    ))}
                </nav>
            </div>

            {/* profile button */}
            <div className='border-t h-16 flex items-center justify-center'>
                <Button
                    variant={"ghost"}
                    className='flex items-center gap-3 h-12'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className='flex-1 min-w-0 flex flex-col items-start'>
                        <span className='text-sm font-medium text-gray-900 truncate'>
                            Harriette Spoonlicker
                        </span>
                        <span className='text-xs text-gray-500 truncate w-32'>
                            hspoonlicker@outlook.com
                        </span>
                    </span>
                    <Icon
                        icon={ArrowRight01Icon}
                        className='text-gray-400'
                    />
                </Button>
            </div>
        </div>
    );
};

export default DashboardSidebar;