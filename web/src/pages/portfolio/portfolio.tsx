import "./portfolio.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"
import { Link } from "react-router-dom"

export default function PortfolioPage() {
    return <>
        <Navbar />
        <div className="portfolio-page">
            {/* Hero */}
            <div className="portfolio-hero">
                <p className="portfolio-label">Portfolio</p>
                <h1>Studio Companies</h1>
                <p>We partner with ambitious young founders to build microSaaS products. Here's what we're working on.</p>
            </div>

            {/* Portfolio Grid */}
            <div className="portfolio-section">
                <div className="portfolio-grid">
                    {/* Active Project */}
                    <div className="portfolio-card active">
                        <div className="card-status active">
                            <span className="status-dot"></span>
                            Sprint 1 — Active
                        </div>
                        <h3>Non-Profit CRM</h3>
                        <div className="card-type">B2B SaaS</div>
                        <p>A streamlined CRM designed specifically for small non-profits. Helping organizations manage donors, track donations, and grow their impact without enterprise complexity.</p>
                        <div className="card-meta">
                            <span className="meta-tag">React</span>
                            <span className="meta-tag">Node.js</span>
                            <span className="meta-tag">PostgreSQL</span>
                        </div>
                        <div className="card-footer">
                            <div className="sprint-info">
                                <strong>Week 1 of 12</strong> — Building MVP
                            </div>
                        </div>
                    </div>

                    {/* Coming Soon */}
                    <div className="portfolio-card coming-soon">
                        <div className="card-status upcoming">
                            <span className="status-dot"></span>
                            Sprint 2 — Upcoming
                        </div>
                        <h3>Your Project?</h3>
                        <div className="card-type">Applications Open</div>
                        <p>We're accepting applications for our next sprint starting in 2 weeks. If you have a microSaaS idea and the drive to build, we want to hear from you.</p>
                        <div className="card-footer">
                            <div className="sprint-info">
                                <strong>Starts Jan 16, 2026</strong>
                            </div>
                            <Link to="/contact" className="card-link">
                                Apply Now
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Future Slot */}
                    <div className="portfolio-card coming-soon">
                        <div className="card-status upcoming">
                            <span className="status-dot"></span>
                            Sprint 3 — Upcoming
                        </div>
                        <h3>Future Venture</h3>
                        <div className="card-type">TBD</div>
                        <p>Every 2 weeks we kick off a new sprint with a new founder. Join our waitlist to be notified when applications open for future cohorts.</p>
                        <div className="card-footer">
                            <div className="sprint-info">
                                <strong>Starts Jan 30, 2026</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sprint Timeline */}
            <div className="sprint-section">
                <h2>Our Sprint Model</h2>
                <p>12-week intensive builds, launching every 2 weeks</p>
                
                <div className="sprint-timeline">
                    <div className="sprint-item">
                        <div className="sprint-marker">
                            <div className="sprint-dot active"></div>
                            <div className="sprint-line"></div>
                        </div>
                        <div className="sprint-content">
                            <h4>Weeks 1-4: Discovery & MVP</h4>
                            <p>Validate the idea, define scope, and build a working prototype</p>
                        </div>
                    </div>
                    <div className="sprint-item">
                        <div className="sprint-marker">
                            <div className="sprint-dot"></div>
                            <div className="sprint-line"></div>
                        </div>
                        <div className="sprint-content">
                            <h4>Weeks 5-8: Launch & First Customers</h4>
                            <p>Ship the product, acquire early users, iterate on feedback</p>
                        </div>
                    </div>
                    <div className="sprint-item">
                        <div className="sprint-marker">
                            <div className="sprint-dot"></div>
                            <div className="sprint-line"></div>
                        </div>
                        <div className="sprint-content">
                            <h4>Weeks 9-12: Growth & Revenue</h4>
                            <p>Scale acquisition, optimize conversion, reach sustainable MRR</p>
                        </div>
                    </div>
                    <div className="sprint-item">
                        <div className="sprint-marker">
                            <div className="sprint-dot"></div>
                        </div>
                        <div className="sprint-content">
                            <h4>Ongoing: Support & Network</h4>
                            <p>Continued mentorship and access to the Foundry community</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Investor CTA */}
            <div className="investor-cta">
                <h2>Interested in our portfolio?</h2>
                <p>We're always open to connecting with investors who believe in backing the next generation of founders. Let's talk.</p>
                <Link to="/contact">
                    Get in Touch
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
