import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <div className="section-header" style={{ paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center', background: '#ffffff' }}>
                <div className="container">
                    <h1 className="section-title" style={{ color: '#000080' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.1rem', color: '#475569' }}>
                        Get in touch with our expert team for your compliance assessment.
                    </p>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default ContactPage;
