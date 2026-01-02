import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { api } from '../services';
import type { Project, CreateProjectRequest } from '../types';

interface ProjectsState {
    projects: Project[];
    isLoading: boolean;
    error: string | null;
    lastFetched: number | null;
    isCreating: boolean;
}

interface ProjectsActions {
    // State setters
    setProjects: (projects: Project[]) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
    setCreating: (isCreating: boolean) => void;
    
    // Actions
    fetchProjects: (force?: boolean) => Promise<void>;
    createProject: (projectData: CreateProjectRequest) => Promise<Project | null>;
    addProject: (project: Project) => void;
    updateProject: (id: string, updates: Partial<Project>) => void;
    removeProject: (id: string) => void;
    reset: () => void;
}

type ProjectsStore = ProjectsState & ProjectsActions;

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const initialState: ProjectsState = {
    projects: [],
    isLoading: false,
    error: null,
    lastFetched: null,
    isCreating: false,
};

export const useProjectsStore = create<ProjectsStore>()(
    devtools(
        (set, get) => ({
            ...initialState,

            // State setters
            setProjects: (projects) =>
                set(
                    { 
                        projects: [...projects].sort((a, b) => 
                            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
                        ),
                        lastFetched: Date.now()
                    },
                    false,
                    'projects/setProjects'
                ),

            setLoading: (isLoading) =>
                set({ isLoading }, false, 'projects/setLoading'),

            setError: (error) =>
                set({ error }, false, 'projects/setError'),

            setCreating: (isCreating) =>
                set({ isCreating }, false, 'projects/setCreating'),

            // Actions
            fetchProjects: async (force = false) => {
                const { lastFetched, isLoading, setLoading, setError, setProjects } = get();
                
                // Check if we need to fetch (cache is expired or force refresh)
                const now = Date.now();
                const cacheExpired = !lastFetched || (now - lastFetched) > CACHE_DURATION;
                
                if (!force && !cacheExpired && !isLoading) {
                    return; // Use cached data
                }
                
                if (isLoading) {
                    return; // Already loading
                }

                setLoading(true);
                setError(null);

                try {
                    const result = await api.projects.getProjects();
                    
                    if (result.success && result.data?.projects) {
                        setProjects(result.data.projects);
                    } else {
                        setError(result.error || 'Failed to load projects');
                    }
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : 'Failed to load projects';
                    setError(errorMessage);
                } finally {
                    setLoading(false);
                }
            },

            createProject: async (projectData) => {
                const { setCreating, setError, addProject } = get();
                
                setCreating(true);
                setError(null);

                try {
                    const result = await api.projects.createProject(projectData);
                    
                    if (result.success && result.data?.project) {
                        addProject(result.data.project);
                        return result.data.project;
                    } else {
                        setError(result.error || 'Failed to create project');
                        return null;
                    }
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : 'Failed to create project';
                    setError(errorMessage);
                    return null;
                } finally {
                    setCreating(false);
                }
            },

            addProject: (project) =>
                set(
                    (state) => ({
                        projects: [project, ...state.projects].sort((a, b) => 
                            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
                        )
                    }),
                    false,
                    'projects/addProject'
                ),

            updateProject: (id, updates) =>
                set(
                    (state) => ({
                        projects: state.projects.map(project =>
                            project.id === id 
                                ? { ...project, ...updates, updated_at: new Date().toISOString() }
                                : project
                        ).sort((a, b) => 
                            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
                        )
                    }),
                    false,
                    'projects/updateProject'
                ),

            removeProject: (id) =>
                set(
                    (state) => ({
                        projects: state.projects.filter(project => project.id !== id)
                    }),
                    false,
                    'projects/removeProject'
                ),

            reset: () =>
                set(initialState, false, 'projects/reset'),
        }),
        {
            name: 'projects-store',
        }
    )
);

// Selectors for easy access to specific state slices
export const useProjects = () => useProjectsStore((state) => state.projects);
export const useProjectsLoading = () => useProjectsStore((state) => state.isLoading);
export const useProjectsError = () => useProjectsStore((state) => state.error);
export const useProjectsCreating = () => useProjectsStore((state) => state.isCreating);

// Action selectors
export const useProjectsActions = () => useProjectsStore((state) => ({
    fetchProjects: state.fetchProjects,
    createProject: state.createProject,
    addProject: state.addProject,
    updateProject: state.updateProject,
    removeProject: state.removeProject,
    setError: state.setError,
    reset: state.reset,
}));
