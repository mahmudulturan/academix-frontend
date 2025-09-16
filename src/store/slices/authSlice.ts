import { StateCreator } from 'zustand'
import { RootState } from '..'
import { IUser } from '@/types/user.type';

interface AuthState {
    isAuthenticated: boolean;
    isAuthLoading: boolean;
    user: null | IUser;
    removeUser: () => void
    setUser: (user: IUser) => void
}

const authSlice: StateCreator<RootState, [], [], AuthState> = (set) => ({
    isAuthenticated: false,
    isAuthLoading: true,
    user: null,

    removeUser: () => {
        set((state) => ({
            auth: {
                ...state.auth,
                isAuthenticated: false,
                isAuthLoading: false,
                user: null
            }
        }))
    },

    setUser: (user) => {
        set((state) => ({
            auth: {
                ...state.auth,
                isAuthenticated: !!user,
                isAuthLoading: false,
                user
            }
        }))
    },
})


export default authSlice;