import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { ChatMessage, AISidebarState } from '../types';

interface AISidebarActions {
    addMessage: (message: ChatMessage) => void;
    clearMessages: () => void;
    setLoading: (loading: boolean) => void;
    setWidth: (width: number) => void;
    setResizing: (resizing: boolean) => void;
    updateMessage: (id: string, updates: Partial<ChatMessage>) => void;
}

type AISidebarStore = AISidebarState & AISidebarActions;

const initialState: AISidebarState = {
    messages: [],
    isLoading: false,
    width: 400,
    isResizing: false,
};

export const useAISidebarStore = create<AISidebarStore>()(
    devtools(
        persist(
            (set) => ({
                ...initialState,

                // Actions
                addMessage: (message) =>
                    set(
                        (state) => ({
                            messages: [...state.messages, message],
                        }),
                        false,
                        'ai-sidebar/addMessage'
                    ),

                clearMessages: () =>
                    set(
                        { messages: [] },
                        false,
                        'ai-sidebar/clearMessages'
                    ),

                setLoading: (isLoading) =>
                    set(
                        { isLoading },
                        false,
                        'ai-sidebar/setLoading'
                    ),

                setWidth: (width) =>
                    set(
                        { width },
                        false,
                        'ai-sidebar/setWidth'
                    ),

                setResizing: (isResizing) =>
                    set(
                        { isResizing },
                        false,
                        'ai-sidebar/setResizing'
                    ),

                updateMessage: (id, updates) =>
                    set(
                        (state) => ({
                            messages: state.messages.map((msg) =>
                                msg.id === id ? { ...msg, ...updates } : msg
                            ),
                        }),
                        false,
                        'ai-sidebar/updateMessage'
                    ),
            }),
            {
                name: 'ai-sidebar-storage',
                partialize: (state) => ({
                    messages: state.messages,
                    width: state.width,
                }),
            }
        ),
        {
            name: 'ai-sidebar-store',
        }
    )
);

// Selectors for optimized subscriptions
export const useAISidebarMessages = () => useAISidebarStore((state) => state.messages);
export const useAISidebarLoading = () => useAISidebarStore((state) => state.isLoading);
export const useAISidebarWidth = () => useAISidebarStore((state) => state.width);
export const useAISidebarActions = () => useAISidebarStore((state) => ({
    addMessage: state.addMessage,
    clearMessages: state.clearMessages,
    setLoading: state.setLoading,
    setWidth: state.setWidth,
    setResizing: state.setResizing,
    updateMessage: state.updateMessage,
}));
