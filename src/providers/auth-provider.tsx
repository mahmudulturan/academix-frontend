
"use client"
import { FC, ReactNode, useEffect } from 'react';
import { useStore } from '../store';
import { useGetCurrentUserQuery } from '@/tanstack/query/auth.query';


const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const { setUser, removeUser, isAuthLoading } = useStore(state => state.auth);

    const { data: userData, isLoading } = useGetCurrentUserQuery();

    useEffect(() => {
        if (isLoading) {
            return;
        }

        if (userData?.success) {
            setUser(userData.data);
        } else {
            removeUser();
        }
    }, [userData, isLoading]);

    if (isAuthLoading) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider;