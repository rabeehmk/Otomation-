import React from 'react';
import './Partners.css';

const partners = [
    "GBH International Facilities Management",
    "R9 International",
    "Leskor Metal Industries",
    "GBH International General Trading",
    "GBH International Contracting",
    // Duplicated for seamless scrolling
    "GBH International Facilities Management",
    "R9 International",
    "Leskor Metal Industries",
    "GBH International General Trading",
    "GBH International Contracting"
];

const Partners = () => {
    return (
        <section className="partners-section">
            <div className="container">
                <p className="partners-title">Trusted by Industry Leaders</p>

                <div className="marquee-container">
                    <div className="marquee-track">
                        {partners.map((partner, index) => (
                            <div className="partner-logo" key={index}>
                                {/* Placeholder for Logo Image */}
                                <span className="logo-text">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
