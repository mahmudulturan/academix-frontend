import Icon from '@/components/common/icon';
import { dashboardRoutes } from '@/constant/navlinks.constant';
import { ArrowRight01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { FC } from 'react';
import NavLink from '@/components/common/navlink';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

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
        <div className=''>
            {hasSubmenu ? (
                <>
                    {!isSidebarExpanded ? (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        className='w-full justify-center px-2 relative'
                                        variant={"outline"}
                                        onClick={onToggle}>
                                        <Icon icon={route.icon} />
                                        <div className='absolute z-10 bottom-0 right-1/2 translate-y-1/2 translate-x-1/2 size-4 bg-primary rounded-full flex items-center justify-center'>
                                            <Icon
                                                icon={ArrowRight01Icon}
                                                altIcon={ArrowDown01Icon}
                                                showAlt={isExpanded}
                                                size={8}
                                                strokeWidth={2.5}
                                                className='text-muted'
                                            />
                                        </div>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <div className='flex flex-col gap-1'>
                                        <p className='font-medium'>{route.name}</p>
                                        <p className='text-xs text-muted'>{route.children?.length} items • Click to expand</p>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ) : (
                        <Button
                            className='w-full text-start justify-start'
                            variant={"outline"}
                            onClick={onToggle}>
                            <Icon icon={route.icon} />
                            <span className='flex-1'>{route.name}</span>
                            <Icon
                                icon={ArrowRight01Icon}
                                altIcon={ArrowDown01Icon}
                                showAlt={isExpanded}
                                className='text-gray-400'
                            />
                        </Button>
                    )}

                    <AnimatePresence>
                        {hasSubmenu && isExpanded && route.children && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className={`mt-1 space-y-1 overflow-hidden ${isSidebarExpanded ? 'border-l-2 pl-4 ml-4' : 'ml-0'
                                    }`}
                            >
                                {route.children.map((child, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                    >
                                        {!isSidebarExpanded && child.icon ? (
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <NavLink
                                                            href={child.path}
                                                            active='default'
                                                            other='outline'
                                                            className='justify-center px-2'
                                                        >
                                                            <Icon icon={child.icon} />
                                                        </NavLink>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="right">
                                                        <p>{child.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        ) : (
                                            <NavLink
                                                href={child.path}
                                                active='default'
                                                other='outline'
                                                className='mt-1 text-start'
                                            >
                                                {child.icon && <Icon icon={child.icon} />}
                                                {isSidebarExpanded && <span className='flex-1'>{child.name}</span>}
                                            </NavLink>
                                        )}
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2, delay: 0.3 }}
                                    className='mt-2'
                                >
                                    <Separator />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            ) : (
                !isSidebarExpanded ? (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <NavLink
                                    href={route.path}
                                    active='default'
                                    other='outline'
                                    className='text-start justify-center px-2'
                                >
                                    <Icon icon={route.icon} />
                                </NavLink>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <div className='flex flex-col gap-1'>
                                    <p className='font-medium'>{route.name}</p>
                                    <p className='text-xs text-muted'>Direct link</p>
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ) : (
                    <NavLink
                        href={route.path}
                        active='default'
                        other='outline'
                        className='text-start'
                    >
                        <Icon icon={route.icon} />
                        <span className='flex-1'>{route.name}</span>
                    </NavLink>
                )
            )}
        </div>
    );
};


export default NavItem;