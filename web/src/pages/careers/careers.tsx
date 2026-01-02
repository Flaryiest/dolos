import "./careers.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"
import { Link } from "react-router-dom"
import { useState } from "react"

type RoleCategory = "all" | "engineering" | "gtm" | "other"

interface Role {
    id: string
    title: string
    description: string
    level: string
    type: string
    location: string
    category: RoleCategory
    region: string
}

export default function CareersPage() {
    const [activeFilter, setActiveFilter] = useState<RoleCategory>("all")

    const roles: Role[] = [
        {
            id: "frontend-eng",
            title: "Frontend Engineer",
            description: "Help build beautiful, performant interfaces for our portfolio companies. You'll work across multiple products, shipping features that thousands of users interact with daily.",
            level: "Mid-Senior",
            type: "Full-time",
            location: "Remote",
            category: "engineering",
            region: "Worldwide"
        },
        {
            id: "backend-eng",
            title: "Backend Engineer",
            description: "Design and scale the infrastructure powering our microSaaS products. You'll own systems end-to-end, from database architecture to API design to deployment.",
            level: "Mid-Senior",
            type: "Full-time",
            location: "Remote",
            category: "engineering",
            region: "Worldwide"
        },
        {
            id: "gtm",
            title: "GTM / Growth Lead",
            description: "Drive acquisition and revenue across our portfolio. You'll develop go-to-market strategies, run experiments, and help our founders find their first 100 customers.",
            level: "Mid-Senior",
            type: "Full-time",
            location: "Remote",
            category: "gtm",
            region: "Worldwide"
        },
        {
            id: "wildcard",
            title: "Wild Card",
            description: "Don't see a role that fits? We're always looking for exceptional people. If you're talented, driven, and want to help young founders build—reach out.",
            level: "Any level",
            type: "Full-time",
            location: "Remote",
            category: "other",
            region: "Worldwide"
        }
    ]

    const filteredRoles = activeFilter === "all" 
        ? roles 
        : roles.filter(role => role.category === activeFilter)

    const filters: { key: RoleCategory; label: string }[] = [
        { key: "all", label: "View All" },
        { key: "engineering", label: "Engineering" },
        { key: "gtm", label: "Growth" },
        { key: "other", label: "Other" }
    ]

    return <>
        <Navbar />
        <div className="careers-page">
            {/* Hero */}
            <div className="careers-hero">
                <p className="careers-label">We're Hiring</p>
                <h1>Be part of our mission</h1>
                <p>We're building a portfolio of microSaaS companies and looking for passionate people to join us. We value flat hierarchies, clear communication, and full ownership.</p>
            </div>

            {/* Filters */}
            <div className="careers-filters">
                {filters.map(filter => (
                    <button
                        key={filter.key}
                        className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter.key)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Roles List */}
            <div className="roles-section">
                <div className="roles-list">
                    {filteredRoles.map(role => (
                        <Link to="/contact" className="role-card" key={role.id}>
                            <div className="role-content">
                                <h3>{role.title}</h3>
                                <p>{role.description}</p>
                                <div className="role-meta">
                                    <span>{role.level}</span>
                                    <span>{role.type}</span>
                                    <span>{role.location}</span>
                                    <span>{role.region}</span>
                                </div>
                            </div>
                            <div className="role-action">
                                <span className="learn-more">
                                    Learn More
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Values */}
            <div className="values-section">
                <h2>How we work</h2>
                <div className="values-grid">
                    <div className="value-item">
                        <h4>Remote-first</h4>
                        <p>Work from anywhere. We're distributed globally and communicate asynchronously.</p>
                    </div>
                    <div className="value-item">
                        <h4>Ownership</h4>
                        <p>You'll own projects end-to-end. No micromanagement, just results.</p>
                    </div>
                    <div className="value-item">
                        <h4>Ship fast</h4>
                        <p>We move quickly and iterate in public. Perfect is the enemy of good.</p>
                    </div>
                    <div className="value-item">
                        <h4>Founder empathy</h4>
                        <p>Everything we do is designed to help our founders succeed.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}
