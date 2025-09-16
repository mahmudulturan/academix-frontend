"use client";
import Icon from '@/components/common/icon';
import { dashboardRoutes } from '@/constant/navlinks';
import { ArrowRight01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { FC, useState } from 'react';
import NavLink from '@/components/common/navlink';
import { Button } from '@/components/ui/button';
import UserMenu from './user-menu';
import { motion, AnimatePresence } from 'framer-motion';

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

                        <AnimatePresence>
                            {hasSubmenu && isExpanded && route.children && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className='border-l-2 pl-4 ml-4 mt-1 mb-2 space-y-1 overflow-hidden'
                                >
                                    {route.children.map((child, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.2, delay: index * 0.05 }}
                                        >
                                            <NavLink
                                                href={child.path}
                                                active='default'
                                                other='outline'
                                                className='mt-1'
                                            >
                                                {child.name}
                                            </NavLink>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
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
            <div className='border-t h-16 flex items-center justify-center px-3'>
                <UserMenu />
            </div>
        </div>
    );
};

export default DashboardSidebar;