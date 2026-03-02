import React from 'react';
import IndustriesSection from '../components/IndustriesSection';
import WhoWeServe from '../components/WhoWeServe';

const IndustriesPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <div className="section-header">
                    <h1 className="section-title">Industries We Serve</h1>
                    <p className="section-intro" style={{ marginBottom: '3rem' }}>
                        Specialized e-invoicing solutions for diverse industry sectors
                    </p>
                </div>
            </div>
            <IndustriesSection />
            <WhoWeServe />
        </div>
    );
};

export default IndustriesPage;
