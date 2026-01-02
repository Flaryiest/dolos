import "./signup.css"
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/baseUrl";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        country: 'United States'
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        general: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isIncludedOpen, setIsIncludedOpen] = useState(false);
    const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
    const [registeredEmail, setRegisteredEmail] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const countries = [
        'United States',
        'Canada', 
        'United Kingdom',
        'Australia',
        'Germany',
        'France',
        'Japan',
        'Brazil',
        'India',
        'Netherlands',
        'Sweden',
        'Norway',
        'Denmark',
        'Switzerland',
        'Other'
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleCountrySelect = (country: string) => {
        setFormData(prev => ({ ...prev, country }));
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleIncluded = () => {
        setIsIncludedOpen(!isIncludedOpen);
    };

    const validateForm = () => {
        const newErrors = { email: '', password: '', firstName: '', lastName: '', general: '' };
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
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            isValid = false;
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
            isValid = false;
        }

        // First name validation
        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        } else if (formData.firstName.length < 2) {
            newErrors.firstName = 'First name must be at least 2 characters';
            isValid = false;
        }

        // Last name validation
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
            isValid = false;
        } else if (formData.lastName.length < 2) {
            newErrors.lastName = 'Last name must be at least 2 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setErrors({ email: '', password: '', firstName: '', lastName: '', general: '' });

        try {
            const response = await fetch(`${baseUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    fullName: `${formData.firstName} ${formData.lastName}`.trim(),
                    country: formData.country
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Registration successful, show completion screen
                setRegisteredEmail(formData.email);
                setIsRegistrationComplete(true);
            } else {
                if (response.status === 400) {
                    if (data.message?.includes('already registered')) {
                        setErrors(prev => ({ ...prev, email: 'This email is already registered. Try logging in instead.' }));
                    } else if (data.message?.includes('weak password')) {
                        setErrors(prev => ({ ...prev, password: 'Password does not meet requirements' }));
                    } else if (data.message?.includes('invalid email')) {
                        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
                    } else {
                        setErrors(prev => ({ ...prev, general: data.message || 'Registration failed. Please try again.' }));
                    }
                } else {
                    setErrors(prev => ({ ...prev, general: data.message || 'Registration failed. Please try again.' }));
                }
            }
        } catch (error) {
            setErrors(prev => ({ ...prev, general: 'Network error. Please check your connection and try again.' }));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="signup-page">
                <div className="signup-container">
                    {/* Left Side - Hero */}
                    <div className="signup-left">
                        <div className="signup-hero">
                            <div className="hero-content">
                                {!isRegistrationComplete ? (
                                    <>
                                        <h1 className="hero-title">Create your free account</h1>
                                        <p className="hero-description">
                                            Explore Mythea's core features for high school students and educators.
                                        </p>
                                        
                                        {/* See what's included section */}
                                        <div className="included-section">
                                            <button 
                                                className="included-toggle"
                                                onClick={toggleIncluded}
                                                aria-expanded={isIncludedOpen}
                                            >
                                                <span>See what's included</span>
                                                <svg 
                                                    className={`included-arrow ${isIncludedOpen ? 'open' : ''}`}
                                                    width="16" 
                                                    height="16" 
                                                    viewBox="0 0 16 16" 
                                                    fill="none"
                                                >
                                                    <path 
                                                        d="M12 6L8 10L4 6" 
                                                        stroke="currentColor" 
                                                        strokeWidth="2" 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                            
                                            {isIncludedOpen && (
                                                <div className={`included-content ${isIncludedOpen ? 'open' : ''}`}>
                                                    <div className="included-features">
                                                        <div className="feature-item">
                                                            <span className="feature-icon">✓</span>
                                                            <span>Access to core AI learning tools</span>
                                                        </div>
                                                        <div className="feature-item">
                                                            <span className="feature-icon">✓</span>
                                                            <span>Up to 10 assignments per month</span>
                                                        </div>
                                                        <div className="feature-item">
                                                            <span className="feature-icon">✓</span>
                                                            <span>Basic progress tracking</span>
                                                        </div>
                                                        <div className="feature-item">
                                                            <span className="feature-icon">✓</span>
                                                            <span>Community support access</span>
                                                        </div>
                                                        <div className="feature-item">
                                                            <span className="feature-icon">✓</span>
                                                            <span>Mobile app access</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h1 className="hero-title">Check your email</h1>
                                        <p className="hero-description">
                                            We've sent a verification link to complete your registration.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Right Side - Form or Completion */}
                    <div className="signup-right">
                        {!isRegistrationComplete ? (
                            <>
                                <div className="signup-redirect">
                                    <p className="login-link">
                                        Already have an account? <Link to="/login">Sign in →</Link>
                                    </p>
                                </div>
                                <div className="signup-form-section">
                                    <div className="form-container">
                                        <div className="form-header">
                                            <h2 className="form-title">Sign up to Mythea</h2>
                                        </div>
                                        
                                        {errors.general && (
                                            <div className="general-error">
                                                {errors.general}
                                            </div>
                                        )}
                                        
                                        <form onSubmit={handleSubmit} className="signup-form">
                                            {/* Email Field */}
                                            <div className="form-group">
                                                <label htmlFor="email" className="form-label">
                                                    Email <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className={`form-input ${errors.email ? 'error' : ''}`}
                                                    placeholder="Enter your email"
                                                    disabled={isLoading}
                                                />
                                                {errors.email && <span className="error-message">{errors.email}</span>}
                                            </div>

                                            {/* Password Field */}
                                            <div className="form-group">
                                                <label htmlFor="password" className="form-label">
                                                    Password <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleInputChange}
                                                    className={`form-input ${errors.password ? 'error' : ''}`}
                                                    placeholder="Create a password"
                                                    disabled={isLoading}
                                                />
                                                <p className="password-hint">
                                                    Password should be at least 8 characters including a number and a lowercase letter
                                                </p>
                                                {errors.password && <span className="error-message">{errors.password}</span>}
                                            </div>

                                            {/* First Name Field */}
                                            <div className="form-group">
                                                <label htmlFor="firstName" className="form-label">
                                                    First Name <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className={`form-input ${errors.firstName ? 'error' : ''}`}
                                                    placeholder="Enter your first name"
                                                    disabled={isLoading}
                                                />
                                                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                            </div>

                                            {/* Last Name Field */}
                                            <div className="form-group">
                                                <label htmlFor="lastName" className="form-label">
                                                    Last Name <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className={`form-input ${errors.lastName ? 'error' : ''}`}
                                                    placeholder="Enter your last name"
                                                    disabled={isLoading}
                                                />
                                                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                                            </div>

                                            {/* Country Field */}
                                            <div className="form-group">
                                                <label htmlFor="country" className="form-label">
                                                    Your Country/Region <span className="required">*</span>
                                                </label>
                                                <div className="custom-dropdown" ref={dropdownRef}>
                                                    <button
                                                        type="button"
                                                        className="dropdown-trigger"
                                                        onClick={toggleDropdown}
                                                        aria-expanded={isDropdownOpen}
                                                    >
                                                        <span className="dropdown-value">{formData.country}</span>
                                                        <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                                                            ▼
                                                        </span>
                                                    </button>
                                                    {isDropdownOpen && (
                                                        <div className="dropdown-menu">
                                                            {countries.map((country) => (
                                                                <button
                                                                    key={country}
                                                                    type="button"
                                                                    className={`dropdown-option ${formData.country === country ? 'selected' : ''}`}
                                                                    onClick={() => handleCountrySelect(country)}
                                                                >
                                                                    {country}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <p className="country-hint">
                                                    For compliance reasons, we're required to collect country information to send you occasional updates and announcements.
                                                </p>
                                            </div>

                                            {/* Submit Button */}
                                            <button type="submit" className="submit-button" disabled={isLoading}>
                                                {isLoading ? 'Creating account...' : 'Create account →'}
                                            </button>

                                            {/* Terms */}
                                            <p className="terms-text">
                                                By creating an account, you agree to the{' '}
                                                <a href="#" className="terms-link">Terms of Service</a>. For more
                                                information about Mythea's privacy practices, see the{' '}
                                                <a href="#" className="terms-link">Mythea Privacy Statement</a>.
                                                We'll occasionally send you account-related emails.
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="signup-form-section">
                                <div className="form-container">
                                    <div className="completion-screen">
                                        <div className="completion-icon">
                                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                <circle cx="32" cy="32" r="32" fill="#22c55e" fillOpacity="0.1"/>
                                                <circle cx="32" cy="32" r="24" fill="#22c55e" fillOpacity="0.2"/>
                                                <path d="M42 24L28 38L22 32" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h2 className="completion-title">Check your email</h2>
                                        <p className="completion-description">
                                            We've sent a verification link to <strong>{registeredEmail}</strong>
                                        </p>
                                        <p className="completion-instructions">
                                            Please check your email and click the verification link to complete your registration and start using Mythea.
                                        </p>
                                        <div className="completion-actions">
                                            <Link to="/login" className="login-button">
                                                Go to Login
                                            </Link>
                                            <button 
                                                onClick={() => {
                                                    setIsRegistrationComplete(false);
                                                    setRegisteredEmail('');
                                                    setFormData({
                                                        email: '',
                                                        password: '',
                                                        firstName: '',
                                                        lastName: '',
                                                        country: 'United States'
                                                    });
                                                }} 
                                                className="back-button"
                                            >
                                                ← Back to form
                                            </button>
                                        </div>
                                        <div className="completion-note">
                                            <p>Didn't receive the email? Check your spam folder or contact support.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}