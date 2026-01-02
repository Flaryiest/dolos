import { useEffect } from 'react';
import styles from './dashboard.module.css';
import { useAuthGuard, useAISidebar, useFilteredProjects } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { 
    useProjectsLoading, 
    useProjectsError, 
    useProjectsCreating,
    useProjectsStore
} from '../../stores';
import { useSearch } from '../../contexts/SearchContext';

export default function DashboardPage() {
    const navigate = useNavigate();
    const { user, isLoading } = useAuthGuard();
    const { isOpen: aiSidebarOpen } = useAISidebar();

    // Projects store
    const loadingProjects = useProjectsLoading();
    const error = useProjectsError();
    const creating = useProjectsCreating();

    // Get search query from context (managed by header)
    const { query } = useSearch();
    
    // Get filtered projects
    const filtered = useFilteredProjects(query);

    // Load projects on mount
    useEffect(() => {
        useProjectsStore.getState().fetchProjects();
    }, []);

    const formatDate = (iso?: string) => {
        if (!iso) return '';
        const d = new Date(iso);
        if (isNaN(d.getTime())) return '';
        return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const openProject = (id: string) => {
        // Navigate to the editor for now
        navigate(`/dashboard/docs/${id}`);
    };

    const createBlank = async () => {
        if (creating) return;
        useProjectsStore.getState().setError(null); // Clear any previous errors
        const project = await useProjectsStore.getState().createProject({ title: 'Untitled project', description: '' });
        if (project) {
            openProject(project.id);
        }
    };

    const createResearchPaper = async () => {
        if (creating) return;
        useProjectsStore.getState().setError(null);
        const project = await useProjectsStore.getState().createProject({ 
            title: 'Research Paper', 
            description: 'Academic research paper with proper formatting and citations' 
        });
        if (project) {
            openProject(project.id);
        }
    };

    const createEssay = async () => {
        if (creating) return;
        useProjectsStore.getState().setError(null);
        const project = await useProjectsStore.getState().createProject({ 
            title: 'Essay', 
            description: 'Structured essay with introduction, body, and conclusion' 
        });
        if (project) {
            openProject(project.id);
        }
    };

    const createSlideshow = async () => {
        if (creating) return;
        useProjectsStore.getState().setError(null);
        const project = await useProjectsStore.getState().createProject({ 
            title: 'Presentation', 
            description: 'Interactive slideshow presentation' 
        });
        if (project) {
            openProject(project.id);
        }
    };



    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loadingSpinner}></div>
                <p className={styles.loadingText}>Verifying authentication...</p>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className={`${styles.docsLikeContainer} ${aiSidebarOpen ? styles.withAISidebar : ''}`}>
            {/* Template gallery */}
            <div className={styles.templatesRow}>
                <div className={styles.templatesHeader}>
                    <span>Start a new project</span>
                    <button
                        className={styles.templateGalleryBtn}
                        onClick={createBlank}
                        disabled={creating}
                    >
                        Upload
                    </button>
                </div>
                <div className={styles.templateGrid}>
                    <button className={styles.templateCard} onClick={createBlank} disabled={creating}>
                        <div className={styles.templateThumb}>＋</div>
                        <div className={styles.templateTitle}>Blank project</div>
                    </button>
                    <button className={styles.templateCard} onClick={createResearchPaper} disabled={creating}>
                        <div className={styles.templateThumb}>📄</div>
                        <div className={styles.templateTitle}>Research Paper</div>
                    </button>
                    <button className={styles.templateCard} onClick={createEssay} disabled={creating}>
                        <div className={styles.templateThumb}>📝</div>
                        <div className={styles.templateTitle}>Essay</div>
                    </button>
                    <button className={styles.templateCard} onClick={createSlideshow} disabled={creating}>
                        <div className={styles.templateThumb}>📊</div>
                        <div className={styles.templateTitle}>Slideshow</div>
                    </button>
                </div>
            </div>

            {/* Recent projects */}
            <div className={styles.recentRow}>
                <div className={styles.recentHeader}>
                    <span>Recent projects</span>
                    {/* Sorting or filters could go here */}
                </div>

                {error && <div className={styles.errorBox}>{error}</div>}

                {loadingProjects ? (
                    <div className={styles.gridSkeleton}>
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div className={styles.projectCardSkeleton} key={i} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.projectGrid}>
                        {filtered.map((p) => (
                            <button key={p.id} className={styles.projectCard} onClick={() => openProject(p.id)}>
                                <div className={styles.projectThumb}>
                                    <div className={styles.projectDocContent}></div>
                                </div>
                                <div className={styles.projectMeta}>
                                    <div className={styles.projectTitle} title={p.title}>{p.title || 'Untitled project'}</div>
                                    <div className={styles.projectSub}>Opened {formatDate(p.updated_at)}</div>
                                </div>
                            </button>
                        ))}
                        {filtered.length === 0 && (
                            <div className={styles.emptyState}>No projects found</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
