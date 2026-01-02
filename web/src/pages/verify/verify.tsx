import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utils/baseUrl';
import styles from './verify.module.css';

export default function VerifyEmailPage() {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get('token');
        
        if (!token) {
            setStatus('error');
            setMessage('Invalid verification link. No token provided.');
            return;
        }

        const verifyEmail = async () => {
            try {
                const response = await fetch(`${baseUrl}/verify-email?token=${token}`, {
                    method: 'GET',
                    credentials: 'include', // Include cookies for auto-login
                });

                if (response.ok) {
                    setStatus('success');
                    setMessage('Email verified successfully! You are now logged in.');
                    // Auto-redirect to dashboard after 3 seconds
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 3000);
                } else {
                    const data = await response.json();
                    setStatus('error');
                    setMessage(data.message || 'Verification failed. The link may be expired or invalid.');
                }
            } catch (error) {
                setStatus('error');
                setMessage('Network error occurred during verification. Please try again.');
            }
        };

        verifyEmail();
    }, [searchParams, navigate]);

    const handleGoToDashboard = () => {
        navigate('/dashboard');
    };

    const handleGoToLogin = () => {
        navigate('/login');
    };

    return (
        <div className={styles.verifyPage}>
            <div className={styles.verifyContainer}>
                <div className={styles.iconContainer}>
                    {status === 'loading' && (
                        <div className={styles.spinner}></div>
                    )}
                    {status === 'success' && (
                        <div className={styles.successIcon}>✓</div>
                    )}
                    {status === 'error' && (
                        <div className={styles.errorIcon}>✗</div>
                    )}
                </div>

                <h1 className={styles.title}>
                    {status === 'loading' && 'Verifying Your Email...'}
                    {status === 'success' && 'Email Verified!'}
                    {status === 'error' && 'Verification Failed'}
                </h1>

                <p className={styles.message}>{message}</p>

                {status === 'success' && (
                    <div className={styles.actions}>
                        <button onClick={handleGoToDashboard} className={styles.primaryButton}>
                            Go to Dashboard
                        </button>
                        <p className={styles.autoRedirect}>
                            You will be automatically redirected in a few seconds...
                        </p>
                    </div>
                )}

                {status === 'error' && (
                    <div className={styles.actions}>
                        <button onClick={handleGoToLogin} className={styles.primaryButton}>
                            Back to Login
                        </button>
                        <p className={styles.helpText}>
                            Need help? Contact support or try signing up again.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
