import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';
import AISidebar from '../components/AISidebar/AISidebar';
import styles from '../dashboard.module.css';
import { useAuthGuard, useLogout, useAISidebar } from '../../../hooks';
import { useAISidebarWidth } from '../../../stores/AISidebar';
import { SearchProvider, useSearch } from '../../../contexts/SearchContext';

function DashboardHeader({ 
    setSidebarOpen, 
    aiSidebarOpen, 
    toggleAISidebar,
    isTextEditorPage 
}: {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    aiSidebarOpen: boolean;
    toggleAISidebar: () => void;
    isTextEditorPage: boolean;
}) {
    const { query, setQuery } = useSearch();

    if (isTextEditorPage) {
        return null;
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <button
                    className={styles.menuButton}
                    onClick={() => setSidebarOpen(true)}
                >
                    ☰
                </button>

                {/* Search bar in header */}
                <div className={styles.headerSearchRow}>
                    <input
                        className={styles.headerSearchInput}
                        type="search"
                        placeholder="Search projects"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className={styles.headerActions}>
                    <button
                        className={`${styles.aiButton} ${aiSidebarOpen ? styles.aiButtonActive : ''}`}
                        onClick={toggleAISidebar}
                        title="Toggle AI Assistant"
                    >
                        AI Assistant
                    </button>
                </div>
            </div>
        </header>
    );
}

export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const location = useLocation();

    // Route protection
    const { user, isLoading } = useAuthGuard();
    const handleLogout = useLogout();

    // Check if we're on the text editor page
    const isTextEditorPage = location.pathname.includes('/docs/');

    // Listen for custom sidebar toggle events from text editor
    useEffect(() => {
        const handleToggleSidebar = () => {
            setSidebarOpen(true);
        };

        window.addEventListener('toggleSidebar', handleToggleSidebar);
        return () => window.removeEventListener('toggleSidebar', handleToggleSidebar);
    }, []);

    // AI Sidebar state
    const {
        isOpen: aiSidebarOpen,
        toggleSidebar: toggleAISidebar,
        handleResize: handleAISidebarResize,
    } = useAISidebar();
    
    // Get AI sidebar width from store
    const aiSidebarWidth = useAISidebarWidth();

    // Show sidebar by default on desktop
    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth >= 1024) {
                setSidebarOpen(true);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Check if we're on mobile to handle AI sidebar behavior
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            const desktop = window.innerWidth >= 1024;
            setIsMobile(mobile);
            setIsDesktop(desktop);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loadingSpinner}></div>
                <p className={styles.loadingText}>Verifying authentication...</p>
            </div>
        );
    }

    if (!user) return null;

    return (
        <SearchProvider>
            <div 
                className={styles.dashboardLayout}
                style={{
                    paddingLeft: isDesktop 
                        ? (sidebarCollapsed ? '70px' : '280px') 
                        : '0px',
                    transition: 'padding-left 0.3s ease-in-out'
                }}
            >
                <Sidebar
                    isOpen={sidebarOpen}
                    isCollapsed={sidebarCollapsed}
                    onClose={() => setSidebarOpen(false)}
                    onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
                    onLogout={handleLogout}
                    user={user}
                />

                <div 
                    className={`${styles.mainContent} ${aiSidebarOpen ? styles.mainContentWithAI : ''}`}
                    style={{
                        marginRight: aiSidebarOpen && !isMobile ? `${aiSidebarWidth}px` : '0px',
                        transition: 'margin-right 0.3s ease'
                    }}
                >
                    <DashboardHeader
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                        aiSidebarOpen={aiSidebarOpen}
                        toggleAISidebar={toggleAISidebar}
                        isTextEditorPage={isTextEditorPage}
                    />

                    <main className={`${styles.main} ${isTextEditorPage ? styles.mainFullHeight : ''}`}>
                        <Outlet />
                    </main>
                </div>

                <AISidebar
                    isOpen={aiSidebarOpen}
                    onToggle={toggleAISidebar}
                    onResize={handleAISidebarResize}
                />
            </div>
        </SearchProvider>
    );
}
