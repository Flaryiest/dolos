export interface User {
    id: number;
    email: string;
    access: string;
    usage: number;
    limit: number;
}

export interface AuthState {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: string | null;
}

export interface AuthActions {
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    login: (user: User) => void;
    logout: () => void;
    verifyToken: () => Promise<boolean>;
    reset: () => void;
}

export interface VerifyTokenResponse {
    valid: boolean;
    user?: User;
}

export interface UseAuthGuardOptions {
    redirectTo?: string;
    requireAuth?: boolean;
}
