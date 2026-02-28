import React from 'react';
import { ShoppingBag, TrendingUp, Factory, Truck, Briefcase, Globe, AlertCircle, Clock, TrendingDown, RefreshCw, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const stats = [
        { icon: <AlertCircle size={32} />, title: "Manual Invoice Errors", value: "60%", desc: "of invoice errors are caused by manual entry, costing significant time and money", color: "red" },
        { icon: <Clock size={32} />, title: "Time-Consuming Processes", value: "8 Days", desc: "taken per invoice for manual processing, delaying approvals and productivity", color: "orange" },
        { icon: <TrendingDown size={32} />, title: "Payment Delays", value: "58%", desc: "of B2B invoice value is overdue in the UAE, creating cash flow strain", color: "yellow" },
        { icon: <RefreshCw size={32} />, title: "VAT Compliance Risks", value: "AED 2,500", desc: "penalty per offense for failure to issue proper tax invoices", color: "blue" }
    ];

    const industries = [
        { icon: <ShoppingBag size={32} />, title: "Retail", desc: "Automate billing and ensure compliance with UAE e-invoicing regulations." },
        { icon: <TrendingUp size={32} />, title: "Trading", desc: "Streamline invoice generation and financial tracking to reduce manual work." },
        { icon: <Factory size={32} />, title: "Manufacturing", desc: "Automated invoicing and ERP integration for efficient operations." },
        { icon: <Truck size={32} />, title: "Logistics", desc: "Manage shipment billing and documentation efficiently." },
        { icon: <Briefcase size={32} />, title: "Service Businesses", desc: "Simplify billing and automate recurring invoices securely." },
        { icon: <Globe size={32} />, title: "E-commerce", desc: "Manage high-volume transactions with payment gateway integration." }
    ];

    const reasons = [
        "UAE-focused compliance expertise",
        "Strong ERP & systems background",
        "Vendor-neutral advisory",
        "Local support & accountability",
        "Clear pricing & structured delivery",
        "Long-term partnership approach"
    ];

    const implementationTimeline = [
        {
            phase: 'Phase 1',
            audience: 'Larger Business',
            qualifier: 'Revenue ≥ AED 50 million',
            deadlines: [
                { label: 'Appoint accredited service provider', date: '31 July 2026' },
                { label: 'Implement EIS', date: '1 January 2027' }
            ]
        },
        {
            phase: 'Phase 2',
            audience: 'Other Business',
            qualifier: 'Revenue < AED 50 million',
            deadlines: [
                { label: 'Appoint accredited service provider', date: '31 March 2027' },
                { label: 'Implement EIS', date: '1 July 2027' }
            ]
        },
        {
            phase: 'Phase 3',
            audience: 'Government Entities',
            qualifier: null,
            deadlines: [
                { label: 'Appoint accredited service provider', date: '31 March 2027' },
                { label: 'Implement EIS', date: '1 October 2027' }
            ]
        }
    ];

    const trustHighlights = [
        { title: 'Successful Deployments', desc: 'Our team has a 100% success rate in integrating ERP systems with compliant tax portals.' },
        { title: 'Seamless Integration', desc: 'Automate thousands of monthly invoices with direct synchronization to your accounting software.' },
        { title: '100% Tax Compliance', desc: 'Stay fully aligned with UAE FTA regulations and avoid costly manual filing errors.' }
    ];

    const testimonials = [
        { quote: 'Real-time invoice generation and secure storage have improved our workflow and record management.', name: 'Priya N', role: 'Procurement Head' },
        { quote: 'E-invoicing has completely streamlined our billing process. What used to take hours is now done in minutes.', name: 'Ahmed R', role: 'Finance Manager' },
        { quote: 'The system is simple, fast, and very reliable. It helped us reduce manual errors significantly.', name: 'Sarah K', role: 'Accounts Executive' },
        { quote: 'We were worried about compliance, but this solution made UAE e-invoicing requirements easy to manage.', name: 'Faisal M', role: 'Business Owner' }
    ];

    return (
        <section id="about" className="about-section">
            {/* Intro */}
            <div className="about-intro-container">
                <div className="container">
                    <h2 className="section-title">About Our Company</h2>
                    <p className="lead-text">
                        We are a technology and compliance consulting company focused on helping businesses transition to efficient, automated, and compliant invoicing systems.
                    </p>
                    <p className="intro-text">
                        Our goal is to simplify complex business processes and ensure organizations remain compliant with regulatory requirements while improving operational efficiency.
                    </p>
                    <div className="about-cta-row">
                        <Link to="/contact" className="btn btn-primary">Talk to our team</Link>
                        <Link to="/services" className="btn btn-outline">Explore more</Link>
                    </div>
                </div>
            </div>

            {/* Challenges */}
            <div className="challenges-container">
                <div className="container">
                    <h3 className="subsection-title">Key Challenges Faced by UAE Finance Teams</h3>
                    <p className="subsection-desc">Manual processes, delayed payments, and compliance risks are costing businesses time, money, and efficiency.</p>
                    <div className="challenges-grid">
                        {stats.map((stat, index) => (
                            <div className={`challenge-card color-${stat.color}`} key={index}>
                                <div className="icon-wrapper">{stat.icon}</div>
                                <div className="stat-value">{stat.value}</div>
                                <h3>{stat.title}</h3>
                                <p>{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Story & Vision */}
            <div className="story-container">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <h3>Our Story</h3>
                            <h4 className="story-subtitle">Our Experience</h4>
                            <p>
                            OTOMATION  is a leading TaxTech and compliance automation platform, empowering CFOs, finance leaders, and compliance teams across the UAE to manage e-Invoicing, VAT, and digital reporting with confidence. Powered by Agentic AI, OTOMATION simplifies compliance, accelerates automation, and keeps finance teams ahead of evolving FTA and ZATCA mandates. With over 135 million invoices processed annually, 10,000+ customers, and 100+ ERP integrations, OTOMATION provides a unified ecosystem for the CFO’s office, connecting all financial and compliance workflows in one seamless platform.
                            </p>
                        </div>
                        <div className="vision-mission">
                            <div className="vm-card vision">
                                <h4>Our Vision</h4>
                                <p>
                                To drive economic growth by helping enterprises become more efficient and globally competitive through compliance automation. With OTOMATION we aim to power a digital-first future where businesses thrive with confidence and speed.
                                </p>
                            </div>
                            <div className="vm-card mission">
                                <h4>Our Mission</h4>
                                <p>
                                To  drive ecnomic  growth by helping entriprises become more efficent and globally compititive through compilence through automation. With Otomation we aim to power a digital-first future where bussiness thive with confident and speed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* E-Invoicing Education */}
            <div className="einvoicing-container">
                <div className="container">
                    <h3>About UAE E-Invoicing</h3>
                    <p>
                        UAE e-Invoicing is a digital system that allows businesses to generate and exchange invoices electronically in a standardized format. It improves accuracy, speeds up processing, ensures compliance with regulations, and helps businesses manage financial records securely and efficiently.
                    </p>
                    <p className="einvoicing-note">
                        The UAE E-Invoicing system, introduced by the Federal Tax Authority (FTA), is a major step toward digital tax transformation. Under this framework, all Business-to-Business (B2B) and Business-to-Government (B2G) invoices will be electronically generated, transmitted, and validated through a structured, FTA-approved format — replacing traditional paper or PDF invoices.
                    </p>
                    <div className="einvoicing-actions">
                        <Link to="/solutions" className="btn btn-primary">For more details</Link>
                    </div>
                </div>
            </div>

            {/* Mandatory Implementation Timeline */}
            <div className="timeline-container">
                <div className="container">
                    <h3 className="subsection-title">UAE E-Invoicing: Mandatory Implementation Timeline</h3>
                    <p className="subsection-desc">
                        Understand key deadlines and compliance milestones for large businesses, SMEs, and government entities under the FTA eInvoicing mandate.
                    </p>
                    <div className="implementation-grid">
                        {implementationTimeline.map((item) => (
                            <div className="implementation-card" key={item.phase}>
                                <div className="implementation-phase">{item.phase}</div>
                                <h4 className="implementation-title">{item.audience}</h4>
                                {item.qualifier ? <div className="implementation-qualifier">{item.qualifier}</div> : null}
                                <ul className="implementation-deadlines">
                                    {item.deadlines.map((d) => (
                                        <li key={`${item.phase}-${d.label}`}>
                                            <span className="deadline-label">{d.label}</span>
                                            <span className="deadline-date">{d.date}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="timeline-actions">
                        <Link to="/contact" className="btn btn-primary">Talk to our expert</Link>
                    </div>
                </div>
            </div>

            {/* Industries */}
            <div className="industries-container">
                <div className="container">
                    <h3 className="subsection-title">Industries We Serve</h3>
                    <div className="industries-grid">
                        {industries.map((item, index) => (
                            <div className="industry-card" key={index}>
                                <div className="icon-box">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="why-us-container">
                <div className="container">
                    <h3 className="subsection-title on-dark">Why Choose Us</h3>
                    <div className="reasons-list">
                        {reasons.map((reason, index) => (
                            <div className="reason-item" key={index}>
                                <CheckCircle className="check-icon" size={24} />
                                <span>{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trusted by Businesses */}
            <div className="trusted-container">
                <div className="container">
                    <h3 className="subsection-title">Trusted by Businesses</h3>
                    <p className="subsection-desc">We have successfully empowered hundreds of UAE companies to transition to digital e-invoicing.</p>

                    <div className="trust-grid">
                        {trustHighlights.map((h) => (
                            <div className="trust-card" key={h.title}>
                                <h4>{h.title}</h4>
                                <p>{h.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((t) => (
                            <figure className="testimonial-card" key={t.name}>
                                <blockquote>“{t.quote}”</blockquote>
                                <figcaption>
                                    <div className="testimonial-name">{t.name}</div>
                                    <div className="testimonial-role">{t.role}</div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="final-cta-container">
                <div className="container final-cta-grid">
                    <div>
                        <h3>Ready to simplify your invoicing and automation processes?</h3>
                        <p>Talk to our team today.</p>
                    </div>
                    <div className="final-cta-actions">
                        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                        <Link to="/contact" className="btn btn-outline">Talk to our expert</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
