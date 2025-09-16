import LoginForm from '@/components/pages/auth/login-form';
import { FC } from 'react';

const LoginPage: FC = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Welcome back! Please enter your details.
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