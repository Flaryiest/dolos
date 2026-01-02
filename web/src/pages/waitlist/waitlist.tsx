import { useState, useEffect, useRef } from 'react';
import styles from './waitlist.module.css';
import { baseUrl } from '../../utils/baseUrl';
import Navbar from '../../components/navbar/navbar';

// Declare global turnstile object
declare global {
    interface Window {
        turnstile: {
            render: (element: string | HTMLElement, options: {
                sitekey: string;
                callback?: (token: string) => void;
                'error-callback'?: () => void;
                'expired-callback'?: () => void;
                theme?: 'light' | 'dark' | 'auto';
                size?: 'normal' | 'compact';
            }) => string;
            reset: (widgetId?: string) => void;
            remove: (widgetId?: string) => void;
        };
    }
}

export default function WaitlistPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState('');
    const turnstileRef = useRef<HTMLDivElement>(null);
    const widgetId = useRef<string>('');

    useEffect(() => {
        // Initialize Turnstile when component mounts
        const initTurnstile = () => {
            if (window.turnstile && turnstileRef.current) {
                widgetId.current = window.turnstile.render(turnstileRef.current, {
                    sitekey: '0x4AAAAAABpfPWRygBpXKkTP',
                    callback: (token: string) => {
                        setTurnstileToken(token);
                    },
                    'error-callback': () => {
                        setError('Verification failed. Please try again.');
                    },
                    'expired-callback': () => {
                        setTurnstileToken('');
                        setError('Verification expired. Please verify again.');
                    },
                    theme: 'light',
                    size: 'normal'
                });
            }
        };

        // Check if Turnstile is already loaded
        if (window.turnstile) {
            initTurnstile();
        } else {
            // Wait for Turnstile to load
            const checkTurnstile = setInterval(() => {
                if (window.turnstile) {
                    clearInterval(checkTurnstile);
                    initTurnstile();
                }
            }, 100);

            return () => clearInterval(checkTurnstile);
        }

        return () => {
            if (window.turnstile && widgetId.current) {
                window.turnstile.remove(widgetId.current);
            }
        };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (error) setError('');
        if (success) setSuccess('');
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email) {
            setError('Email is required');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (!turnstileToken) {
            setError('Please complete the verification');
            return;
        }

        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch(`${baseUrl}/join-waitlist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email, 
                    'cf-turnstile-response': turnstileToken 
                }),
            });

            const responseData = await response.json();
            const message = responseData.message || '';

            if (response.ok) {
                setSuccess(message || 'Successfully added to waitlist! We\'ll keep you updated.');
                setEmail('');
                setTurnstileToken('');
                // Reset Turnstile widget
                if (window.turnstile && widgetId.current) {
                    window.turnstile.reset(widgetId.current);
                }
            } else {
                // Reset Turnstile on error
                if (window.turnstile && widgetId.current) {
                    window.turnstile.reset(widgetId.current);
                }
                setTurnstileToken('');
                
                // Handle different error cases
                if (response.status === 400) {
                    if (message.includes('already registered')) {
                        setError('This email is already registered. Try logging in instead.');
                    } else if (message.includes('already on waitlist')) {
                        setError('This email is already on our waitlist.');
                    } else if (message.includes('Invalid email')) {
                        setError('Please enter a valid email address.');
                    } else {
                        setError(message || 'Invalid email address.');
                    }
                } else {
                    setError(message || 'Something went wrong. Please try again.');
                }
            }
        } catch (err) {
            setError('Network error. Please check your connection and try again.');
            // Reset Turnstile on network error
            if (window.turnstile && widgetId.current) {
                window.turnstile.reset(widgetId.current);
            }
            setTurnstileToken('');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.waitlistPage}>
            <Navbar />
            <div className={styles.waitlistContainer}>
                <div className={styles.waitlistLeft}>
                    <div className={styles.waitlistHero}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>
                                Join the Future of Research
                            </h1>
                            <p className={styles.heroSubtitle}>
                                Get early access to Mythea, the AI-powered research assistant that transforms how you discover, analyze, and synthesize information.
                            </p>
                            <div className={styles.launchInfo}>
                                <h3 className={styles.launchTitle}>Official Launch</h3>
                                <p className={styles.launchDate}>Coming by the end of September 2025</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.waitlistRight}>
                    <div className={styles.formContainer}>
                        <div className={styles.formHeader}>
                            <h2 className={styles.formTitle}>Join Our Waitlist</h2>
                            <p className={styles.formSubtitle}>
                                Be the first to know when Mythea launches and get priority access to the platform.
                            </p>
                        </div>

                        {success ? (
                            <div className={styles.successMessage}>
                                {success}
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.waitlistForm}>
                                                            <div className={styles.formGroup}>
                                    <div ref={turnstileRef} className={styles.turnstileWidget}></div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.formLabel}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange}
                                        className={`${styles.formInput} ${error ? styles.error : ''}`}
                                        placeholder="Enter your email address"
                                        disabled={isLoading}
                                    />
                                    {error && <p className={styles.errorMessage}>{error}</p>}
                                </div>



                                <button 
                                    type="submit" 
                                    className={styles.joinButton}
                                    disabled={isLoading || !turnstileToken}
                                >
                                    {isLoading ? 'Joining...' : 'Join Waitlist'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}