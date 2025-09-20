"use client";
import DashboardHeader from '@/components/layout/dashboard/header/header';
import DashboardSidebar from '@/components/layout/dashboard/sidebar/sidebar';
import { FC, ReactNode, useState } from 'react';

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    return (
        <div className='h-screen flex bg-background'>
            <DashboardSidebar isSidebarExpanded={isSidebarExpanded} />
            <div className='flex flex-col flex-1 overflow-hidden'>
                <DashboardHeader
                    isSidebarExpanded={isSidebarExpanded}
                    setIsSidebarExpanded={setIsSidebarExpanded}
                />
                <main className='flex-1 overflow-auto'>
                    <div>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;