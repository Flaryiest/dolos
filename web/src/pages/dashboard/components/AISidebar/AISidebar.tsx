import { useState, useRef, useCallback, useEffect } from 'react';
import styles from './AISidebar.module.css';
import { useAISidebarStore } from '../../../../stores/AISidebar';
import type { AISidebarProps, ChatMessage } from '../../../../types/AISidebar';

export default function AISidebar({ isOpen, onToggle, onResize }: AISidebarProps) {
    const {
        messages,
        isLoading,
        width,
        isResizing,
        addMessage,
        setLoading,
        setWidth,
        setResizing,
        clearMessages
    } = useAISidebarStore();

    const [inputValue, setInputValue] = useState('');
    const sidebarRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Safely format timestamps that may be Date or a persisted string/number
    const formatTime = (ts: unknown) => {
        try {
            const d = ts instanceof Date ? ts : new Date(ts as any);
            if (isNaN(d.getTime())) return '';
            return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } catch {
            return '';
        }
    };

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Handle sending messages
    const handleSendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage = {
            id: Date.now().toString(),
            content: inputValue.trim(),
            role: 'user' as const,
            timestamp: new Date()
        };

        addMessage(userMessage);
        setInputValue('');
        setLoading(true);

        try {
            // TODO: Replace with actual AI API call
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const assistantMessage = {
                id: (Date.now() + 1).toString(),
                content: "I'm here to help! This is a placeholder response. Connect me to your AI service to start having real conversations about your research and projects.",
                role: 'assistant' as const,
                timestamp: new Date()
            };

            addMessage(assistantMessage);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = {
                id: (Date.now() + 2).toString(),
                content: "Sorry, I encountered an error. Please try again.",
                role: 'assistant' as const,
                timestamp: new Date()
            };
            addMessage(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Handle resizing
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        setResizing(true);
        e.preventDefault();
    }, [setResizing]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isResizing) return;
        
        const newWidth = window.innerWidth - e.clientX;
        const minWidth = 300;
        const maxWidth = 800;
        
        if (newWidth >= minWidth && newWidth <= maxWidth) {
            setWidth(newWidth);
            onResize?.(newWidth);
        }
    }, [isResizing, onResize, setWidth]);

    const handleMouseUp = useCallback(() => {
        setResizing(false);
    }, [setResizing]);

    // Event listeners for resizing
    useEffect(() => {
        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, handleMouseMove, handleMouseUp]);

    // Suggestion prompts
    const suggestions = [
        {
            id: '1',
            text: "Help me analyze my research data",
            action: () => setInputValue("Help me analyze my research data")
        },
        {
            id: '2',
            text: "Create a summary of my project",
            action: () => setInputValue("Create a summary of my project")
        },
        {
            id: '3',
            text: "Generate presentation ideas",
            action: () => setInputValue("Generate presentation ideas")
        },
        {
            id: '4',
            text: "Explain research methodologies",
            action: () => setInputValue("Explain research methodologies")
        }
    ];

    return (
        <>
            {/* Resize handle */}
            <div
                className={`${styles.resizeHandle} ${!isOpen ? styles.resizeHandleClosed : ''}`}
                style={{ right: width }}
                onMouseDown={handleMouseDown}
            />
            
            {/* AI Sidebar */}
            <div 
                ref={sidebarRef}
                className={`${styles.aiSidebar} ${!isOpen ? styles.closed : ''}`}
                style={{ width }}
            >
                {isOpen && (
                    <>
                        {/* Header */}
                        <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <div className={styles.title}>
                            <span>Chat</span>
                        </div>
                        <div className={styles.headerActions}>
                            <button 
                                className={styles.actionButton}
                                onClick={clearMessages}
                                title="Clear chat"
                                disabled={messages.length === 0}
                            >
                                🗑️
                            </button>
                            <button 
                                className={styles.actionButton}
                                onClick={onToggle}
                                title="Close AI Assistant"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>

                {/* Messages Container */}
                <div className={styles.messagesContainer}>
                    {messages.length === 0 ? (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>💬</div>
                            <h3>Start a conversation</h3>
                            <p>Ask me anything about your research, projects, or need help with analysis.</p>
                            
                            <div className={styles.suggestions}>
                                {suggestions.map((suggestion) => (
                                    <button 
                                        key={suggestion.id}
                                        className={styles.suggestionButton}
                                        onClick={suggestion.action}
                                    >
                                        {suggestion.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.messagesList}>
                            {messages.map((message: ChatMessage) => (
                                <div 
                                    key={message.id}
                                    className={`${styles.message} ${styles[message.role]}`}
                                >
                                    <div className={styles.messageContent}>
                                        {message.content}
                                    </div>
                                    <div className={styles.messageTime}>
                                        {formatTime(message.timestamp)}
                                    </div>
                                </div>
                            ))}
                            
                            {isLoading && (
                                <div className={`${styles.message} ${styles.assistant}`}>
                                    <div className={styles.messageContent}>
                                        <div className={styles.typing}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            <div ref={messagesEndRef} />
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className={styles.inputArea}>
                    <div className={styles.inputContainer}>
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message or command..."
                            className={styles.messageInput}
                            rows={1}
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim() || isLoading}
                            className={styles.sendButton}
                            title="Send message"
                        >
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 11L19 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M12 4L19 11L12 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.inputHint}>Add context (#), extensions (@), commands (/)</div>
                </div>
                    </>
                )}
            </div>
        </>
    );
}
