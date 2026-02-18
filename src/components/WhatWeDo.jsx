import React from 'react';
import { FileCheck, Shield, Zap, RefreshCw } from 'lucide-react';
import './WhatWeDo.css';

const features = [
    {
        icon: <FileCheck size={32} />,
        title: "PINT AE Standardization",
        desc: "We convert your invoice data into the mandatory XML/JSON PINT AE format required by the FTA.",
        color: "blue"
    },
    {
        icon: <Shield size={32} />,
        title: "PEPPOL 5-Corner Model",
        desc: "Secure exchange via Accredited Service Providers (ASPs) ensuring end-to-end encryption and compliance.",
        color: "violet"
    },
    {
        icon: <Zap size={32} />,
        title: "Real-time TDD Reporting",
        desc: "Automatic generation and submission of Tax Data Documents (TDD) to the FTA for every transaction.",
        color: "amber"
    },
    {
        icon: <RefreshCw size={32} />,
        title: "Data Residency Compliant",
        desc: "All invoice data is stored locally within UAE borders in adherence to the Tax Procedures Law.",
        color: "emerald"
    }
];

const WhatWeDo = () => {
    return (
        <section className="section what-we-do" id="what-we-do">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Technical Compliance</div>
                    <h2 className="section-title">The Engine Behind E-Invoicing</h2>
                    <p className="section-subtitle">
                        From PINT AE formatting to real-time FTA reporting, our platform handles the complexities of the new decentralized model seamlessly.
                    </p>
                </div>

                <div className="what-we-do-content">
                    <h2>Seamless Integration for Every ERP</h2>
                    <p>
                        Otomation connects directly with your existing setup—whether it’s SAP, Oracle, Microsoft Dynamics, or a custom POS.
                        We handle the transformation to PINT AE (XML/JSON) and secure transmission to the FTA.
                    </p>

                    <ul className="features-list">
                    </ul>
                </div>

                <div className="capabilities-grid">
                    {features.map((feature, index) => (
                        <div className={`capability-card color-${feature.color}`} key={index}>
                            <div className="icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
