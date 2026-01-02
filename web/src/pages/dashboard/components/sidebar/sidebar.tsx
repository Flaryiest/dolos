import { Link, useLocation } from 'react-router-dom';
import styles from './sidebar.module.css';
import type { SidebarProps } from '../../../../types';

export default function Sidebar({ isOpen, isCollapsed, onClose, onToggleCollapse, onLogout, user }: SidebarProps) {
    const location = useLocation();

    const menuItems = [
        { 
            path: '/dashboard', 
            label: 'Dashboard', 
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
            )
        },
        { 
            path: '/dashboard/editor', 
            label: 'Editor', 
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
            )
        },
        { 
            path: '/dashboard/storage', 
            label: 'Storage', 
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                </svg>
            )
        },
        { 
            path: '/dashboard/settings', 
            label: 'Settings', 
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6"/>
                    <path d="m21 12-6 0m-6 0-6 0"/>
                    <path d="m16.24 7.76-4.24 4.24m-4.24 4.24-4.24-4.24"/>
                    <path d="m7.76 16.24 4.24-4.24m4.24-4.24 4.24 4.24"/>
                </svg>
            )
        },
    ];

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && <div className={styles.overlay} onClick={onClose} />}
            
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''} ${isCollapsed ? styles.collapsed : ''}`}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.logo}>
                        {!isCollapsed && <img src="/logo.png" alt="Mythea Logo" className={`navbar-logo ${styles.sidebarLogo}`} />}
                        {!isCollapsed && <span className={styles.logoText}>Mythea</span>}
                    </div>
                    <div className={styles.headerButtons}>
                        <button 
                            className={styles.collapseButton} 
                            onClick={onToggleCollapse}
                            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <line x1="15" x2="15" y1="3" y2="21"/>
                            </svg>
                        </button>
                        <button className={styles.closeButton} onClick={onClose}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" x2="6" y1="6" y2="18"/>
                                <line x1="6" x2="18" y1="6" y2="18"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* User Info */}
                <div className={styles.userInfo}>
                    <div className={styles.userAvatar}>
                        {user.email.charAt(0).toUpperCase()}
                    </div>
                    {!isCollapsed && (
                        <div className={styles.userDetails}>
                            <div className={styles.userEmail}>{user.email}</div>
                            <div className={styles.userPlan}>{user.access} Plan</div>
                        </div>
                    )}
                </div>

                {/* Usage Bar */}
                {!isCollapsed && (
                    <div className={styles.usageSection}>
                        <div className={styles.usageLabel}>
                            Usage: {user.usage} / {user.limit}
                        </div>
                        <div className={styles.usageBar}>
                            <div 
                                className={styles.usageProgress}
                                style={{ width: `${(user.usage / user.limit) * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* Navigation Menu */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`${styles.navItem} ${
                                        location.pathname === item.path ? styles.active : ''
                                    }`}
                                    onClick={onClose}
                                    title={isCollapsed ? item.label : undefined}
                                >
                                    <span className={styles.navIcon}>{item.icon}</span>
                                    {!isCollapsed && <span className={styles.navLabel}>{item.label}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer */}
                <div className={styles.footer}>
                    <button 
                        className={styles.logoutButton} 
                        onClick={onLogout}
                        title={isCollapsed ? "Logout" : undefined}
                    >
                        <span className={styles.navIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                <polyline points="16,17 21,12 16,7"/>
                                <line x1="21" x2="9" y1="12" y2="12"/>
                            </svg>
                        </span>
                        {!isCollapsed && <span>Logout</span>}
                    </button>
                </div>
            </div>
        </>
    );
}
