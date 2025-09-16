import DashboardHeader from '@/components/layout/dashboard/header/header';
import DashboardSidebar from '@/components/layout/dashboard/sidebar/sidebar';
import { FC, ReactNode } from 'react';

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className='h-screen flex bg-gray-50'>
            <DashboardSidebar />
            <div className='flex flex-col flex-1 overflow-hidden'>
                <DashboardHeader />
                <main className='flex-1 overflow-auto bg-white ml-1'>
                    <div className='p-6 '>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;