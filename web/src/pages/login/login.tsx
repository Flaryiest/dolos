import styles from "./login.module.css"
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../utils/baseUrl";
import { useGoogleAuth } from "../../hooks/useGoogleAuth";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        general: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const googleButtonRef = useRef<HTMLDivElement>(null);

    const { renderGoogleButton } = useGoogleAuth({
        onSuccess: () => {
            navigate('/dashboard');
        },
        onError: (error: string) => {
            setErrors(prev => ({ ...prev, general: error }));
        }
    });

    useEffect(() => {
        if (googleButtonRef.current) {
            renderGoogleButton(googleButtonRef.current);
        }
    }, [renderGoogleButton]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = { email: '', password: '', general: '' };
        let isValid = true;

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setErrors({ email: '', password: '', general: '' });

        try {
            const response = await fetch(`${baseUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login successful, redirect to dashboard
                navigate('/dashboard');
            } else {
                if (response.status === 401) {
                    setErrors(prev => ({ ...prev, general: 'Invalid email or password' }));
                } else {
                    setErrors(prev => ({ ...prev, general: data.message || 'Login failed. Please try again.' }));
                }
            }
        } catch (error) {
            setErrors(prev => ({ ...prev, general: 'Network error. Please check your connection and try again.' }));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h1 className={styles.loginTitle}>Sign in to Mythea</h1>
                
                {errors.general && (
                    <div className={styles.generalError}>
                        {errors.general}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                            placeholder="Your email address"
                            disabled={isLoading}
                        />
                        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.formLabel}>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className={`${styles.formInput} ${errors.password ? styles.error : ''}`}
                            placeholder="Your password"
                            disabled={isLoading}
                        />
                        {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
                    </div>

                    <button type="submit" className={styles.continueButton} disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Continue'}
                    </button>
                </form>

                <div className={styles.divider}>OR</div>

                <div className={styles.socialButtons}>
                    <div ref={googleButtonRef} className={styles.googleButton}></div>
                </div>

                <p className={styles.signupLink}>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
}