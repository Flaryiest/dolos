import "./navbar.css"
import {Link} from "react-router-dom"
import { useState, useEffect, useRef } from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);
    const featuresRef = useRef<HTMLLIElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleFeatures = () => {
        setIsFeaturesOpen(!isFeaturesOpen);
    };

    const closeFeaturesDropdown = () => {
        setIsFeaturesOpen(false);
    };

    const toggleMobileFeatures = () => {
        setIsMobileFeaturesOpen(!isMobileFeaturesOpen);
    };

    // Close features dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
                setIsFeaturesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="navbar-container">
                <nav className="navbar">
                    <h1 className="navbar-title"><Link to="/" className="navbar-logo-container">
                    <img src="/logo.png" alt="Mythea Logo" className="navbar-logo" />
                    <p>Mythea</p></Link></h1>

                    {/* Desktop Navigation */}
                    <ul className="navbar-links desktop-only">
                        <li><Link to="/pricing" className="navbar-link">Pricing</Link></li>
                        <li className="navbar-dropdown" ref={featuresRef}>
                            <button 
                                className="navbar-link features-trigger" 
                                onClick={toggleFeatures}
                            >
                                Features 
                                <span className={`dropdown-arrow ${isFeaturesOpen ? 'open' : ''}`}>▼</span>
                            </button>
                            {isFeaturesOpen && (
                                <div className="features-dropdown">
                                    <Link 
                                        to="/features/research" 
                                        className="dropdown-item" 
                                        onClick={closeFeaturesDropdown}
                                    >
                                        Research Assistant
                                    </Link>
                                    <Link 
                                        to="/features/slideshow" 
                                        className="dropdown-item" 
                                        onClick={closeFeaturesDropdown}
                                    >
                                        Slideshow Creator
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>
                    <div className="navbar-actions desktop-only">
                        {/* <Link to="/login" className="navbar-action navbar-login">Login</Link>
                        <Link to="/signup" className="navbar-action navbar-signup">Sign Up</Link> */}
                        <Link to="/waitlist" className="navbar-action navbar-signup">Join Waitlist</Link>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button className="hamburger-button mobile-only" onClick={toggleMenu}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="mobile-menu-overlay" onClick={closeMenu}>
                    <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
                        {/* Navigation Links */}
                        <nav className="mobile-nav">

                            <Link to="/pricing" className="mobile-nav-link" onClick={closeMenu}>Pricing</Link>
                            
                            {/* Features Section */}
                            <div className="mobile-nav-section">
                                <button 
                                    className="mobile-nav-section-title mobile-features-toggle" 
                                    onClick={toggleMobileFeatures}
                                >
                                    Features
                                    <span className={`mobile-dropdown-arrow ${isMobileFeaturesOpen ? 'open' : ''}`}>▼</span>
                                </button>
                                {isMobileFeaturesOpen && (
                                    <div className="mobile-features-dropdown">
                                        <Link to="/features/research" className="mobile-nav-link mobile-feature-link" onClick={closeMenu}>Research Assistant</Link>
                                        <Link to="/features/slideshow" className="mobile-nav-link mobile-feature-link" onClick={closeMenu}>Slideshow Creator</Link>
                                    </div>
                                )}
                            </div>
                            

                            {/* Actions */}
                            <div className="mobile-nav-actions">
                                {/* <Link to="/login" className="mobile-nav-action mobile-login" onClick={closeMenu}>Login</Link>
                                <Link to="/signup" className="mobile-nav-action mobile-signup" onClick={closeMenu}>Sign Up</Link> */}
                                <Link to="/waitlist" className="mobile-nav-action mobile-signup" onClick={closeMenu}>Join Waitlist</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}