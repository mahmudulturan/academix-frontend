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
    isSidebarExpanded: boolean;
}

const NavItem: FC<NavItemProps> = ({ route, isExpanded, onToggle, isSidebarExpanded }) => {
    const hasSubmenu = route.children && route.children.length > 0;

    return (
        <div className='overflow-x-hidden'>
            {
                hasSubmenu ?
                    (<>
                        <Button
                            className={`w-full text-start ${!isSidebarExpanded ? 'justify-center px-2' : ''}`}
                            variant={"outline"}
                            onClick={onToggle}>
                            <Icon
                                icon={route.icon}
                            />
                            {isSidebarExpanded && (
                                <>
                                    <span className='flex-1'>{route.name}</span>
                                    <Icon
                                        icon={ArrowRight01Icon}
                                        altIcon={ArrowDown01Icon}
                                        showAlt={isExpanded}
                                        className='text-gray-400'
                                    />
                                </>
                            )}
                        </Button>

                        <AnimatePresence>
                            {hasSubmenu && isExpanded && isSidebarExpanded && route.children && (
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
                        className={`text-start ${!isSidebarExpanded ? 'justify-center px-2' : ''}`}
                    >
                        <Icon
                            icon={route.icon}
                        />
                        {isSidebarExpanded && <span className='flex-1'>{route.name}</span>}
                    </NavLink>
            }
        </div>
    );
};

interface DashboardSidebarProps {
    isSidebarExpanded: boolean;
}

const DashboardSidebar: FC<DashboardSidebarProps> = ({ isSidebarExpanded }) => {
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
        <motion.div
            className='bg-background border-r h-full flex flex-col'
            initial={false}
            animate={{
                width: isSidebarExpanded ? 256 : 64
            }}
            transition={{
                duration: 0.3,
                ease: 'easeInOut'
            }}
        >
            {/* logo */}
            <div className={`flex items-center gap-2 py-4 max-h-16 border-b ${isSidebarExpanded ? 'px-6' : 'px-4 justify-center'}`}>
                <div className='w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center'>
                    <span className='text-white text-sm font-semibold'>A</span>
                </div>
                <AnimatePresence>
                    {isSidebarExpanded && (
                        <motion.span
                            className='font-semibold text-gray-900'
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            Academix
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

            {/* navlinks */}
            <div className={`flex-1 py-4 ${isSidebarExpanded ? 'px-3' : 'px-2'}`}>
                <nav className='space-y-2 h-[calc(100vh-181px)] overflow-y-auto'>
                    {dashboardRoutes.map((route, index) => (
                        <NavItem
                            key={index}
                            route={route}
                            isExpanded={expandedItems[route.name]}
                            onToggle={() => toggleExpanded(route.name)}
                            isSidebarExpanded={isSidebarExpanded}
                        />
                    ))}
                </nav>
            </div>

            {/* profile button */}
            <div className={`border-t h-16 flex items-center justify-center ${isSidebarExpanded ? 'px-3' : 'px-2'}`}>
                <UserMenu isSidebarExpanded={isSidebarExpanded} />
            </div>
        </motion.div>
    );
};

export default DashboardSidebar;