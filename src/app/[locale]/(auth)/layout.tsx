import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="absolute top-4 left-4 z-10">
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
            <main>
                {children}
            </main>
        </>
    );
};

export default AuthLayout;