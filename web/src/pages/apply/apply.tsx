import "./apply.css"
import { useState, useEffect, useCallback } from "react"

// Types
interface FormData {
    fullName: string
    email: string
    linkedin: string
    portfolio: string
    age: string
    school: string
    workArrangement: string[]
    roles: string[]
}

interface StepProps {
    onNext: () => void
    onBack: () => void
    canGoBack: boolean
}

// Form Step Components
function WelcomeStep({ onNext }: { onNext: () => void }) {
    return (
        <div className="step-content welcome-step">
            <div className="welcome-icon">
                <svg viewBox="0 0 80 80" fill="none">
                    {/* Orbital paths */}
                    <ellipse cx="40" cy="40" rx="36" ry="14" stroke="white" strokeWidth="0.5" opacity="0.2" className="orbit orbit-1" />
                    <ellipse cx="40" cy="40" rx="28" ry="28" stroke="white" strokeWidth="0.5" opacity="0.15" className="orbit orbit-2" />
                    <ellipse cx="40" cy="40" rx="36" ry="14" stroke="white" strokeWidth="0.5" opacity="0.2" className="orbit orbit-3" style={{ transform: 'rotate(60deg)', transformOrigin: 'center' }} />
                    <ellipse cx="40" cy="40" rx="36" ry="14" stroke="white" strokeWidth="0.5" opacity="0.2" className="orbit orbit-4" style={{ transform: 'rotate(120deg)', transformOrigin: 'center' }} />
                    
                    {/* Constellation lines */}
                    <line x1="40" y1="40" x2="58" y2="28" stroke="white" strokeWidth="0.5" opacity="0.3" />
                    <line x1="40" y1="40" x2="22" y2="52" stroke="white" strokeWidth="0.5" opacity="0.3" />
                    <line x1="40" y1="40" x2="52" y2="58" stroke="white" strokeWidth="0.5" opacity="0.3" />
                    <line x1="40" y1="40" x2="24" y2="26" stroke="white" strokeWidth="0.5" opacity="0.3" />
                    <line x1="58" y1="28" x2="68" y2="22" stroke="white" strokeWidth="0.5" opacity="0.2" />
                    <line x1="22" y1="52" x2="12" y2="58" stroke="white" strokeWidth="0.5" opacity="0.2" />
                    
                    {/* Central star */}
                    <circle cx="40" cy="40" r="4" fill="white" className="central-star" />
                    <circle cx="40" cy="40" r="8" fill="white" opacity="0.1" className="central-glow" />
                    
                    {/* Constellation stars */}
                    <circle cx="58" cy="28" r="2.5" fill="white" className="const-star const-star-1" />
                    <circle cx="22" cy="52" r="2" fill="white" className="const-star const-star-2" />
                    <circle cx="52" cy="58" r="2" fill="white" className="const-star const-star-3" />
                    <circle cx="24" cy="26" r="1.5" fill="white" className="const-star const-star-4" />
                    <circle cx="68" cy="22" r="1.5" fill="white" className="const-star const-star-5" />
                    <circle cx="12" cy="58" r="1" fill="white" className="const-star const-star-6" />
                    
                    {/* Distant stars */}
                    <circle cx="70" cy="40" r="1" fill="white" opacity="0.4" className="distant-star distant-1" />
                    <circle cx="10" cy="35" r="0.8" fill="white" opacity="0.3" className="distant-star distant-2" />
                    <circle cx="35" cy="12" r="1" fill="white" opacity="0.4" className="distant-star distant-3" />
                    <circle cx="48" cy="70" r="0.8" fill="white" opacity="0.3" className="distant-star distant-4" />
                    <circle cx="18" cy="18" r="0.6" fill="white" opacity="0.25" className="distant-star distant-5" />
                    <circle cx="65" cy="60" r="0.6" fill="white" opacity="0.25" className="distant-star distant-6" />
                    
                    {/* Orbiting bodies */}
                    <circle cx="40" cy="40" r="1.5" fill="white" className="orbiting-body orbiting-1" />
                    <circle cx="40" cy="40" r="1" fill="white" opacity="0.6" className="orbiting-body orbiting-2" />
                </svg>
            </div>
            <h1>Apply to Proximaz</h1>
            <p>We're looking for ambitious builders under 20 to join our next cohort. This application takes about 3-5 minutes.</p>
            <button className="start-button" onClick={onNext}>
                Start Application
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
            <p className="hint">press <span className="key">Enter ↵</span></p>
        </div>
    )
}

interface TextInputStepProps extends StepProps {
    question: string
    subtext?: string
    placeholder: string
    value: string
    onChange: (value: string) => void
    type?: string
    required?: boolean
}

