import "./pricing.css"
import Navbar from "../../components/navbar/navbar.tsx";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import { pricingPlans, type PricingPlan, type Feature } from "./pricingData.ts";

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(false);

    const formatPrice = (plan: PricingPlan) => {
        if (plan.monthlyPrice === 0) return "$0";
        
        if (isAnnual) {
            const monthlyEquivalent = plan.annualPrice / 12;
            return `$${Math.floor(monthlyEquivalent)}`;
        }
        
        return `$${plan.monthlyPrice}`;
    };

    const getPeriodText = (plan: PricingPlan) => {
        if (plan.monthlyPrice === 0) return "/mo";
        if (plan.id === 'enterprise') return "/mo/seat";
        return "/mo";
    };

    const renderFeatureIcon = (feature: Feature) => {
        if (feature.icon === 'check') {
            return <span className="check-icon">✓</span>;
        }
        return <span className="plus-icon">+</span>;
    };

    return <>
        <Navbar />
        <div className="pricing-page">
            {/* Header Section */}
            <div className="pricing-header">
                <h1 className="pricing-title">Pricing</h1>
                <p className="pricing-description">
                    Whether you're using Mythea for research, presentations, 
                    essays, or any high school assignment, it's fully free to start.
                </p>
                
                {/* Billing Toggle */}
                <div className="billing-toggle">
                    <button 
                        className={`toggle-btn ${!isAnnual ? 'active' : ''}`}
                        onClick={() => setIsAnnual(false)}
                    >
                        Monthly
                    </button>
                    <button 
                        className={`toggle-btn ${isAnnual ? 'active' : ''}`}
                        onClick={() => setIsAnnual(true)}
                    >
                        Annually
                        {isAnnual && <span className="discount-badge">Save 17%</span>}
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="pricing-container">
                {pricingPlans.map((plan) => (
                    <div 
                        key={plan.id} 
                        className={`pricing-card ${plan.isFeatured ? 'featured' : ''} ${plan.isEnterprise ? 'enterprise' : ''}`}
                    >
                        {plan.isFeatured && plan.badge && (
                            <div className="featured-badge">{plan.badge}</div>
                        )}
                        
                        <div className="card-header">
                            <h2 className="plan-name">{plan.name}</h2>
                            <div className="plan-price">
                                <span className="price">{formatPrice(plan)}</span>
                                <span className="period">{getPeriodText(plan)}</span>
                            </div>
                            {isAnnual && plan.monthlyPrice > 0 && (
                                <div className="annual-savings">
                                    Billed annually (${isAnnual ? plan.annualPrice : plan.monthlyPrice * 12}/year)
                                </div>
                            )}
                            <p className="plan-description">{plan.description}</p>
                        </div>
                        
                        <button className={`plan-button plan-button-${plan.buttonType}`}>
                            {plan.buttonText}
                        </button>
                        
                        <div className="features-list">
                            {plan.features.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    {renderFeatureIcon(feature)}
                                    <span>{feature.text}</span>
                                    {feature.badge && (
                                        <span className="feature-badge">{feature.badge}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
        <Footer />
    </>
}
