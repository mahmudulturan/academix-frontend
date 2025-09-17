"use client";
import { FC, useState } from 'react';
import UserMenu from './user-menu';
import { motion, AnimatePresence } from 'framer-motion';
import NavItem from './nav-item';
import { getDashboardRoutes } from '@/constant/navlinks.constant';
interface DashboardSidebarProps {
    isSidebarExpanded: boolean;
}

const DashboardSidebar: FC<DashboardSidebarProps> = ({ isSidebarExpanded }) => {
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
        'Dashboard': true
    });

    const dashboardRoutes = getDashboardRoutes();

    const toggleExpanded = (routeName: string) => {
        setExpandedItems(prev => ({
            ...prev,
            [routeName]: !prev[routeName]
        }));
    };

    return (
        <motion.div
            className='bg-background border-r h-full flex flex-col overflow-x-hidden'
            initial={false}
            animate={{
                width: isSidebarExpanded ? 256 : 80
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
                <nav className={`${isSidebarExpanded ? 'space-y-2' : 'space-y-3'} h-[calc(100vh-181px)] overflow-y-auto`}>
                    {dashboardRoutes.map((route, index) => (
                        <NavItem
                            key={index}
                            route={route}
                            isExpanded={expandedItems[route.nameKey]}
                            onToggle={() => toggleExpanded(route.nameKey)}
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