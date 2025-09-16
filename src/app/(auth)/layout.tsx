import { FC, ReactNode } from 'react';

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    );
};

export default AuthLayout;