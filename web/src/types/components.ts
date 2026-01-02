import type { User } from './auth';

export interface SidebarProps {
    isOpen: boolean;
    isCollapsed: boolean;
    onClose: () => void;
    onToggleCollapse: () => void;
    onLogout: () => void;
    user: User;
}

export interface MenuItemProps {
    path: string;
    icon: string;
    label: string;
    isActive?: boolean;
}
