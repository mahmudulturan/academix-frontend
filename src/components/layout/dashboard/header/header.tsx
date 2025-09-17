"use client";
import Icon from '@/components/common/icon';
import LocaleSwitcher from '@/components/common/locale-switcher';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PlusSignCircleIcon, SidebarLeft01Icon, SidebarRight01Icon } from '@hugeicons/core-free-icons';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface DashboardHeaderProps {
    isSidebarExpanded: boolean;
    setIsSidebarExpanded: (isSidebarExpanded: boolean) => void;
}

const DashboardHeader: FC<DashboardHeaderProps> = ({ isSidebarExpanded, setIsSidebarExpanded }) => {
    const pathname = usePathname();

    const generateBreadcrumbs = () => {
        const paths = pathname.split('/').filter(path => path);
        return paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join('/')}`;
            const label = path.charAt(0).toUpperCase() + path.slice(1);
            const isLast = index === paths.length - 1;

            return (
                <BreadcrumbList key={index}>
                    <BreadcrumbItem>
                        {isLast ? (
                            <BreadcrumbPage className='font-semibold'>{label}</BreadcrumbPage>
                        ) : (
                            <BreadcrumbLink className='font-semibold' href={href}>{label}</BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                    {!isLast && <BreadcrumbSeparator />}
                </BreadcrumbList>
            );
        });
    };

    const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded);

    return (
        <div className='flex items-center justify-between p-4 border-b max-h-16'>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-0.5'>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleSidebar}
                    >
                        {isSidebarExpanded ? (
                            <Icon
                                icon={SidebarLeft01Icon}
                            />
                        ) : (
                            <Icon
                                icon={SidebarRight01Icon}
                            />
                        )}
                        <span className="sr-only">Toggle Sidebar</span>
                    </Button>
                    <Separator orientation='vertical' className='h-5' />
                </div>
                <Breadcrumb>
                    <BreadcrumbList>
                        {generateBreadcrumbs()}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className='flex items-center gap-2'>
                <Button>
                    <Icon
                        icon={PlusSignCircleIcon}
                        size={16}
                    />
                    <span>Quick Create</span>
                </Button>
                <LocaleSwitcher />
            </div>
        </div>
    );
};

export default DashboardHeader;