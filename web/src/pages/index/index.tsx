import "./index.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"
import { Link } from "react-router-dom"

export default function IndexPage() {
    return <>
        <Navbar />
        <div className="index-page">
            <div className="section-one-background">
            
            </div>
            <div className="how-it-works-section">
                <div className="how-it-works-container">
                    <p className="how-it-works-subtitle">How It Works</p>
                    <h2 className="how-it-works-title">We partner with ambitious founders under 20 to build, launch, and scale microSaaS products that generate real revenue</h2>
                </div>
            </div>

                <div className="section-one-container">
                    <div className="section-one-alert">
                        <p className="section-one-alert-text">Applications Open</p>
                        <Link to="/contact" className="section-one-alert-link">Apply Now</Link>
                    </div>
                    <h1 className="section-one-title">The microSaaS foundry for the next generation of founders</h1>
                    <p className="section-one-description">We back young builders with funding, mentorship, and resources to turn ideas into profitable software businesses.</p>
                    <Link to="/contact" className="section-one-signup-link">Start Building</Link>
                </div>
                <div className="homework-visual">
                        <div className="paper-stack">
                            <div className="paper paper-back"></div>
                            <div className="paper paper-middle"></div>
                            <div className="paper paper-front">
                                <div className="paper-header">
                                    <div className="assignment-title">Your SaaS Product</div>
                                    <div className="due-date">Launch Ready</div>
                                </div>
                                <div className="paper-content">
                                    <div className="content-line long"></div>
                                    <div className="content-line medium"></div>
                                    <div className="content-line long"></div>
                                    <div className="content-line short"></div>
                                    <div className="content-line medium"></div>
                                    <div className="content-line long"></div>
                                    <div className="content-line short"></div>
                                    <div className="content-line medium"></div>
                                </div>
                                <div className="paper-highlight">
                                    <div className="highlight-text">$MRR</div>
                                </div>
                            </div>
                        </div>
                </div>
            <div className="how-it-works-background"></div>
            {/* Steps Section */}
            <div className="steps-section">
                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">01</div>
                        <h3 className="step-title">Apply with Your Idea</h3>
                        <p className="step-description">Share your microSaaS concept or problem you want to solve. We look for passion, grit, and a willingness to learn—not perfect pitches.</p>
                        <div className="step-image-placeholder">
                            <div className="placeholder-text">Image</div>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">02</div>
                        <h3 className="step-title">Build Together</h3>
                        <p className="step-description">Get hands-on support from experienced founders. We help with product development, go-to-market strategy, and everything in between.</p>
                        <div className="step-image-placeholder">
                            <div className="placeholder-text">Image</div>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">03</div>
                        <h3 className="step-title">Launch & Scale</h3>
                        <p className="step-description">Ship your product, acquire your first customers, and build sustainable recurring revenue with ongoing mentorship and resources.</p>
                        <div className="step-image-placeholder">
                            <div className="placeholder-text">Image</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial/Metrics Section */}
            <div className="metrics-section">
                <div className="metrics-container">
                    <div className="metrics-content">
                        <div className="metrics-header">
                            <h2 className="metrics-title">
                                <span className="highlight-brand">The best time to start</span> building is when you're young. 
                                No mortgage, no dependents, unlimited energy— 
                                <span className="highlight-brand">your risk tolerance will never be higher</span> than it is right now
                            </h2>
                        </div>
                        <div className="metrics-sidebar">
                            <div className="sidebar-content">
                                <h3 className="sidebar-title">Built by young founders, for young founders</h3>
                                <p className="sidebar-description">
                                    Our team has been in your shoes. We know what it takes to build profitable 
                                    software businesses before turning 20.
                                </p>
                                <Link to="/contact"><button className="sidebar-cta">Talk to our team</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Dashboard Section */}
            <div className="features-dashboard-section">
                <div className="features-dashboard-container">
                    <div className="features-left-column">
                        {/* Collaborate Card */}
                        <div className="feature-card-large collaborate-card">
                            <div className="card-content">
                                <h3 className="card-title">Join a community of builders</h3>
                                <p className="card-description">
                                    Connect with other young founders building real products and generating real revenue.
                                </p>
                            </div>
                            <div className="card-visual">
                                <div className="notification-stack">
                                    <div className="notification">
                                        <div className="notification-dot"></div>
                                        <div className="notification-content">
                                            <strong>New Launch</strong>
                                            <span>Today 2:34 pm</span>
                                        </div>
                                    </div>
                                    <div className="notification">
                                        <div className="notification-dot green"></div>
                                        <div className="notification-content">
                                            <strong>First Customer!</strong>
                                            <span>24 Jan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Response Time Card */}
                        <div className="feature-card-medium response-card">
                            <div className="response-visual">
                                <div className="response-number">12</div>
                                <div className="response-text">weeks to launch</div>
                            </div>
                        </div>
                    </div>

                    <div className="features-center-column">
                        {/* Chat/Messages Card */}
                        <div className="feature-card-tall messages-card">
                            <div className="messages-header">
                                <h4>What We Provide</h4>
                                <div className="message-tabs">
                                    <span className="tab active">Resources</span>
                                    <span className="tab">Support</span>
                                    <span className="tab">Network</span>
                                </div>
                            </div>
                            <div className="messages-list">
                                <div className="message-item">
                                    <div className="message-avatar"></div>
                                    <div className="message-content">
                                        <div className="message-name">Pre-seed Funding</div>
                                        <div className="message-preview">Capital to build your MVP...</div>
                                    </div>
                                    <div className="message-time">💰</div>
                                </div>
                                <div className="message-item">
                                    <div className="message-avatar"></div>
                                    <div className="message-content">
                                        <div className="message-name">1:1 Mentorship</div>
                                        <div className="message-preview">Weekly calls with founders...</div>
                                    </div>
                                    <div className="message-time">🎯</div>
                                </div>
                                 <div className="message-item">
                                    <div className="message-avatar"></div>
                                    <div className="message-content">
                                        <div className="message-name">Tech Resources</div>
                                        <div className="message-preview">AWS, Vercel, tools credits...</div>
                                    </div>
                                    <div className="message-dot"></div>
                                </div>
                            </div>
                        </div>

                        {/* Unified Inbox Card */}
                        <div className="feature-card-medium inbox-card">
                            <h4 className="card-title">Focus on building</h4>
                            <p className="card-description">
                                We handle the legal, admin, and operational stuff so you can focus on what matters: your product.
                            </p>
                        </div>
                    </div>

                    <div className="features-right-column">
                        {/* Brand Card */}
                        <div className="feature-card-medium brand-card">
                            <div className="brand-content">
                                <h2 className="brand-title">microSaaS Foundry for Gen Z</h2>
                            </div>
                        </div>

                        {/* Study Summary Card */}
                        <div className="feature-card-large summary-card">
                            <div className="summary-header">
                                <div className="summary-icon"></div>
                                <h4>Who We're Looking For</h4>
                            </div>
                            <div className="summary-content">
                                <p>Ambitious builders under 20 who want to create software that solves real problems.</p>
                                <p>You don't need a perfect idea or technical skills. You need drive, curiosity, and the willingness to put in the work to make something people will pay for.</p>
                                <Link to="/contact" className="summary-button">Apply Now</Link>
                            </div>
                        </div>

                        {/* Auto Recording Card */}
                        <div className="feature-card-medium recording-card">
                            <h4 className="card-title">Learn by doing</h4>
                            <p className="card-description">
                                Build a real product, get real customers, make real money—the best entrepreneurship education.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <div className="cta-container">
                    <h2 className="cta-title">Ready to build your first SaaS?</h2>
                    <p className="cta-description">Join the next cohort of young founders turning ideas into profitable software businesses.</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-primary">Apply Now</Link>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </>
}