function TextInputStep({ 
    question, 
    subtext, 
    placeholder, 
    value, 
    onChange, 
    onNext, 
    onBack: _onBack, 
    canGoBack: _canGoBack,
    type = "text",
    required = true
}: TextInputStepProps) {
    const isValid = !required || value.trim().length > 0

    return (
        <div className="step-content">
            <h2>{question}</h2>
            {subtext && <p className="step-subtext">{subtext}</p>}
            <input
                type={type}
                className="text-input"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
            />
            <div className="step-actions">
                <button 
                    className="ok-button" 
                    onClick={onNext}
                    disabled={!isValid}
                >
                    OK
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </button>
                <p className="hint">press <span className="key">Enter ↵</span></p>
            </div>
        </div>
    )
}

interface MultipleChoiceStepProps extends StepProps {
    question: string
    subtext?: string
    options: { label: string; value: string }[]
    selected: string[]
    onChange: (values: string[]) => void
    multiSelect?: boolean
}

function MultipleChoiceStep({
    question,
    subtext,
    options,
    selected,
    onChange,
    onNext,
    onBack: _onBack,
    canGoBack: _canGoBack,
    multiSelect = false
}: MultipleChoiceStepProps) {
    const handleSelect = (value: string) => {
        if (multiSelect) {
            if (selected.includes(value)) {
                onChange(selected.filter(v => v !== value))
            } else {
                onChange([...selected, value])
            }
        } else {
            onChange([value])
        }
    }

    const isValid = selected.length > 0

    return (
        <div className="step-content">
            <h2>{question}</h2>
            {subtext && <p className="step-subtext">{subtext}</p>}
            <div className="options-grid">
                {options.map((option, index) => (
                    <button
                        key={option.value}
                        className={`option-button ${selected.includes(option.value) ? 'selected' : ''}`}
                        onClick={() => handleSelect(option.value)}
                    >
                        <span className="option-key">{String.fromCharCode(65 + index)}</span>
                        <span className="option-label">{option.label}</span>
                        {selected.includes(option.value) && (
                            <svg className="option-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        )}
                    </button>
                ))}
            </div>
            {multiSelect && <p className="multi-hint">Select all that apply</p>}
            <div className="step-actions">
                <button 
                    className="ok-button" 
                    onClick={onNext}
                    disabled={!isValid}
                >
                    OK
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </button>
                <p className="hint">press <span className="key">Enter ↵</span></p>
            </div>
        </div>
    )
}

function SubmitStep({ formData, workArrangementOptions, roleOptions }: { 
    formData: FormData;
    workArrangementOptions: { label: string; value: string }[];
    roleOptions: { label: string; value: string }[];
}) {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        // Dummy submit - just log and show success
        console.log("Form submitted:", formData)
        setSubmitted(true)
    }

    // Helper to convert values to labels
    const getLabels = (values: string[], options: { label: string; value: string }[]) => {
        return values.map(v => options.find(o => o.value === v)?.label || v).join(", ")
    }

    if (submitted) {
        return (
            <div className="step-content submit-step">
                <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <h1>Application Submitted!</h1>
                <p>Thanks for applying to Proximaz. We'll review your application and get back to you within 5-7 business days.</p>
                <a href="/" className="back-home-button">Back to Home</a>
            </div>
        )
    }

    return (
        <div className="step-content submit-step">
            <div className="review-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            </div>
            <h1>Ready to submit?</h1>
            <p>Make sure all your information is correct. You can go back to make changes.</p>
            <div className="review-summary">
                <div className="review-item">
                    <span className="review-label">Name</span>
                    <span className="review-value">{formData.fullName || "—"}</span>
                </div>
                <div className="review-item">
                    <span className="review-label">Email</span>
                    <span className="review-value">{formData.email || "—"}</span>
                </div>
                {formData.linkedin && (
                    <div className="review-item">
                        <span className="review-label">LinkedIn</span>
                        <span className="review-value review-value-link">{formData.linkedin}</span>
                    </div>
                )}
                {formData.portfolio && (
                    <div className="review-item">
                        <span className="review-label">Portfolio</span>
                        <span className="review-value review-value-link">{formData.portfolio}</span>
                    </div>
                )}
                <div className="review-item">
                    <span className="review-label">Age</span>
                    <span className="review-value">{formData.age || "—"}</span>
                </div>
                <div className="review-item">
                    <span className="review-label">School</span>
                    <span className="review-value">{formData.school || "—"}</span>
                </div>
                <div className="review-item">
                    <span className="review-label">Work Arrangement</span>
                    <span className="review-value">{getLabels(formData.workArrangement, workArrangementOptions) || "—"}</span>
                </div>
                <div className="review-item">
                    <span className="review-label">Roles</span>
                    <span className="review-value">{getLabels(formData.roles, roleOptions) || "—"}</span>
                </div>
            </div>
            <button className="submit-button" onClick={handleSubmit}>
                Submit Application
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
        </div>
    )
}

// Main Apply Page
export default function ApplyPage() {
    const [currentStep, setCurrentStep] = useState(0)
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        linkedin: "",
        portfolio: "",
        age: "",
        school: "",
        workArrangement: [],
        roles: []
    })

    const totalSteps = 10 // Including welcome and submit

    const updateFormData = <K extends keyof FormData>(key: K, value: FormData[K]) => {
        setFormData(prev => ({ ...prev, [key]: value }))
    }

    const goNext = useCallback(() => {
        if (currentStep < totalSteps - 1) {
            setDirection('forward')
            setCurrentStep(prev => prev + 1)
        }
    }, [currentStep, totalSteps])

    const goBack = () => {
        if (currentStep > 0) {
            setDirection('backward')
            setCurrentStep(prev => prev - 1)
        }
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && currentStep < totalSteps - 1) {
                goNext()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentStep, goNext])

    const workArrangementOptions = [
        { label: "Full-time", value: "fulltime" },
        { label: "Part-time", value: "parttime" },
        { label: "Internship", value: "internship" },
        { label: "Contract / Freelance", value: "contract" }
    ]

    const roleOptions = [
        { label: "Founder / Co-founder", value: "founder" },
        { label: "Software Engineer", value: "engineer" },
        { label: "Product / Design", value: "product" },
        { label: "Growth / Marketing", value: "growth" },
        { label: "Operations", value: "operations" },
        { label: "Other", value: "other" }
    ]

    const renderStep = () => {
        const stepProps = {
            onNext: goNext,
            onBack: goBack,
            canGoBack: currentStep > 0
        }

        switch (currentStep) {
            case 0:
                return <WelcomeStep onNext={goNext} />
            case 1:
                return (
                    <TextInputStep
                        {...stepProps}
                        question="What's your full name?"
                        placeholder="Type your answer here..."
                        value={formData.fullName}
                        onChange={(v) => updateFormData('fullName', v)}
                    />
                )
            case 2:
                return (
                    <TextInputStep
                        {...stepProps}
                        question="What's your email address?"
                        subtext="We'll use this to contact you about your application."
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(v) => updateFormData('email', v)}
                        type="email"
                    />
                )
            case 3:
                return (
                    <TextInputStep
                        {...stepProps}
                        question="What's your LinkedIn profile?"
                        subtext="Share your professional profile with us."
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedin}
                        onChange={(v) => updateFormData('linkedin', v)}
                        required={false}
                    />
                )
            case 4:
                return (
                    <TextInputStep
                        {...stepProps}
                        question="Share your portfolio, GitHub, or personal website"
                        subtext="Show us what you've built! Multiple links are welcome."
                        placeholder="https://github.com/username"
                        value={formData.portfolio}
                        onChange={(v) => updateFormData('portfolio', v)}
                        required={false}
                    />
                )
            case 5:
                return (
                    <TextInputStep
                        {...stepProps}
                        question="How old are you?"
                        placeholder="Type your age..."
                        value={formData.age}
                        onChange={(v) => updateFormData('age', v)}
                        type="number"
                    />
                )
            case 6:
                return (
                    <TextInputStep
                        {...stepProps}
                        question="Where are you currently studying?"
                        subtext="University, high school, or self-taught — all paths are valid."
                        placeholder="e.g., Stanford University, Self-taught"
                        value={formData.school}
                        onChange={(v) => updateFormData('school', v)}
                    />
                )
            case 7:
                return (
                    <MultipleChoiceStep
                        {...stepProps}
                        question="What work arrangement are you interested in?"
                        options={workArrangementOptions}
                        selected={formData.workArrangement}
                        onChange={(v) => updateFormData('workArrangement', v)}
                        multiSelect={true}
                    />
                )
            case 8:
                return (
                    <MultipleChoiceStep
                        {...stepProps}
                        question="What role are you most interested in?"
                        subtext="Select the roles that best match your skills and interests."
                        options={roleOptions}
                        selected={formData.roles}
                        onChange={(v) => updateFormData('roles', v)}
                        multiSelect={true}
                    />
                )
            case 9:
                return <SubmitStep formData={formData} workArrangementOptions={workArrangementOptions} roleOptions={roleOptions} />
            default:
                return null
        }
    }

    return (
        <div className="apply-page">
            {/* Progress bar */}
            {currentStep > 0 && currentStep < totalSteps - 1 && (
                <div className="progress-bar">
                    <div 
                        className="progress-fill" 
                        style={{ width: `${((currentStep) / (totalSteps - 2)) * 100}%` }}
                    />
                </div>
            )}

            {/* Navigation arrows */}
            {currentStep > 0 && (
                <button className="nav-arrow nav-back" onClick={goBack} aria-label="Go back">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
            )}
            {currentStep > 0 && currentStep < totalSteps - 1 && (
                <button className="nav-arrow nav-forward" onClick={goNext} aria-label="Go forward">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            )}

            {/* Step content */}
            <div className={`step-wrapper ${direction}`} key={currentStep}>
                {renderStep()}
            </div>

            {/* Step counter */}
            {currentStep > 0 && currentStep < totalSteps - 1 && (
                <div className="step-counter">
                    {currentStep} / {totalSteps - 2}
                </div>
            )}
        </div>
    )
}
