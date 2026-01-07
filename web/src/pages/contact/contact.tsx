import "./contact.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"
import { useEffect } from "react"

export default function ContactPage() {
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
        <div className="contact-page">
            {/* Hero */}
            <div className="contact-hero">
                <div className="contact-hero-content">
                    <p className="contact-label animate-on-scroll">Contact</p>
                    <h1 className="animate-on-scroll">Let's build<br />something together</h1>
                    <p className="contact-hero-description animate-on-scroll">Whether you're a founder with an idea, an investor interested in our portfolio, or just want to connect—we'd love to hear from you.</p>
                </div>
            </div>

            {/* Contact Methods */}
            <div className="contact-methods">
                <div className="contact-method animate-on-scroll">
                    <div className="contact-method-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="M22 6L12 13L2 6" />
                        </svg>
                    </div>
                    <div className="contact-method-content">
                        <h3>General Inquiries</h3>
                        <a href="mailto:hello@proximaz.io">hello@proximaz.io</a>
                    </div>
                </div>

                <div className="contact-method animate-on-scroll">
                    <div className="contact-method-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v12" />
                            <path d="M15 9.5c0-1.5-1.5-2.5-3-2.5s-3 1-3 2.5 1.5 2 3 2.5 3 1 3 2.5-1.5 2.5-3 2.5-3-1-3-2.5" />
                        </svg>
                    </div>
                    <div className="contact-method-content">
                        <h3>Investor Relations</h3>
                        <a href="mailto:investors@proximaz.io">investors@proximaz.io</a>
                    </div>
                </div>

                <div className="contact-method animate-on-scroll">
                    <div className="contact-method-icon">
                        <svg viewBox="0 0 24 24" fill="white" stroke="none">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </div>
                    <div className="contact-method-content">
                        <h3>Twitter / X</h3>
                        <a href="https://twitter.com/proximaz_hq" target="_blank" rel="noopener noreferrer">@proximaz_hq</a>
                    </div>
                </div>
            </div>

            {/* Who Should Reach Out */}
            <div className="who-section animate-on-scroll">
                <h2>Who should reach out?</h2>
                <div className="who-list">
                    <div className="who-item">
                        <div className="who-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <div className="who-content">
                            <h4>Founders</h4>
                            <p>You're under 20 with a microSaaS idea and the drive to build. You want mentorship, resources, and capital to make it real.</p>
                        </div>
                    </div>
                    <div className="who-item">
                        <div className="who-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 3v18h18" />
                                <path d="M7 16l4-4 4 4 5-6" />
                            </svg>
                        </div>
                        <div className="who-content">
                            <h4>Investors</h4>
                            <p>You're interested in early-stage microSaaS companies built by ambitious Gen Z founders. We can discuss our portfolio and approach.</p>
                        </div>
                    </div>
                    <div className="who-item">
                        <div className="who-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="7" r="4" />
                                <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
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
            <div className="contact-footer-note animate-on-scroll">
                <p>We typically respond within 24-48 hours.</p>
                <div className="social-inline">
                    <a href="https://twitter.com/proximaz_hq" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/company/proximaz-hq" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <Footer />
    </>
}
