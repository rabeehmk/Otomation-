import React from 'react';
import IndustriesSection from '../components/IndustriesSection';
import WhoWeServe from '../components/WhoWeServe';

const IndustriesPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <h1 className="section-title">Industries We Serve</h1>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem', color: '#666' }}>
                    Specialized e-invoicing solutions for diverse industry sectors
                </p>
            </div>
            <IndustriesSection />
            <WhoWeServe />
        </div>
    );
};

export default IndustriesPage;
