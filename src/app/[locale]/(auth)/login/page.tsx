import LoginForm from '@/components/pages/auth/login-form';
import { useAuthTranslations } from '@/lib/i18n-utils';
import { FC } from 'react';

const LoginPage: FC = () => {
    const t = useAuthTranslations();
    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold tracking-tight">
                        {t('loginTitle')}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        {t('loginDescription')}
                    </p>
                </div>

                <div className="mt-8 space-y-6">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;