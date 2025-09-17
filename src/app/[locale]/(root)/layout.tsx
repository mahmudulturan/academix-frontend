import Footer from '@/components/layout/root/footer/footer';
import Navbar from '@/components/layout/root/navbar/navbar';
import { FC, ReactNode } from 'react';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default RootLayout;