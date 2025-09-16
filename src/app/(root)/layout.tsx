import { FC, ReactNode } from 'react';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    );
};

export default RootLayout;