import "./researchAssistant.css"
import { Link } from "react-router-dom"
import Navbar from "../../../components/navbar/navbar"
import Footer from "../../../components/footer/footer"

export default function ResearchAssistantPage() {
    return (
        <div className="research-assistant-page">
            <Navbar />
            {/* Hero Section */}
            <div className="research-hero-section">
                <div className="research-hero-container">
                    <div className="research-hero-badge">
                        RESEARCH ASSISTANT
                    </div>
                    <h1 className="research-hero-title">
                        100% free
                        <br />
                        research assistance
                    </h1>
                    <p className="research-hero-description">
                        Get all the sources and citations you need with AI-powered research assistance. Complete with formatting, progress tracking, and rich text editing.
                    </p>
                    <Link to="/waitlist" className="research-hero-cta">
                        Join waitlist for early access
                    </Link>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="research-content-section">
                <div className="research-content-container">
                    <div className="research-content-left">
                        <h2 className="research-content-title">
                            Free, High-Quality
                            <br />
                            Research
                        </h2>
                        <p className="research-content-description">
                            Access thousands of academic sources with AI formatting and citation generation. Like Cursor for research documents, with real-time progress tracking.
                        </p>
                    </div>
                    
                    <div className="research-content-right">
                        <div className="research-demo-card">
                            <div className="research-demo-header">
                                <div className="research-demo-tabs">
                                    <span className="research-tab active">Sources</span>
                                    <span className="research-tab">Summary</span>
                                    <span className="research-tab">Notes</span>
                                </div>
                            </div>
                            
                            <div className="research-demo-content">
                                <div className="research-question">
                                    <h3>Research Question</h3>
                                    <p>What are the environmental impacts of renewable energy adoption in developing countries?</p>
                                </div>
                                
                                <div className="research-sources">
                                    <div className="source-item">
                                        <div className="source-number">1.</div>
                                        <div className="source-details">
                                            <h4>Environmental Benefits of Solar Energy in Sub-Saharan Africa</h4>
                                            <p>A comprehensive analysis of solar energy implementation and its positive environmental effects...</p>
                                            <span className="source-type">Academic Journal • 2023</span>
                                        </div>
                                    </div>
                                    
                                    <div className="source-item">
                                        <div className="source-number">2.</div>
                                        <div className="source-details">
                                            <h4>Wind Power Development in Southeast Asia</h4>
                                            <p>Examining the environmental trade-offs of wind energy projects in developing nations...</p>
                                            <span className="source-type">Research Paper • 2024</span>
                                        </div>
                                    </div>
                                    
                                    <div className="source-item">
                                        <div className="source-number">3.</div>
                                        <div className="source-details">
                                            <h4>Hydroelectric Impact Assessment</h4>
                                            <p>Long-term environmental monitoring of hydroelectric projects in emerging economies...</p>
                                            <span className="source-type">Case Study • 2023</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="research-input">
                                    <input type="text" placeholder="Ask a follow-up question..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="research-features-section">
                <div className="research-features-container">
                    <h2 className="research-features-title">Powerful Research Features</h2>
                    <div className="research-features-grid">
                        <div className="research-feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Smart Source Discovery</h3>
                            <p>AI automatically finds and ranks the most relevant academic sources, with summaries and deeper dive options</p>
                        </div>
                        <div className="research-feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3V21L7.5 18L12 21L16.5 18L21 21V3L16.5 6L12 3L7.5 6L3 3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 8H16M8 12H16M8 16H12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>AI Formatting & Citations</h3>
                            <p>Automatic formatting and citation generation with real-time progress tracking and completion checks</p>
                        </div>
                        <div className="research-feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Rich Text Editor</h3>
                            <p>AI detects what you've written in real-time, providing intelligent suggestions and content analysis</p>
                        </div>
                        <div className="research-feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2"/>
                                    <path d="M12 6L12 12L16 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Template Selection</h3>
                            <p>Choose from research templates or have AI generate custom ones based on your assignment requirements</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="research-cta-section">
                <div className="research-cta-container">
                    <h2 className="research-cta-title">Ready to revolutionize your research workflow?</h2>
                    <p className="research-cta-description">Join thousands of high school students using AI to ace their research assignments and free up time for what matters.</p>
                    <div className="research-cta-buttons">
                        <Link to="/waitlist" className="research-cta-primary">Join Waitlist</Link>
                        {/* <Link to="/demo" className="research-cta-secondary">See Demo</Link> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}