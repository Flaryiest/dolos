export interface AISidebarProps {
    isOpen: boolean;
    onToggle: () => void;
    onResize?: (width: number) => void;
}

export interface ChatMessage {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
    isLoading?: boolean;
}

export interface AISidebarState {
    messages: ChatMessage[];
    isLoading: boolean;
    width: number;
    isResizing: boolean;
}

export interface SuggestionItem {
    id: string;
    text: string;
    action: () => void;
}
