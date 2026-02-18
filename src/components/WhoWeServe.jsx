import React from 'react';
import { Building2, ShoppingBag, Truck, Construction, Briefcase, Globe } from 'lucide-react';
import './WhoWeServe.css';

const sectors = [
    {
        icon: <Building2 size={40} />,
        title: 'SMEs & Mid-sized',
        desc: 'Streamlined compliance for growing businesses with minimal IT overhead.'
    },
    {
        icon: <ShoppingBag size={40} />,
        title: 'Retail & E-Commerce',
        desc: 'High-volume transaction handling with instant POS integration.'
    },
    {
        icon: <Truck size={40} />,
        title: 'Logistics & Distribution',
        desc: 'Unified invoicing for complex supply chains and transport networks.'
    },
    {
        icon: <Construction size={40} />,
        title: 'Contracting & Real Estate',
        desc: 'Project-based billing solutions compliant with VAT regulations.'
    },
    {
        icon: <Briefcase size={40} />,
        title: 'Professional Services',
        desc: 'Consultancies and agencies requiring precise service-based invoicing.'
    },
    {
        icon: <Globe size={40} />,
        title: 'Multinational Corps',
        desc: 'Cross-border compliance and consolidated reporting for MNCs.'
    }
];

const WhoWeServe = () => {
    return (
        <section className="section bg-light" id="who-we-serve">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Industries We Empower</h2>
                    <p className="section-subtitle">
                        Tailored e-invoicing solutions for diverse business sectors across the UAE.
                    </p>
                </div>

                <div className="serve-grid">
                    {sectors.map((sector, index) => (
                        <div className="serve-card" key={index}>
                            <div className="icon-container">
                                {sector.icon}
                            </div>
                            <h3>{sector.title}</h3>
                            <p>{sector.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeServe;
