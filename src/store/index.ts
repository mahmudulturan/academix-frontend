import { create } from 'zustand'
import authSlice from './slices/auth.slice'

export interface RootState {
    auth: ReturnType<typeof authSlice>;
}

export const useStore = create<RootState>((set, get, store) => ({
    auth: authSlice(set, get, store)
}))