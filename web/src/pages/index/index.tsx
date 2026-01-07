import "./index.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function IndexPage() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return <>
        <Navbar />
        <div className="index-page">
            <div className="section-one-background">
            
            </div>

                <div className="hero-wrapper">
                    <div className="section-one-container">
                        <div className="section-one-alert hero-animate hero-delay-1">
                            <p className="section-one-alert-text">Applications Open</p>
                            <Link to="/apply" className="section-one-alert-link">Apply Now</Link>
                        </div>
                        <h1 className="section-one-title hero-animate hero-delay-2">The sprint-based startup venture studio</h1>
                        <p className="section-one-description hero-animate hero-delay-3">New ventures. Every two weeks. Move fast or move aside.</p>
                        <Link to="/apply" className="section-one-signup-link hero-animate hero-delay-4">Start Building</Link>
                    </div>

                    {/* Isometric North Star */}
                    <div className="north-star-container">
                        <div className="north-star">
                            <div className="star-line star-line-1"></div>
                            <div className="star-line star-line-2"></div>
                            <div className="star-line star-line-3"></div>
                            <div className="star-line star-line-4"></div>
                            <div className="star-core"></div>
                            <div className="star-ring star-ring-1"></div>
                            <div className="star-ring star-ring-2"></div>
                        </div>
                    </div>
                </div>

            <div className="how-it-works-section">
                <div className="how-it-works-container">
                    <p className="how-it-works-subtitle animate-on-scroll">How It Works</p>
                    <h2 className="how-it-works-title animate-on-scroll">We fund ideas, not decks. Small teams with full autonomy sprint on high-potential concepts until they hit revenue or get killed</h2>
                </div>
            </div>

            {/* Steps Section */}
            <div className="steps-section">
                <div className="steps-container">
                    <div className="step-card animate-on-scroll">
                        <div className="step-number">01</div>
                        <h3 className="step-title">Join a Sprint Team</h3>
                        <p className="step-description">Show us what you've shipped, sold, or broken trying. We care about output, not credentials. Engineers and GTM operators welcome.</p>
                        <div className="step-visual">
                            {/* Spark/Idea Animation */}
                            <div className="idea-spark">
                                <div className="spark-core"></div>
                                <div className="spark-ray spark-ray-1"></div>
                                <div className="spark-ray spark-ray-2"></div>
                                <div className="spark-ray spark-ray-3"></div>
                                <div className="spark-ray spark-ray-4"></div>
                                <div className="spark-ray spark-ray-5"></div>
                                <div className="spark-ray spark-ray-6"></div>
                                <div className="spark-particle spark-particle-1"></div>
                                <div className="spark-particle spark-particle-2"></div>
                                <div className="spark-particle spark-particle-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="step-card animate-on-scroll">
                        <div className="step-number">02</div>
                        <h3 className="step-title">Build Fast, Ship Faster</h3>
                        <p className="step-description">2 weeks. One goal: paying customers. You own every decision. We provide capital and guidance when you ask for it. Deadweight gets cut fast.</p>
                        <div className="step-visual">
                            {/* Constellation Animation */}
                            <div className="constellation">
                                <div className="const-node const-node-1"></div>
                                <div className="const-node const-node-2"></div>
                                <div className="const-node const-node-3"></div>
                                <div className="const-node const-node-4"></div>
                                <div className="const-node const-node-5"></div>
                                <svg className="const-lines" viewBox="0 0 200 150">
                                    <line className="const-line" x1="100" y1="30" x2="50" y2="70" />
                                    <line className="const-line" x1="100" y1="30" x2="150" y2="70" />
                                    <line className="const-line" x1="50" y1="70" x2="70" y2="120" />
                                    <line className="const-line" x1="150" y1="70" x2="130" y2="120" />
                                    <line className="const-line" x1="70" y1="120" x2="130" y2="120" />
                                    <line className="const-line" x1="50" y1="70" x2="150" y2="70" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="step-card animate-on-scroll">
                        <div className="step-number">03</div>
                        <h3 className="step-title">Scale or Next</h3>
                        <p className="step-description">Hit your numbers? We double down. Miss them? We pull the plug and spin up the next thing. No emotional attachment, just math.</p>
                        <div className="step-visual">
                            {/* Rising Sun Animation */}
                            <div className="rising-sun">
                                <div className="sun-horizon"></div>
                                <div className="sun-body">
                                    <div className="sun-core"></div>
                                    <div className="sun-ray sun-ray-1"></div>
                                    <div className="sun-ray sun-ray-2"></div>
                                    <div className="sun-ray sun-ray-3"></div>
                                    <div className="sun-ray sun-ray-4"></div>
                                    <div className="sun-ray sun-ray-5"></div>
                                    <div className="sun-ray sun-ray-6"></div>
                                    <div className="sun-ray sun-ray-7"></div>
                                    <div className="sun-ray sun-ray-8"></div>
                                </div>
                                <div className="sun-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial/Metrics Section */}
            <div className="metrics-section">
                <div className="metrics-container">
                    <div className="metrics-content">
                        <div className="metrics-header animate-on-scroll">
                            <h2 className="metrics-title">
                                <span className="highlight-brand">Most accelerators optimize for demo day.</span> We optimize for MRR. 
                                Speed is the only moat that matters when you're young. 
                                <span className="highlight-brand"> We're betting everything on velocity.</span>
                            </h2>
                        </div>
                        <div className="metrics-sidebar animate-on-scroll">
                            <div className="sidebar-content">
                                <h3 className="sidebar-title">Operators, not advisors</h3>
                                <p className="sidebar-description">
                                    We're in the trenches with you. Same Slack, same deadlines, same skin in the game. 
                                    This isn't mentorship theater.
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
                    <div className="features-left-column animate-on-scroll">
                        {/* Collaborate Card */}
                        <div className="feature-card-large collaborate-card">
                            <div className="card-content">
                                <h3 className="card-title">Talent density matters</h3>
                                <p className="card-description">
                                    Small teams, high standards. Everyone codes, sells, or gets out of the way.
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
                                <div className="response-number">2</div>
                                <div className="response-text">weeks per sprint</div>
                            </div>
                        </div>
                    </div>

                    <div className="features-center-column animate-on-scroll">
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
                                        <div className="message-name">Sprint Funding</div>
                                        <div className="message-preview">Capital for each project...</div>
                                    </div>
                                    <div className="message-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 6v12m3-9H9" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="message-item">
                                    <div className="message-avatar"></div>
                                    <div className="message-content">
                                        <div className="message-name">Full Autonomy</div>
                                        <div className="message-preview">Your team, your decisions...</div>
                                    </div>
                                    <div className="message-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="white" stroke="none" />
                                        </svg>
                                    </div>
                                </div>
                                 <div className="message-item">
                                    <div className="message-avatar"></div>
                                    <div className="message-content">
                                        <div className="message-name">Expert Coaching</div>
                                        <div className="message-preview">Guidance without micromanagement...</div>
                                    </div>
                                    <div className="message-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 20h9" />
                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rocket Visual Card */}
                        <div className="feature-card-medium visual-card rocket-card">
                            <div className="card-icon-visual">
                                <svg viewBox="0 0 80 80" fill="none">
                                    {/* Rocket body */}
                                    <path d="M40 15 L48 35 L48 55 L40 65 L32 55 L32 35 Z" stroke="white" strokeWidth="1.5" fill="none" className="rocket-body" />
                                    {/* Rocket window */}
                                    <circle cx="40" cy="32" r="5" stroke="white" strokeWidth="1" fill="none" className="rocket-window" />
                                    {/* Fins */}
                                    <path d="M32 50 L24 60 L32 55" stroke="white" strokeWidth="1" fill="none" className="rocket-fin" />
                                    <path d="M48 50 L56 60 L48 55" stroke="white" strokeWidth="1" fill="none" className="rocket-fin" />
                                    {/* Flame */}
                                    <path d="M36 65 L40 78 L44 65" stroke="white" strokeWidth="1" fill="none" className="rocket-flame flame-1" />
                                    <path d="M38 65 L40 72 L42 65" stroke="white" strokeWidth="0.8" fill="none" className="rocket-flame flame-2" />
                                    {/* Speed lines */}
                                    <line x1="25" y1="25" x2="20" y2="30" stroke="white" strokeWidth="0.5" opacity="0.4" className="speed-line speed-1" />
                                    <line x1="55" y1="25" x2="60" y2="30" stroke="white" strokeWidth="0.5" opacity="0.4" className="speed-line speed-2" />
                                    <line x1="22" y1="40" x2="15" y2="45" stroke="white" strokeWidth="0.5" opacity="0.3" className="speed-line speed-3" />
                                    <line x1="58" y1="40" x2="65" y2="45" stroke="white" strokeWidth="0.5" opacity="0.3" className="speed-line speed-4" />
                                    {/* Stars */}
                                    <circle cx="15" cy="20" r="1" fill="white" opacity="0.5" className="rocket-star star-1" />
                                    <circle cx="65" cy="15" r="0.8" fill="white" opacity="0.4" className="rocket-star star-2" />
                                    <circle cx="12" cy="55" r="0.6" fill="white" opacity="0.3" className="rocket-star star-3" />
                                    <circle cx="70" cy="50" r="0.8" fill="white" opacity="0.4" className="rocket-star star-4" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="features-right-column animate-on-scroll">
                        {/* Network Visual Card */}
                        <div className="feature-card-medium visual-card network-card">
                            <div className="card-icon-visual">
                                <svg viewBox="0 0 80 80" fill="none">
                                    {/* Central hub */}
                                    <circle cx="40" cy="40" r="6" stroke="white" strokeWidth="1.5" fill="none" className="hub-center" />
                                    <circle cx="40" cy="40" r="3" fill="white" opacity="0.8" className="hub-core" />
                                    
                                    {/* Connection lines */}
                                    <line x1="40" y1="40" x2="18" y2="25" stroke="white" strokeWidth="0.8" opacity="0.5" className="conn-line conn-1" />
                                    <line x1="40" y1="40" x2="62" y2="22" stroke="white" strokeWidth="0.8" opacity="0.5" className="conn-line conn-2" />
                                    <line x1="40" y1="40" x2="65" y2="50" stroke="white" strokeWidth="0.8" opacity="0.5" className="conn-line conn-3" />
                                    <line x1="40" y1="40" x2="55" y2="68" stroke="white" strokeWidth="0.8" opacity="0.5" className="conn-line conn-4" />
                                    <line x1="40" y1="40" x2="22" y2="62" stroke="white" strokeWidth="0.8" opacity="0.5" className="conn-line conn-5" />
                                    <line x1="40" y1="40" x2="12" y2="45" stroke="white" strokeWidth="0.8" opacity="0.5" className="conn-line conn-6" />
                                    
                                    {/* Outer nodes */}
                                    <circle cx="18" cy="25" r="4" stroke="white" strokeWidth="1" fill="none" className="node node-1" />
                                    <circle cx="62" cy="22" r="3.5" stroke="white" strokeWidth="1" fill="none" className="node node-2" />
                                    <circle cx="65" cy="50" r="3" stroke="white" strokeWidth="1" fill="none" className="node node-3" />
                                    <circle cx="55" cy="68" r="3.5" stroke="white" strokeWidth="1" fill="none" className="node node-4" />
                                    <circle cx="22" cy="62" r="3" stroke="white" strokeWidth="1" fill="none" className="node node-5" />
                                    <circle cx="12" cy="45" r="2.5" stroke="white" strokeWidth="1" fill="none" className="node node-6" />
                                    
                                    {/* Node cores */}
                                    <circle cx="18" cy="25" r="1.5" fill="white" opacity="0.7" className="node-core core-1" />
                                    <circle cx="62" cy="22" r="1.2" fill="white" opacity="0.6" className="node-core core-2" />
                                    <circle cx="65" cy="50" r="1" fill="white" opacity="0.5" className="node-core core-3" />
                                    <circle cx="55" cy="68" r="1.2" fill="white" opacity="0.6" className="node-core core-4" />
                                    <circle cx="22" cy="62" r="1" fill="white" opacity="0.5" className="node-core core-5" />
                                    <circle cx="12" cy="45" r="0.8" fill="white" opacity="0.4" className="node-core core-6" />
                                    
                                    {/* Data pulses */}
                                    <circle cx="40" cy="40" r="2" fill="white" opacity="0" className="data-pulse pulse-1" />
                                    <circle cx="40" cy="40" r="2" fill="white" opacity="0" className="data-pulse pulse-2" />
                                </svg>
                            </div>
                        </div>

                        {/* Study Summary Card */}
                        <div className="feature-card-large summary-card">
                            <div className="summary-header">
                                <div className="summary-icon"></div>
                                <h4>Who We're Looking For</h4>
                            </div>
                            <div className="summary-content">
                                <p>Obsessive people who can't stop tinkering. Side project addicts. The ones who ship at 2am because they want to, not because they have to.</p>
                                <p>If you're waiting for permission to start something, this isn't for you.</p>
                                <Link to="/apply" className="summary-button">Apply Now</Link>
                            </div>
                        </div>

                        {/* Brand Card */}
                        <div className="feature-card-medium brand-card">
                            <div className="brand-content">
                                <h2 className="brand-title">Startup Venture Studio</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cta-section animate-on-scroll">
                <div className="cta-container">
                    <h2 className="cta-title">Stop planning. Start shipping.</h2>
                    <p className="cta-description">Next cohort kicks off soon. Limited spots. No second chances.</p>
                    <div className="cta-buttons">
                        <Link to="/apply" className="cta-primary">Apply Now</Link>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </>
}