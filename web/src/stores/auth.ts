import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { api } from '../services';
import type {AuthState, AuthActions } from '../types';

type AuthStore = AuthState & AuthActions;

const initialState: AuthState = {
    user: null,
    isLoading: false,
    isAuthenticated: false,
    error: null,
};

export const useAuthStore = create<AuthStore>()(
    devtools(
        persist(
            (set, get) => ({
                ...initialState,

                // State setters
                setUser: (user) => 
                    set(
                        { user, isAuthenticated: !!user, error: null },
                        false,
                        'auth/setUser'
                    ),

                setLoading: (isLoading) => 
                    set({ isLoading }, false, 'auth/setLoading'),

                setError: (error) => 
                    set({ error }, false, 'auth/setError'),

                // Actions
                login: (user) => 
                    set(
                        { 
                            user, 
                            isAuthenticated: true, 
                            error: null,
                            isLoading: false 
                        },
                        false,
                        'auth/login'
                    ),

                logout: () => {
                    set(
                        { 
                            user: null, 
                            isAuthenticated: false, 
                            error: null,
                            isLoading: false 
                        },
                        false,
                        'auth/logout'
                    );
                },

                verifyToken: async () => {
                    const { setLoading, setUser, setError } = get();
                    
                    setLoading(true);
                    setError(null);

                    try {
                        const result = await api.auth.verifyToken();
                        
                        if (result.success && result.data?.valid && result.data.user) {
                            setUser(result.data.user);
                            return true;
                        } else {
                            setUser(null);
                            return false;
                        }
                    } catch (error) {
                        const errorMessage = error instanceof Error ? error.message : 'Authentication failed';
                        setError(errorMessage);
                        setUser(null);
                        return false;
                    } finally {
                        setLoading(false);
                    }
                },

                reset: () => 
                    set(initialState, false, 'auth/reset'),
            }),
            {
                name: 'auth-storage',
                partialize: (state) => ({
                    user: state.user,
                    isAuthenticated: state.isAuthenticated,
                }),
            }
        ),
        {
            name: 'auth-store',
        }
    )
);

// Selectors for easy access to specific state slices
export const useUser = () => useAuthStore((state) => state.user);
export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated);
export const useIsLoading = () => useAuthStore((state) => state.isLoading);
export const useAuthError = () => useAuthStore((state) => state.error);

// Action selectors
export const useAuthActions = () => useAuthStore((state) => ({
    login: state.login,
    logout: state.logout,
    verifyToken: state.verifyToken,
    setError: state.setError,
    reset: state.reset,
}));
