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
                    <p className="how-it-works-subtitle">How Mythea works</p>
                    <h2 className="how-it-works-title">Transform your academic workflow with three simple steps that leverage cutting-edge AI technology to enhance your learning experience and boost your grades</h2>
                </div>
            </div>

                <div className="section-one-container">
                    <div className="section-one-alert">
                        <p className="section-one-alert-text">We just launched!</p>
                        <Link to="/waitlist" className="section-one-alert-link">Join Waitlist</Link>
                    </div>
                    <h1 className="section-one-title">Mythea has you covered in every way: research, presentations, and assignments</h1>
                    <p className="section-one-description">We've built the AI solution to eliminate meaningless fluff.</p>
                    <Link to="/waitlist" className="section-one-signup-link">Join Waitlist!</Link>
                </div>
                <div className="homework-visual">
                        <div className="paper-stack">
                            <div className="paper paper-back"></div>
                            <div className="paper paper-middle"></div>
                            <div className="paper paper-front">
                                <div className="paper-header">
                                    <div className="assignment-title">Research Assignment</div>
                                    <div className="due-date">Due: March 15</div>
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
                                    <div className="highlight-text">100%</div>
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
                        <h3 className="step-title">Upload Your Content</h3>
                        <p className="step-description">Simply upload your lecture notes, research materials, or assignment prompts to get started with AI-powered assistance.</p>
                        <div className="step-image-placeholder">
                            <div className="placeholder-text">Image</div>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">02</div>
                        <h3 className="step-title">AI Analysis</h3>
                        <p className="step-description">Our advanced AI processes your content, identifies key concepts, and creates personalized study materials tailored to your needs.</p>
                        <div className="step-image-placeholder">
                            <div className="placeholder-text">Image</div>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step-number">03</div>
                        <h3 className="step-title">Enhanced Learning</h3>
                        <p className="step-description">Get instant feedback, generate presentations, and receive personalized recommendations to boost your academic performance.</p>
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
                                <span className="highlight-brand">86% of students</span> already use AI to help with 
                                assignments. While they're using basic tools, 
                                <span className="highlight-brand"> you can gain the upper hand</span> with 
                                Mythea's specialized academic AI that's built specifically for student success
                            </h2>
                        </div>
                        <div className="metrics-sidebar">
                            <div className="sidebar-content">
                                <h3 className="sidebar-title">Get started fast with proven templates</h3>
                                <p className="sidebar-description">
                                    Mythea's infrastructure powers over 150 hours of assignment assistance 
                                    every week—so you can trust it's battle-tested.
                                </p>
                                <button className="sidebar-cta">Talk to academic advisor</button>
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
                                <h3 className="card-title">Collaborate as a team</h3>
                                <p className="card-description">
                                    See your entire team's study progress along with AI-powered insights.
                                </p>
                            </div>
                            <div className="card-visual">
                                <div className="notification-stack">
                                    <div className="notification">
                                        <div className="notification-dot"></div>
                                        <div className="notification-content">
                                            <strong>Study Session</strong>
                                            <span>Today 2:34 pm</span>
                                        </div>
                                    </div>
                                    <div className="notification">
                                        <div className="notification-dot green"></div>
                                        <div className="notification-content">
                                            <strong>Quiz Completed</strong>
                                            <span>24 Jan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Response Time Card */}
                        <div className="feature-card-medium response-card">
                            <div className="response-visual">
                                <div className="response-number">3x</div>
                                <div className="response-text">your response time</div>
                            </div>
                        </div>
                    </div>

                    <div className="features-center-column">
                        {/* Chat/Messages Card */}
                        <div className="feature-card-tall messages-card">
                            <div className="messages-header">
                                <h4>Study Sessions</h4>
                                <div className="message-tabs">
                                    <span className="tab active">Open</span>
                                    <span className="tab">Closed</span>
                                    <span className="tab">Starred</span>
                                </div>
                            </div>
                            <div className="messages-list">
                                <div className="message-item">
                                    <div className="message-avatar"></div>
                                    <div className="message-content">
                                        <div className="message-name">Study Insights</div>
                                        <div className="message-preview">Your learning pattern analysis...</div>
                                    </div>
                                    <div className="message-time">9:45 AM</div>
                                </div>
                                <div className="message-item">
                                    <div className="message-avatar"></div>
                                    <div className="message-content">
                                        <div className="message-name">Quiz Helper</div>
                                        <div className="message-preview">Practice questions generated...</div>
                                    </div>
                                    <div className="message-time">10:12 AM</div>
                                </div>
                                 <div className="message-item">
                                    <div className="message-avatar"></div>
                                    <div className="message-content">
                                        <div className="message-name">Study Copilot</div>
                                        <div className="message-preview">Your notes summary is ready...</div>
                                    </div>
                                    <div className="message-dot"></div>
                                </div>
                            </div>
                        </div>

                        {/* Unified Inbox Card */}
                        <div className="feature-card-medium inbox-card">
                            <h4 className="card-title">One inbox for all</h4>
                            <p className="card-description">
                                Manage assignments, notes, and study materials across all subjects in one place.
                            </p>
                        </div>
                    </div>

                    <div className="features-right-column">
                        {/* Brand Card */}
                        <div className="feature-card-medium brand-card">
                            <div className="brand-content">
                                <h2 className="brand-title">Lightweight AI Study Assistant</h2>
                            </div>
                        </div>

                        {/* Study Summary Card */}
                        <div className="feature-card-large summary-card">
                            <div className="summary-header">
                                <div className="summary-icon"></div>
                                <h4>Study Summary</h4>
                            </div>
                            <div className="summary-content">
                                <p>Start by categorizing key concepts and linking them with topics you've covered in previous sessions.</p>
                                <p>This will help you quickly pinpoint where to find relevant information. If the internal article system has a search feature, use specific keywords related to the query to locate relevant sections.</p>
                                <Link to="/waitlist" className="summary-button">Join Waitlist</Link>
                            </div>
                        </div>

                        {/* Auto Recording Card */}
                        <div className="feature-card-medium recording-card">
                            <h4 className="card-title">Auto note recording & transcription</h4>
                            <p className="card-description">
                                Record every lecture automatically to preserve a record of what was covered.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <div className="cta-container">
                    <h2 className="cta-title">Ready to transform your learning?</h2>
                    <p className="cta-description">Join thousands of high school students who are already using Mythea to ace their assignments and free up time to relax.</p>
                    <div className="cta-buttons">
                        <Link to="/waitlist" className="cta-primary">Join Waitlist</Link>
                        {/* <Link to="/demo" className="cta-secondary">Watch Demo</Link> */}
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </>
}