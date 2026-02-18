import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, BarChart } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg-glow"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="gradient-text">Otomation</span> E-Invoicing Compliance
                    </h1>
                    <p className="hero-subtitle">
                        Ministerial Decisions 243 & 244 Compliant. Secure PEPPOL 5-Corner Model Integration for UAE Businesses.
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Start Phase 1 Audit <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </Link>
                        <Link to="/solutions" className="btn btn-outline btn-lg">
                            View Solutions
                        </Link>
                    </div>

                    <div className="hero-features">
                        <span className="feature"><CheckCircle size={18} className="icon" /> Pilot Ready (July 2026)</span>
                        <span className="feature"><CheckCircle size={18} className="icon" /> Secure TDD Reporting</span>
                        <span className="feature"><CheckCircle size={18} className="icon" /> Accredited ASP Partners</span>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-3d-container">
                        <div className="visual-card main-card">
                            <div className="card-header">
                                <div className="brand-mark">
                                    <Zap size={20} color="white" fill="white" />
                                </div>
                                <div className="card-title">Tax Invoice #INV-2026</div>
                                <div className="card-status">Valid PINT AE</div>
                            </div>
                            <div className="card-body">
                                <div className="data-row">
                                    <span className="label">Taxable Amount</span>
                                    <span className="value">AED 150,000.00</span>
                                </div>
                                <div className="data-row">
                                    <span className="label">VAT (5%)</span>
                                    <span className="value">AED 7,500.00</span>
                                </div>
                                <div className="data-graph">
                                    <div className="graph-bar" style={{ height: '40%' }}></div>
                                    <div className="graph-bar" style={{ height: '70%' }}></div>
                                    <div className="graph-bar" style={{ height: '50%' }}></div>
                                    <div className="graph-bar active" style={{ height: '85%' }}></div>
                                    <div className="graph-bar" style={{ height: '60%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="visual-card floating-card card-compliance">
                            <ShieldCheck size={24} className="icon-shield" />
                            <div className="floating-text">
                                <span className="title">FTA Reporting</span>
                                <span className="subtitle">Real-time TDD Sent</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
