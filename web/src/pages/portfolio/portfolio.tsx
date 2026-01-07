import "./portfolio.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function PortfolioPage() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

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
                <p className="portfolio-label animate-on-scroll">Portfolio</p>
                <h1 className="animate-on-scroll">Studio Companies</h1>
                <p className="animate-on-scroll">We partner with ambitious young founders to build microSaaS products.</p>
            </div>

            {/* Portfolio Grid */}
            <div className="portfolio-section">
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div className={`project-card ${project.status} animate-on-scroll`} key={index}>
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
                                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14m-6-6l6 6-6 6" />
                                        </svg>
                                    </Link>
                                ) : (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                        Visit
                                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14m-6-6l6 6-6 6" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Investor CTA */}
            <div className="investor-cta animate-on-scroll">
                <h2>Interested in our portfolio?</h2>
                <p>We're always open to connecting with investors who believe in backing the next generation of founders.</p>
                <Link to="/contact">
                    Get in Touch
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14m-6-6l6 6-6 6" />
                    </svg>
                </Link>
            </div>
        </div>
        <Footer />
    </>
}
