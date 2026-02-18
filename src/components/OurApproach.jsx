import React from 'react';
import { ClipboardList, Settings, CheckCircle, HeadphonesIcon } from 'lucide-react';
import './OurApproach.css';

const steps = [
    {
        id: 1,
        icon: <ClipboardList size={28} />,
        title: 'Assess & Plan',
        desc: 'We analyze your current systems and design a tailored compliance roadmap.'
    },
    {
        id: 2,
        icon: <Settings size={28} />,
        title: 'Integrate & Configure',
        desc: 'Seamlessly connect your ERP/POS with our middleware and ZATCA/FAME portals.'
    },
    {
        id: 3,
        icon: <CheckCircle size={28} />,
        title: 'Validate & Test',
        desc: 'Rigorous testing to ensure every invoice format meets strict regulatory standards.'
    },
    {
        id: 4,
        icon: <HeadphonesIcon size={28} />,
        title: 'Go-Live & Support',
        desc: 'Smooth deployment with ongoing monitoring and rapid issue resolution.'
    }
];

const OurApproach = () => {
    return (
        <section className="section" id="approach">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Proven Methodology</h2>
                    <p className="section-subtitle">
                        A structured, four-step process designed to simplify compliance and minimize disruption.
                    </p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    <div className="timeline-steps">
                        {steps.map((step, index) => (
                            <div className="timeline-step" key={index}>
                                <div className="step-marker">
                                    <div className="step-icon">
                                        {step.icon}
                                    </div>
                                    <div className="step-number">{step.id}</div>
                                </div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
