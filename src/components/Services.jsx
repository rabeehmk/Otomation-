import React from 'react';
import { Search, Settings, Server, ShieldCheck, ArrowRight, CheckCircle, Users, Target, TrendingUp, FileText, Monitor, Database, BarChart3 } from 'lucide-react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <h1 className="hero-title">End-to-End E-Invoicing & Compliance Made Simple</h1>
                    <p className="hero-subtitle">
                        We help businesses transition from manual invoicing and legacy systems to fully compliant digital invoicing solutions—securely, efficiently, and on time.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </section>

            {/* Main Services Section */}
            <section id="services" className="section main-services-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-tag">It's Time to Start our Services</div>
                        <p className="section-intro">
                            We provide comprehensive e-invoicing solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="main-services-grid">
                        {/* Service 1 */}
                        <div className="main-service-card">
                            <div className="service-image-placeholder readiness-bg">
                                <Search size={48} />
                            </div>
                            <div className="service-content">
                                <h3>E-Invoicing Readiness & Assessment</h3>
                                <p>
                                    We evaluate your current invoicing processes, systems, and workflows to determine your readiness for UAE e-invoicing compliance. Our team identifies gaps, risks, and required changes, and provides a structured roadmap to help your business transition smoothly and on time.
                                </p>
                                <ul className="service-features">
                                    <li><CheckCircle size={16} /> Current system & process review</li>
                                    <li><CheckCircle size={16} /> Compliance gap analysis</li>
                                    <li><CheckCircle size={16} /> Readiness roadmap aligned to UAE phases</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="main-service-card">
                            <div className="service-image-placeholder implementation-bg">
                                <Settings size={48} />
                            </div>
                            <div className="service-content">
                                <h3>E-Invoicing Implementation</h3>
                                <p>
                                    We handle the complete setup and configuration required to enable compliant e-invoicing. From onboarding with an Accredited Service Provider (ASP) to integrating your existing systems, we ensure a smooth implementation and successful go-live.
                                </p>
                                <ul className="service-features">
                                    <li><CheckCircle size={16} /> ASP onboarding & configuration</li>
                                    <li><CheckCircle size={16} /> ERP / billing tool integration</li>
                                    <li><CheckCircle size={16} /> Portal-based invoicing setup (for non-ERP clients)</li>
                                    <li><CheckCircle size={16} /> UAT, testing & go-live support</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="main-service-card">
                            <div className="service-image-placeholder erp-bg">
                                <Database size={48} />
                            </div>
                            <div className="service-content">
                                <h3>ERP & Lightweight Accounting Setup</h3>
                                <p>
                                    For businesses that do not have a suitable system, we implement lightweight accounting or ERP solutions tailored to your operations. We configure VAT settings, invoice templates, and integrations to ensure your financial processes support compliant invoicing.
                                </p>
                                <ul className="service-features">
                                    <li><CheckCircle size={16} /> Zoho Books / Tally / Odoo implementation</li>
                                    <li><CheckCircle size={16} /> VAT configuration & invoice templates</li>
                                    <li><CheckCircle size={16} /> ERP + ASP integration</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="main-service-card">
                            <div className="service-image-placeholder managed-bg">
                                <ShieldCheck size={48} />
                            </div>
                            <div className="service-content">
                                <h3>Managed E-Invoicing Compliance</h3>
                                <p>
                                    Compliance does not end after implementation. We provide ongoing monitoring and support to ensure your invoices are validated, transmitted, and compliant with regulatory updates. Our team helps handle rejections, corrections, and audit requirements.
                                </p>
                                <ul className="service-features">
                                    <li><CheckCircle size={16} /> Ongoing monitoring & validation</li>
                                    <li><CheckCircle size={16} /> Rejection handling & corrections</li>
                                    <li><CheckCircle size={16} /> Credit / debit note support</li>
                                    <li><CheckCircle size={16} /> Regulatory updates & audit readiness</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="what-we-do-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-tag">What We Do</div>
                        <h2 className="section-title">We help UAE businesses comply with the upcoming UAE e-Invoicing mandate</h2>
                        <p className="section-subtitle">
                            We provide end-to-end services, regardless of the systems you currently use.
                        </p>
                    </div>

                    <div className="what-we-do-grid">
                        <div className="what-card">
                            <FileText size={32} />
                            <h4>Structured</h4>
                            <p>Properly formatted invoices</p>
                        </div>
                        <div className="what-card">
                            <CheckCircle size={32} />
                            <h4>Validated</h4>
                            <p>Compliance verified</p>
                        </div>
                        <div className="what-card">
                            <Server size={32} />
                            <h4>Transmitted</h4>
                            <p>Through Accredited Service Provider (ASP)</p>
                        </div>
                        <div className="what-card">
                            <ShieldCheck size={32} />
                            <h4>Audit-ready</h4>
                            <p>Complete documentation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Serve Section */}
            <section className="who-we-serve-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-tag">Who We Serve</div>
                        <h2 className="section-title">We work with businesses across the UAE</h2>
                    </div>

                    <div className="who-we-serve-grid">
                        <div className="serve-card">
                            <Users size={24} />
                            <span>SMEs & mid-sized companies</span>
                        </div>
                        <div className="serve-card">
                            <TrendingUp size={24} />
                            <span>Trading & distribution firms</span>
                        </div>
                        <div className="serve-card">
                            <Target size={24} />
                            <span>Contracting & services companies</span>
                        </div>
                        <div className="serve-card">
                            <Server size={24} />
                            <span>Suppliers & service providers</span>
                        </div>
                        <div className="serve-card">
                            <FileText size={24} />
                            <span>Businesses transitioning from Excel or legacy tools</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="our-approach-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-tag">Our Approach</div>
                        <h2 className="section-title">Four-Step Process to Compliance</h2>
                    </div>

                    <div className="approach-steps">
                        <div className="approach-step">
                            <div className="step-number">01</div>
                            <h3>Assess</h3>
                            <p>Understand your current setup</p>
                        </div>
                        <div className="approach-step">
                            <div className="step-number">02</div>
                            <h3>Implement</h3>
                            <p>Configure the right solution</p>
                        </div>
                        <div className="approach-step">
                            <div className="step-number">03</div>
                            <h3>Validate</h3>
                            <p>Test & go live confidently</p>
                        </div>
                        <div className="approach-step">
                            <div className="step-number">04</div>
                            <h3>Support</h3>
                            <p>Stay compliant continuously</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* System-Agnostic Approach Section */}
            <section className="system-agnostic-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-tag">System-Agnostic Approach</div>
                        <h2 className="section-title">We Work With Any System</h2>
                        <p className="section-subtitle">
                            From Excel to enterprise ERP platforms, we provide solutions for every business
                        </p>
                    </div>

                    <div className="system-cards-grid">
                        {/* Excel & Manual */}
                        <div className="system-card">
                            <div className="system-icon excel-icon">
                                <FileText size={40} />
                            </div>
                            <h3>Excel & Manual Billing</h3>
                            <p>
                                We provide efficient and accurate Excel and manual billing services to help businesses manage their financial records smoothly. Using Microsoft Excel, we prepare invoices, track payments, maintain billing records, and generate basic financial reports in an organized manner.
                            </p>
                        </div>

                        {/* POS Systems */}
                        <div className="system-card">
                            <div className="system-icon pos-icon">
                                <Monitor size={40} />
                            </div>
                            <h3>POS Systems</h3>
                            <p>
                                A POS system is a complete solution used to manage sales, billing, and inventory in retail stores, supermarkets, and businesses. It allows businesses to generate invoices quickly, track stock, record transactions, and produce sales reports in real time.
                            </p>
                        </div>

                        {/* CRM-only */}
                        <div className="system-card">
                            <div className="system-icon crm-icon">
                                <Users size={40} />
                            </div>
                            <h3>CRM-only Environments</h3>
                            <p>
                                A CRM-only environment refers to a business setup where customer data, sales activities, and communication are managed entirely within a Customer Relationship Management (CRM) system. This approach centralizes customer information, tracks leads and follow-ups, manages sales pipelines, and generates reports from a single platform.
                            </p>
                        </div>

                        {/* Accounting Software */}
                        <div className="system-card">
                            <div className="system-icon accounting-icon">
                                <BarChart3 size={40} />
                            </div>
                            <h3>Accounting Software</h3>
                            <p>
                                Accounting software is a digital solution used to manage a company's financial activities efficiently. It helps businesses record transactions, track income and expenses, generate invoices, manage payroll, and produce financial reports such as profit and loss statements.
                            </p>
                            <p className="system-note">
                                Using accounting software improves accuracy, saves time, and provides clear financial insights, helping businesses make better financial decisions and maintain organized records.
                            </p>
                        </div>

                        {/* ERP Platforms */}
                        <div className="system-card">
                            <div className="system-icon erp-icon">
                                <Database size={40} />
                            </div>
                            <h3>ERP Platforms</h3>
                            <p>
                                ERP platforms are integrated software systems used to manage and automate core business processes such as finance, inventory, sales, purchasing, human resources, and reporting in one centralized system.
                            </p>
                            <p className="system-note">
                                By using an ERP platform, businesses can improve efficiency, reduce manual work, maintain accurate data, and gain real-time insights, helping management make better and faster decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="final-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>We're Ready, Let's Talk.</h2>
                        <p>
                            Have questions about e-invoicing or compliance? Our team is ready to assist you with the right solution for your business.
                        </p>
                        <button className="btn btn-primary">Contact Us</button>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner */}
            <section className="bottom-cta-banner">
                <div className="container">
                    <div className="banner-content">
                        <div className="banner-text">
                            <h3>Ensure your invoicing processes are compliant, efficient, and future-ready.</h3>
                            <p>Let us help you implement the right solution with confidence.</p>
                        </div>
                        <button className="btn btn-primary">Start Your Project</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
