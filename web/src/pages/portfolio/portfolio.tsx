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

    return <>
        <Navbar />
        <div className="portfolio-page">
            {/* Hero */}
            <div className="portfolio-hero">
                <p className="portfolio-label animate-on-scroll">Portfolio</p>
                <h1 className="animate-on-scroll">Studio Sprints</h1>
                <p className="animate-on-scroll">Active and upcoming ventures from the Proximaz foundry.</p>
            </div>

            {/* Portfolio Grid */}
            <div className="portfolio-section">
                <div className="portfolio-grid">
                    {/* Sprint One */}
                    <div className="project-card active animate-on-scroll">
                        <div className="project-screenshot">
                            <div className="sprint-visual solar-system">
                                {/* Sun */}
                                <div className="sun"></div>
                                {/* Orbits */}
                                <div className="orbit orbit-1">
                                    <div className="planet planet-1"></div>
                                </div>
                                <div className="orbit orbit-2">
                                    <div className="planet planet-2"></div>
                                </div>
                                <div className="orbit orbit-3">
                                    <div className="planet planet-3"></div>
                                </div>
                                {/* Stars */}
                                <div className="bg-star star-1"></div>
                                <div className="bg-star star-2"></div>
                                <div className="bg-star star-3"></div>
                                <div className="bg-star star-4"></div>
                                <div className="bg-star star-5"></div>
                            </div>
                        </div>
                        <div className="project-info">
                            <div className="project-header">
                                <div className="sprint-badge">01</div>
                                <h3>Sprint One</h3>
                            </div>
                            <p className="project-tagline">CRM for non-profits</p>
                            <span className="project-status active-status">In Progress</span>
                        </div>
                    </div>

                    {/* Sprint Two */}
                    <div className="project-card upcoming animate-on-scroll">
                        <div className="project-screenshot">
                            <div className="sprint-visual atom-visual">
                                {/* Nucleus */}
                                <div className="nucleus"></div>
                                {/* Electron orbits */}
                                <div className="electron-orbit e-orbit-1">
                                    <div className="electron e-1"></div>
                                </div>
                                <div className="electron-orbit e-orbit-2">
                                    <div className="electron e-2"></div>
                                </div>
                                <div className="electron-orbit e-orbit-3">
                                    <div className="electron e-3"></div>
                                </div>
                                {/* Ambient particles */}
                                <div className="ambient-particle p-1"></div>
                                <div className="ambient-particle p-2"></div>
                                <div className="ambient-particle p-3"></div>
                            </div>
                        </div>
                        <div className="project-info">
                            <div className="project-header">
                                <div className="sprint-badge upcoming-badge">02</div>
                                <h3>Sprint Two</h3>
                            </div>
                            <p className="project-tagline">TBA</p>
                            <span className="project-status upcoming-status">Coming Soon</span>
                        </div>
                    </div>
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
