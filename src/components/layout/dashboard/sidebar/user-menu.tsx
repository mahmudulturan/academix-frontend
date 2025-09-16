"use client";

import Icon from '@/components/common/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    ArrowRight01Icon,
    Settings01Icon,
    HelpCircleIcon,
    Search01Icon,
    LogoutSquare02Icon,
    UserIcon,
    CreditCardIcon,
    Notification01Icon
} from '@hugeicons/core-free-icons';
import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UserMenuProps {
    isSidebarExpanded: boolean;
}

const UserMenu: FC<UserMenuProps> = ({ isSidebarExpanded }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className={`flex items-center h-12 w-full ${isSidebarExpanded ? 'gap-3 justify-start' : 'justify-center px-2'}`}
                >
                    <Avatar className={isSidebarExpanded ? '' : 'w-8 h-8'}>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
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
                                        shadcn
                                    </span>
                                    <span className="text-xs text-gray-500 truncate w-32">
                                        contact@shadcn.com
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
            <DropdownMenuContent className="w-56" side="right" align="end">
                <DropdownMenuItem>
                    <Icon icon={UserIcon} className="mr-2" />
                    <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Icon icon={CreditCardIcon} className="mr-2" />
                    <span>Billing</span>
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
                <DropdownMenuItem>
                    <Icon icon={Search01Icon} className="mr-2" />
                    <span>Search</span>
                </DropdownMenuItem>
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