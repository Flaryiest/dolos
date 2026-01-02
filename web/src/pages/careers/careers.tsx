import "./careers.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"
import { Link } from "react-router-dom"

export default function CareersPage() {
    return <>
        <Navbar />
        <div className="careers-page">
            {/* Hero */}
            <div className="careers-hero">
                <p className="careers-label">Careers</p>
                <h1>Join our team</h1>
                <p>We're building the infrastructure to help the next generation of founders succeed. Want to be part of it?</p>
            </div>

            {/* Values Section */}
            <div className="values-section">
                <h2>What we value</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                        </div>
                        <h3>Bias for action</h3>
                        <p>We move fast and ship constantly. Perfect is the enemy of good—we iterate in public.</p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                        </div>
                        <h3>Remote-first</h3>
                        <p>Work from anywhere. We're distributed globally and communicate asynchronously.</p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3>Founder empathy</h3>
                        <p>We've been in our founders' shoes. Everything we do is designed to help them succeed.</p>
                    </div>

                    <div className="value-card">
                        <div className="value-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                        </div>
                        <h3>Always learning</h3>
                        <p>We're curious and constantly improving. If you don't know something, figure it out.</p>
                    </div>
                </div>
            </div>

            {/* Open Positions */}
            <div className="positions-section">
                <h2>Open positions</h2>
                <p>We're a small team and hire rarely, but when we do, we look for exceptional people.</p>

                <div className="positions-list">
                    {/* No positions currently */}
                    <div className="no-positions">
                        <h3>No open positions right now</h3>
                        <p>We're not actively hiring at the moment, but we're always interested in meeting talented people. If you think you'd be a great fit, reach out anyway.</p>
                        <a href="mailto:careers@foundry.io">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Send us your intro
                        </a>
                    </div>

                    {/* Example position (commented out - uncomment when hiring)
                    <div className="position-card">
                        <div className="position-info">
                            <h3>Operations Lead</h3>
                            <div className="position-meta">
                                <span>🌍 Remote</span>
                                <span>⏰ Full-time</span>
                            </div>
                        </div>
                        <a href="mailto:careers@foundry.io?subject=Operations Lead Application" className="position-apply">
                            Apply
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                    */}
                </div>
            </div>

            {/* Founder CTA */}
            <div className="founder-cta">
                <h2>Looking to build, not work?</h2>
                <p>If you're under 20 and want to build your own microSaaS company, we might be a better fit as your partner than your employer.</p>
                <Link to="/contact">
                    Apply as a Founder
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </div>
        </div>
        <Footer />
    </>
}
