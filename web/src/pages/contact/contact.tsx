import "./contact.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"
import { Link } from "react-router-dom"

export default function ContactPage() {
    return <>
        <Navbar />
        <div className="contact-page">
            {/* Hero */}
            <div className="contact-hero">
                <div className="contact-hero-content">
                    <p className="contact-label">Contact</p>
                    <h1>Let's build<br />something together</h1>
                    <p className="contact-hero-description">Whether you're a founder with an idea, an investor interested in our portfolio, or just want to connect—we'd love to hear from you.</p>
                </div>
            </div>

            {/* Contact Methods */}
            <div className="contact-methods">
                <div className="contact-method">
                    <div className="contact-method-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <div className="contact-method-content">
                        <h3>General Inquiries</h3>
                        <a href="mailto:hello@foundry.io">hello@foundry.io</a>
                    </div>
                </div>

                <div className="contact-method">
                    <div className="contact-method-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </div>
                    <div className="contact-method-content">
                        <h3>Investor Relations</h3>
                        <a href="mailto:investors@foundry.io">investors@foundry.io</a>
                    </div>
                </div>

                <div className="contact-method">
                    <div className="contact-method-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </div>
                    <div className="contact-method-content">
                        <h3>Twitter / X</h3>
                        <a href="https://twitter.com/foundry_hq" target="_blank" rel="noopener noreferrer">@foundry_hq</a>
                    </div>
                </div>
            </div>

            {/* Who Should Reach Out */}
            <div className="who-section">
                <h2>Who should reach out?</h2>
                <div className="who-list">
                    <div className="who-item">
                        <div className="who-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                        </div>
                        <div className="who-content">
                            <h4>Founders</h4>
                            <p>You're under 20 with a microSaaS idea and the drive to build. You want mentorship, resources, and capital to make it real.</p>
                        </div>
                    </div>
                    <div className="who-item">
                        <div className="who-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                        <div className="who-content">
                            <h4>Investors</h4>
                            <p>You're interested in early-stage microSaaS companies built by ambitious Gen Z founders. We can discuss our portfolio and approach.</p>
                        </div>
                    </div>
                    <div className="who-item">
                        <div className="who-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <div className="who-content">
                            <h4>Partners</h4>
                            <p>You run a tool, platform, or service that could benefit our founders. Let's explore partnership opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="contact-footer-note">
                <p>We typically respond within 24-48 hours.</p>
                <div className="social-inline">
                    <a href="https://twitter.com/foundry_hq" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/company/foundry-hq" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <Footer />
    </>
}
