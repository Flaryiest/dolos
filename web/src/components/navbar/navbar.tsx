import "./navbar.css"
import {Link} from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="navbar-container">
                <nav className="navbar">
                    <h1 className="navbar-title"><Link to="/" className="navbar-logo-container">
                    <img src="/logo.png" alt="." className="navbar-logo" />
                    <p>Foundry</p></Link></h1>

                    {/* Desktop Navigation */}
                    <ul className="navbar-links desktop-only">
                        <li><Link to="/portfolio" className="navbar-link">Portfolio</Link></li>
                        <li><Link to="/careers" className="navbar-link">Careers</Link></li>
                        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
                    </ul>
                    <div className="navbar-actions desktop-only">
                        <Link to="/contact" className="navbar-action navbar-signup">Join Us</Link>
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
                    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <button className="mobile-menu-close" onClick={closeMenu}>×</button>
                        <ul className="mobile-menu-links">
                            <li><Link to="/portfolio" className="mobile-menu-link" onClick={closeMenu}>Portfolio</Link></li>
                            <li><Link to="/careers" className="mobile-menu-link" onClick={closeMenu}>Careers</Link></li>
                            <li><Link to="/contact" className="mobile-menu-link" onClick={closeMenu}>Contact</Link></li>
                        </ul>
                        <div className="mobile-menu-actions">
                            <Link to="/contact" className="mobile-menu-signup" onClick={closeMenu}>Join Us</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}