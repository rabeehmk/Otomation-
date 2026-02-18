import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

const ServicesSection = () => {
    return (
        <section id="services" className="services-section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="section-header">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="section-tag">Our Services</div>
                    <h2 className="section-title">Comprehensive E-Invoicing Solutions</h2>
                    <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
                        We provide end-to-end e-invoicing compliance services for UAE businesses of all sizes. From readiness assessments to full implementation and managed compliance, we have you covered.
                    </p>

                    <div className="services-summary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem', textAlign: 'left' }}>
                        <div className="summary-card" style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--secondary)' }}>Assessment</h3>
                            <p style={{ color: 'var(--text-light)' }}>Gap analysis and roadmap planning for compliance.</p>
                        </div>
                        <div className="summary-card" style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--secondary)' }}>Implementation</h3>
                            <p style={{ color: 'var(--text-light)' }}>Technical setup, integration, and go-live support.</p>
                        </div>
                        <div className="summary-card" style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--secondary)' }}>Managed Services</h3>
                            <p style={{ color: 'var(--text-light)' }}>Ongoing monitoring, validation, and support.</p>
                        </div>
                    </div>

                    <Link to="/services" className="btn btn-primary">
                        View All Services <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

