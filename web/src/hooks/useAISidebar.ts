import { useState, useCallback } from 'react';
import { useAISidebarStore } from '../stores/AISidebar';

/**
 * Custom hook for managing AI Sidebar state and interactions
 * Provides a clean interface for components to interact with the AI Sidebar
 */
export const useAISidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { messages, isLoading, width } = useAISidebarStore();

    const toggleSidebar = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const openSidebar = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeSidebar = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleResize = useCallback((newWidth: number) => {
        // You can add additional logic here if needed
        console.log('AI Sidebar resized to:', newWidth);
    }, []);

    return {
        // State
        isOpen,
        hasMessages: messages.length > 0,
        messageCount: messages.length,
        isLoading,
        width,
        
        // Actions
        toggleSidebar,
        openSidebar,
        closeSidebar,
        handleResize,
    };
};
