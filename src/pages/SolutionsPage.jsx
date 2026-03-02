import React from 'react';
import SolutionsSection from '../components/SolutionsSection';
import SystemAgnostic from '../components/SystemAgnostic';
import OurApproach from '../components/OurApproach';

const SolutionsPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <div className="section-header">
                    <h1 className="section-title">Our Solutions</h1>
                    <p className="section-intro" style={{ marginBottom: '3rem' }}>
                        Comprehensive e-invoicing solutions tailored for UAE businesses
                    </p>
                </div>
            </div>
            <SolutionsSection />
            <SystemAgnostic />
            <OurApproach />
        </div>
    );
};

export default SolutionsPage;
