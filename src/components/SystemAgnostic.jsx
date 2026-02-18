import React from 'react';
import './SystemAgnostic.css';
import { Database, LayoutGrid, Monitor, ShoppingCart, FileSpreadsheet } from 'lucide-react';

const SystemAgnostic = () => {
    return (
        <section className="section system-agnostic">
            <div className="container">
                <div className="agnostic-content">
                    <h2 className="section-title text-white">Universal Compatibility</h2>
                    <p className="section-subtitle text-light">
                        We integrate with your existing ecosystem. No need to change your software—we make it compliant.
                    </p>

                    <div className="integration-hub">
                        <div className="hub-center">
                            <div className="hub-logo">Otomation</div>
                            <div className="hub-label">Compliance Core</div>
                        </div>

                        {/* Orbiting Items */}
                        <div className="orbit-item item-1">
                            <FileSpreadsheet size={24} />
                            <span>Excel / CSV</span>
                        </div>
                        <div className="orbit-item item-2">
                            <ShoppingCart size={24} />
                            <span>POS Systems</span>
                        </div>
                        <div className="orbit-item item-3">
                            <Database size={24} />
                            <span>ERPs (SAP, Oracle)</span>
                        </div>
                        <div className="orbit-item item-4">
                            <LayoutGrid size={24} />
                            <span>Accounting Apps</span>
                        </div>
                        <div className="orbit-item item-5">
                            <Monitor size={24} />
                            <span>Custom Software</span>
                        </div>

                        <div className="orbit-ring"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SystemAgnostic;
