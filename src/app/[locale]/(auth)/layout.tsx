import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigationTranslations } from '@/lib/i18n-utils';

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
    const t = useNavigationTranslations();
    return (
        <>
            <div className="absolute top-6 left-6 z-10">
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        {t("backToHome")}
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