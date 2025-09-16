"use client";

import Icon from '@/components/common/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    ArrowRight01Icon,
    Settings01Icon,
    HelpCircleIcon,
    LogoutSquare02Icon,
    UserIcon,
    Notification01Icon,
    LaptopIcon,
    Sun01Icon,
    Moon02Icon
} from '@hugeicons/core-free-icons';
import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTheme } from '@/providers/theme-provider';
import { cn } from '@/lib/utils';
import { useStore } from '@/store';

interface UserMenuProps {
    isSidebarExpanded: boolean;
}

const UserMenu: FC<UserMenuProps> = ({ isSidebarExpanded }) => {
    const { theme, handleThemeChange } = useTheme();
    const user = useStore(state => state.auth.user);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className={`flex items-center h-12 w-full ${isSidebarExpanded ? 'gap-3 justify-start' : 'justify-center px-2'}`}
                >
                    <Avatar className={isSidebarExpanded ? '' : 'w-8 h-8'}>
                        <AvatarImage src={user?.profileImage || "https://github.com/shadcn.png"} />
                        <AvatarFallback>{user?.name.en}</AvatarFallback>
                    </Avatar>
                    <AnimatePresence>
                        {isSidebarExpanded && (
                            <>
                                <motion.span
                                    className="flex-1 min-w-0 flex flex-col items-start text-start"
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: 'auto' }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                >
                                    <span className="text-sm font-medium text-gray-900 truncate">
                                        {user?.name.en}
                                    </span>
                                    <span className="text-xs text-gray-500 truncate w-32">
                                        {user?.email}
                                    </span>
                                </motion.span>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                >
                                    <Icon
                                        icon={ArrowRight01Icon}
                                        className="text-gray-400"
                                    />
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side="top" align="center">
                <DropdownMenuLabel asChild>
                    <div>
                        <h6>{user?.name.en}</h6>
                        <p style={{ fontSize: '12px', fontWeight: 400 }}>{user?.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Icon icon={UserIcon} className="mr-2" />
                    <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Icon icon={Notification01Icon} className="mr-2" />
                    <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Icon icon={Settings01Icon} className="mr-2" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Icon icon={HelpCircleIcon} className="mr-2" />
                    <span>Get Help</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel asChild>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm font-medium'>Theme</span>
                        <div className='flex items-center w-fit rounded-full border bg-background p-0.5'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span onClick={() => handleThemeChange('system')}
                                            className={cn('cursor-pointer flex justify-center items-center size-6 rounded-full', theme === 'system' && 'bg-accent')}>
                                            <Icon size={16} icon={LaptopIcon} />
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>System</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span
                                            onClick={() => handleThemeChange('light')}
                                            className={cn('cursor-pointer flex justify-center items-center size-6 rounded-full', theme === 'light' && 'bg-accent')}>
                                            <Icon size={16} icon={Sun01Icon} />
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Light</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span
                                            onClick={() => handleThemeChange('dark')}
                                            className={cn('cursor-pointer flex justify-center items-center size-6 rounded-full', theme === 'dark' && 'bg-accent')}>
                                            <Icon size={16} icon={Moon02Icon} />
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Dark</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Icon icon={LogoutSquare02Icon} className="mr-2" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;