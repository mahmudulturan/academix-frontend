import { FC, ReactNode } from 'react';

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    );
};

export default DashboardLayout;