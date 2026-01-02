export interface Project {
    id: string;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
    user_id: number;
}

export interface CreateProjectRequest {
    title: string;
    description: string;
}

export interface CreateProjectResponse {
    success: boolean;
    project?: Project;
    message?: string;
}

export interface GetProjectsResponse {
    success: boolean;
    projects: Project[];
    message?: string;
}

export interface GetProjectResponse {
    success: boolean;
    project?: Project;
    message?: string;
}

export interface AddContextRequest {
    text: string;
}

export interface AddContextResponse {
    success: boolean;
    message?: string;
}

export interface ChatRequest {
    message: string;
}

export interface ChatResponse {
    success: boolean;
    response?: string;
    message?: string;
}

export interface ApiTestResult {
    status: number;
    data: any;
    success: boolean;
}
