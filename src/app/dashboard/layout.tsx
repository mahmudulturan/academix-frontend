import DashboardHeader from '@/components/layout/dashboard/header/header';
import DashboardSidebar from '@/components/layout/dashboard/sidebar/sidebar';
import { FC, ReactNode } from 'react';

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <header>
                <DashboardHeader />
            </header>
            <aside>
                <DashboardSidebar />
            </aside>
            <main>
                {children}
            </main>
        </>
    );
};

export default DashboardLayout;