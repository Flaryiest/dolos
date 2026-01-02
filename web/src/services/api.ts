import { baseUrl } from '../utils/baseUrl';
import type {
    VerifyTokenResponse,
    CreateProjectRequest,
    CreateProjectResponse,
    GetProjectsResponse,
    GetProjectResponse,
    AddContextRequest,
    AddContextResponse,
    ChatRequest,
    ChatResponse,
} from '../types';

// Base fetch configuration
const defaultOptions: RequestInit = {
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    },
};

// Generic API call function
async function apiCall<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<{ success: boolean; data?: T; error?: string; status: number }> {
    try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            ...defaultOptions,
            ...options,
        });

        const data = await response.json();

        return {
            success: response.ok,
            data: response.ok ? data : undefined,
            error: !response.ok ? data.message || 'Request failed' : undefined,
            status: response.status,
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Network error',
            status: 0,
        };
    }
}

// Authentication API
export const authApi = {
    verifyToken: () => apiCall<VerifyTokenResponse>('/verify-token'),
    
    logout: () => apiCall('/logout', { method: 'POST' }),
};

// Projects API
export const projectsApi = {
    getProjects: () => apiCall<GetProjectsResponse>('/get_projects'),
    
    createProject: (data: CreateProjectRequest) =>
        apiCall<CreateProjectResponse>('/new_project', {
            method: 'POST',
            body: JSON.stringify(data),
        }),
    
    getProject: (id: string) =>
        apiCall<GetProjectResponse>(`/projects/get/${id}`),
    
    addTextContext: (projectId: string, data: AddContextRequest) =>
        apiCall<AddContextResponse>(`/projects/${projectId}/context/text`, {
            method: 'POST',
            body: JSON.stringify(data),
        }),
    
    chatWithProject: (projectId: string, data: ChatRequest) =>
        apiCall<ChatResponse>(`/projects/chat/${projectId}`, {
            method: 'POST',
            body: JSON.stringify(data),
        }),
    
    updateProject: (projectId: string, data: Partial<CreateProjectRequest>) =>
        apiCall(`/projects/update/${projectId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        }),
    
    deleteProject: (projectId: string) =>
        apiCall(`/projects/delete/${projectId}`, {
            method: 'DELETE',
        }),
};

// Export all APIs
export const api = {
    auth: authApi,
    projects: projectsApi,
};
