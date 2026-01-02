import "./slideshowCreator.css"
import { Link } from "react-router-dom"
import Navbar from "../../../components/navbar/navbar"
import Footer from "../../../components/footer/footer"

export default function SlideshowCreatorPage() {
    return (
        <div className="slideshow-creator-page">
            <Navbar />
            {/* Hero Section */}
            <div className="slideshow-hero-section">
                <div className="slideshow-hero-container">
                    <div className="slideshow-hero-badge">
                        SLIDESHOW CREATOR
                    </div>
                    <h1 className="slideshow-hero-title">
                        100% free
                        <br />
                        presentation builder
                    </h1>
                    <p className="slideshow-hero-description">
                        Transform documents, text, or images into stunning presentations with AI-powered design, formatting, and script generation.
                    </p>
                    <Link to="/waitlist" className="slideshow-hero-cta">
                        Join waitlist for early access
                    </Link>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="slideshow-content-section">
                <div className="slideshow-content-container">
                    <div className="slideshow-content-left">
                        <h2 className="slideshow-content-title">
                            Professional, AI-Generated
                            <br />
                            Presentations
                        </h2>
                        <p className="slideshow-content-description">
                            Upload any content and get complete presentations with formatting, images, scripts, and cue cards. Everything you need for an aesthetic presentation.
                        </p>
                    </div>
                    
                    <div className="slideshow-content-right">
                        <div className="slideshow-demo-card">
                            <div className="slideshow-demo-header">
                                <div className="slideshow-demo-tabs">
                                    <span className="slideshow-tab active">Topic</span>
                                    <span className="slideshow-tab">Design</span>
                                    <span className="slideshow-tab">Content</span>
                                </div>
                            </div>
                            
                            <div className="slideshow-demo-content">
                                <div className="slideshow-input-section">
                                    <h3>Presentation Topic</h3>
                                    <p>What would you like to present about?</p>
                                    <input type="text" value="Climate Change Solutions for Urban Areas" readOnly className="topic-input" />
                                </div>
                                
                                <div className="slideshow-preview">
                                    <div className="slide-thumbnail active">
                                        <div className="slide-content">
                                            <div className="slide-title">Climate Change Solutions</div>
                                            <div className="slide-subtitle">Urban Environmental Strategies</div>
                                            <div className="slide-chart">
                                                <div className="chart-bar" style={{height: '60%'}}></div>
                                                <div className="chart-bar" style={{height: '80%'}}></div>
                                                <div className="chart-bar" style={{height: '40%'}}></div>
                                                <div className="chart-bar" style={{height: '90%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="slide-thumbnail">
                                        <div className="slide-content">
                                            <div className="slide-title mini">Key Strategies</div>
                                            <div className="slide-bullets">
                                                <div className="bullet-point"></div>
                                                <div className="bullet-point"></div>
                                                <div className="bullet-point"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="slide-thumbnail">
                                        <div className="slide-content">
                                            <div className="slide-title mini">Implementation</div>
                                            <div className="slide-image-placeholder"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="slideshow-generate">
                                    <button className="generate-btn">Generate Presentation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="slideshow-features-section">
                <div className="slideshow-features-container">
                    <h2 className="slideshow-features-title">Powerful Presentation Features</h2>
                    <div className="slideshow-features-grid">
                        <div className="slideshow-feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>AI Design & Scaffolding</h3>
                            <p>Select from customizable scaffolding styles with AI-powered formatting, images, and aesthetic design elements</p>
                        </div>
                        <div className="slideshow-feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Multi-Format Input</h3>
                            <p>Upload documents, text, images, or any content type and get AI-generated presentations with smart formatting</p>
                        </div>
                        <div className="slideshow-feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 20V10M12 20V4M6 20V14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3>Complete Presentation Package</h3>
                            <p>Get slides, speaker notes, scripts, and cue cards - everything needed for a professional presentation</p>
                        </div>
                        <div className="slideshow-feature-card">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="3" fill="black"/>
                                </svg>
                            </div>
                            <h3>Custom Scaffolding Styles</h3>
                            <p>Choose bullet points, paragraphs, or custom formatting styles with AI-powered content optimization</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="slideshow-cta-section">
                <div className="slideshow-cta-container">
                    <h2 className="slideshow-cta-title">Ready to create amazing presentations effortlessly?</h2>
                    <p className="slideshow-cta-description">Join thousands of high school students creating presentations in minutes, not hours, and acing their assignments.</p>
                    <div className="slideshow-cta-buttons">
                        <Link to="/waitlist" className="slideshow-cta-primary">Join Waitlist</Link>
                        {/* <Link to="/demo" className="slideshow-cta-secondary">See Demo</Link> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}