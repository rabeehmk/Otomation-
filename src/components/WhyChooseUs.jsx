import React from 'react';
import { Award, Clock, Users, ShieldCheck, Zap, Headphones } from 'lucide-react';
import './WhyChooseUs.css';

const reasons = [
    {
        icon: <Award size={32} />,
        title: "MoF Aligned Strategy",
        desc: "Our frameworks are built strictly on Ministerial Decisions 243 & 244."
    },
    {
        icon: <Clock size={32} />,
        title: "Ready for Pilot (July 2026)",
        desc: "Get your systems tested and certified during the voluntary pilot phase."
    },
    {
        icon: <Users size={32} />,
        title: "Cross-Industry Expertise",
        desc: "Proven track record in Retail, Logistics, and Manufacturing ERPs."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Guaranteed Compatibility",
        desc: "We ensure your invoices meet the strict PINT AE validation rules."
    },
    {
        icon: <Zap size={32} />,
        title: "Zero Downtime Cutover",
        desc: "Seamless transition from legacy billing to e-invoicing without business disruption."
    },
    {
        icon: <Headphones size={32} />,
        title: "Local UAE Support",
        desc: "On-ground technical teams available for immediate troubleshooting."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="section why-choose-us">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Why Otomation</div>
                    <h2 className="section-title">Your Trusted E-Invoicing Partner</h2>
                    <p className="section-subtitle">
                        Navigating the transition to mandatory e-invoicing requires more than just software; it needs strategic foresight and technical precision.
                    </p>
                </div>

                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <div className="reason-card" key={index}>
                            <div className="reason-icon">
                                {reason.icon}
                            </div>
                            <h3>{reason.title}</h3>
                            <p>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
