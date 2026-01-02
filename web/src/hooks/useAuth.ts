import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores';
import { api } from '../services';
import type { UseAuthGuardOptions } from '../types';

/**
 * Custom hook for protecting routes and managing authentication state
 * @param options Configuration options for the auth guard
 * @returns Authentication state and loading status
 */
export const useAuthGuard = (options: UseAuthGuardOptions = {}) => {
    const {
        redirectTo = '/login',
        requireAuth = true,
    } = options;

    const navigate = useNavigate();
    const { user, isLoading, isAuthenticated, verifyToken } = useAuthStore();

    useEffect(() => {
        let isMounted = true;

        const authenticate = async () => {
            if (!isAuthenticated && !isLoading) {
                const isValid = await verifyToken();
                
                if (isMounted && requireAuth && !isValid) {
                    navigate(redirectTo);
                }
            }
        };

        authenticate();

        return () => {
            isMounted = false;
        };
    }, [isAuthenticated, isLoading, navigate, redirectTo, requireAuth, verifyToken]);

    return {
        user,
        isLoading,
        isAuthenticated,
    };
};

/**
 * Hook for logout functionality
 */
export const useLogout = () => {
    const navigate = useNavigate();
    const { logout } = useAuthStore();

    const handleLogout = async () => {
        try {
            await api.auth.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            logout();
            navigate('/login');
        }
    };

    return handleLogout;
};
