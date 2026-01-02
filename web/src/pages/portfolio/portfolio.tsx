import "./portfolio.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"
import { Link } from "react-router-dom"

export default function PortfolioPage() {
    const projects = [
        {
            name: "GiveCRM",
            tagline: "Donor management for small non-profits",
            url: "https://givecrm.io",
            status: "active"
        },
        {
            name: "Stackwise",
            tagline: "AI-powered tech stack recommendations",
            url: "https://stackwise.dev",
            status: "active"
        },
        {
            name: "InvoiceFlow",
            tagline: "Automated invoicing for freelancers",
            url: "https://invoiceflow.co",
            status: "active"
        },
        {
            name: "Your Startup",
            tagline: "Applications open for our next sprint",
            url: "/contact",
            status: "upcoming"
        }
    ]

    return <>
        <Navbar />
        <div className="portfolio-page">
            {/* Hero */}
            <div className="portfolio-hero">
                <p className="portfolio-label">Portfolio</p>
                <h1>Studio Companies</h1>
                <p>We partner with ambitious young founders to build microSaaS products.</p>
            </div>

            {/* Portfolio Grid */}
            <div className="portfolio-section">
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div className={`project-card ${project.status}`} key={index}>
                            <div className="project-screenshot">
                                <div className="screenshot-placeholder"></div>
                            </div>
                            <div className="project-info">
                                <div className="project-header">
                                    <div className="project-logo"></div>
                                    <h3>{project.name}</h3>
                                </div>
                                <p className="project-tagline">{project.tagline}</p>
                                {project.status === "upcoming" ? (
                                    <Link to={project.url} className="project-link">
                                        Apply
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </Link>
                                ) : (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                        Visit
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Investor CTA */}
            <div className="investor-cta">
                <h2>Interested in our portfolio?</h2>
                <p>We're always open to connecting with investors who believe in backing the next generation of founders.</p>
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
