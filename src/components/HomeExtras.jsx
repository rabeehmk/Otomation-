import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ShieldCheck, Zap, CheckCircle, Clock, Database, BarChart3 } from 'lucide-react';
import './HomeExtras.css';

const HomeExtras = () => {
  const [lead, setLead] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    companyName: '',
    city: ''
  });

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = useMemo(
    () => [
      {
        q: 'Is e-invoicing mandatory in UAE?',
        a: 'E-invoicing is being implemented in phases and businesses must prepare to comply with regulations.'
      },
      {
        q: 'How long does integration take?',
        a: 'Integration time depends on system complexity but typically takes a few days to weeks.'
      },
      { q: 'Which systems do you support?', a: 'We support ERP, accounting software, and custom systems.' },
      { q: 'Is the system secure?', a: 'Yes, we use secure protocols and industry best practices.' }
    ],
    []
  );

  const handleLeadChange = (e) => {
    const { name, value } = e.target;
    setLead((prev) => ({ ...prev, [name]: value }));
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    // Keeping behavior simple and non-breaking: this is a lead capture placeholder.
    // You can wire this to a backend or form service later.
    console.log('Lead form submitted:', lead);
    alert('Thanks! We received your details and will contact you shortly.');
    setLead({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      companyName: '',
      city: ''
    });
  };

  return (
    <div className="home-extras">
      {/* Lead capture (matches the “Blank Form (#3)” style content on otomation.ae) */}
      <section className="home-lead">
        <div className="container home-lead-grid">
          <div className="home-lead-copy">
            <div className="section-tag">End-to-End UAE E-Invoicing &amp; Compliance Enablement</div>
            <h2 className="home-lead-title">
              Helping businesses transition from Excel, legacy systems, or ERPs to fully compliant UAE e-Invoicing — simply,
              securely, and on time.
            </h2>
            <p className="home-lead-subtitle">
              Have a question or need assistance? Our team is ready to help.
            </p>

            <div className="home-stats">
              <div className="home-stat">
                <div className="home-stat-label">Customers Globally</div>
              </div>
              <div className="home-stat">
                <div className="home-stat-label">Invoices Processed Annually</div>
              </div>
              <div className="home-stat">
                <div className="home-stat-label">ERP</div>
              </div>
            </div>
          </div>

          <form className="home-lead-form" onSubmit={handleLeadSubmit}>
            <div className="home-lead-form-title">Click here</div>
            <div className="home-form-grid">
              <label className="home-field">
                <span>First Name</span>
                <input name="firstName" value={lead.firstName} onChange={handleLeadChange} required />
              </label>
              <label className="home-field">
                <span>Last Name</span>
                <input name="lastName" value={lead.lastName} onChange={handleLeadChange} required />
              </label>
              <label className="home-field">
                <span>Email</span>
                <input type="email" name="email" value={lead.email} onChange={handleLeadChange} required />
              </label>
              <label className="home-field">
                <span>Mobile</span>
                <input name="mobile" value={lead.mobile} onChange={handleLeadChange} required />
              </label>
              <label className="home-field">
                <span>Company Name</span>
                <input name="companyName" value={lead.companyName} onChange={handleLeadChange} required />
              </label>
              <label className="home-field">
                <span>City</span>
                <input name="city" value={lead.city} onChange={handleLeadChange} required />
              </label>
            </div>
            <button type="submit" className="btn btn-primary home-submit">Submit Form</button>
          </form>
        </div>
      </section>

      {/* About cards (Otomation / e-Invoice) */}
      <section className="home-about-cards">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">About Us</div>
            <h2 className="section-title">A Technology &amp; Compliance Partner</h2>
          </div>

          <div className="home-card-grid">
            <div className="home-info-card">
              <div className="home-card-title">Otomation</div>
              <p>
                Automation is the use of modern technology to perform tasks automatically with minimal human effort. It helps
                homes and businesses improve efficiency, accuracy, and security by controlling systems such as lighting,
                access control, CCTV, billing, and business processes.
              </p>
              <p>
                With automation, operations become faster, safer, and more reliable, helping organizations save time, reduce
                errors, and enhance overall productivity.
              </p>
            </div>

            <div className="home-info-card">
              <div className="home-card-title">e-Invoice</div>
              <p>
                e-Invoicing (electronic invoicing) is a digital method of creating, sending, and managing invoices{' '}
                <strong>electronically</strong> instead of using paper bills. It helps businesses <strong>improve accuracy</strong>,{' '}
                <strong>reduce paperwork</strong>, <strong>speed up billing</strong>, and maintain organized financial records.
              </p>
              <p>
                By using e-invoicing, companies can ensure <strong>faster transactions</strong>, <strong>better compliance</strong>,
                and efficient financial management.
              </p>
            </div>
          </div>

          <div className="home-presence">
            <div className="home-presence-label">Our Presence in</div>
            <div className="home-presence-value">UAE</div>
          </div>
        </div>
      </section>

      {/* What is UAE E-Invoicing */}
      <section className="home-uae-einv">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">What is UAE E-Invoicing?</div>
            <h2 className="section-title">UAE compliance ready</h2>
            <p className="section-subtitle">
              E-Invoicing is a digital method of generating, sending, and storing invoices electronically in compliance with UAE
              regulations. It ensures accuracy, improves efficiency, and helps businesses maintain secure and compliant
              financial records.
            </p>
          </div>

          <div className="home-feature-grid">
            <div className="home-feature-card">
              <Zap size={28} />
              <h3>Faster invoice processing</h3>
              <p>
                Faster invoice processing helps businesses reduce delays, improve cash flow, and maintain better financial
                control.
              </p>
            </div>
            <div className="home-feature-card">
              <CheckCircle size={28} />
              <h3>Reduced manual errors</h3>
              <p>
                Automating data entry, calculations, and validation reduces common mistakes and improves compliance.
              </p>
            </div>
            <div className="home-feature-card">
              <ShieldCheck size={28} />
              <h3>Secure digital records</h3>
              <p>
                Encrypted storage and controlled access keep invoices safe, accessible, and audit-ready.
              </p>
            </div>
            <div className="home-feature-card">
              <Clock size={28} />
              <h3>UAE compliance ready</h3>
              <p>
                Stay aligned with UAE regulations and e-invoicing standards as requirements evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why E‑Invoicing matters */}
      <section className="home-why-matters">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Why E-Invoicing Matters for Your Business</div>
            <h2 className="section-title">Benefits you’ll feel immediately</h2>
          </div>

          <div className="home-benefits-grid">
            <div className="home-benefit">
              <BarChart3 size={28} />
              <h3>Improves Efficiency</h3>
              <p>Automates invoice generation and reduces manual work.</p>
            </div>
            <div className="home-benefit">
              <CheckCircle size={28} />
              <h3>Enhances Accuracy</h3>
              <p>Minimizes errors and improves financial tracking.</p>
            </div>
            <div className="home-benefit">
              <ShieldCheck size={28} />
              <h3>Ensures Compliance</h3>
              <p>Keeps your business aligned with UAE tax regulations.</p>
            </div>
            <div className="home-benefit">
              <Database size={28} />
              <h3>Saves Time and Cost</h3>
              <p>Reduces paperwork and administrative expenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide 2026 */}
      <section className="home-guide">
        <div className="container home-guide-grid">
          <div>
            <div className="section-tag">UAE E-Invoicing Guide 2026</div>
            <h2 className="home-guide-title">Your complete roadmap to mandatory e-invoicing compliance</h2>
            <p className="home-guide-text">
              The UAE has officially entered a new era of digital taxation, making e-invoicing mandatory for all VAT-registered
              businesses. Non-compliance can mean fines, delayed refunds, rejected invoices, and audit risks.
            </p>
          </div>
          <div className="home-guide-actions">
            <Link className="btn btn-primary" to="/contact">Get your free book</Link>
            <Link className="btn btn-outline" to="/services">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Implementation process */}
      <section className="home-process">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Implement Process</div>
            <h2 className="section-title">From consultation to go-live</h2>
          </div>

          <div className="home-steps">
            {[
              { step: 'Consultation', desc: 'We understand your requirements and business needs.' },
              { step: 'System Assessment', desc: 'We analyze your current system and workflows.' },
              { step: 'Integration', desc: 'We integrate automation and e-invoicing solutions.' },
              { step: 'Testing', desc: 'We ensure everything works correctly and securely.' },
              { step: 'Go Live & Support', desc: 'Deployment and ongoing support.' }
            ].map((s) => (
              <div className="home-step" key={s.step}>
                <h3>{s.step}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service shortcuts */}
      <section className="home-service-shortcuts">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Explore our Service</div>
            <p className="section-subtitle">
              We deliver reliable, innovative, and cost-effective solutions that support modern business needs.
            </p>
          </div>

          <div className="home-shortcuts-grid">
            <Link className="home-shortcut-card" to="/services">
              <h3>Readiness Assessment</h3>
              <div className="home-shortcut-sub">Gap Analysis</div>
              <ul>
                <li>Current system review</li>
                <li>Compliance roadmap</li>
              </ul>
            </Link>
            <Link className="home-shortcut-card" to="/services">
              <h3>Implementation</h3>
              <div className="home-shortcut-sub">ASP Integration</div>
              <ul>
                <li>ERP/Portal config</li>
                <li>UAT &amp; Go-Live</li>
              </ul>
            </Link>
            <Link className="home-shortcut-card" to="/services">
              <h3>ERP Setup</h3>
              <div className="home-shortcut-sub">Zoho/Tally/Odoo</div>
              <ul>
                <li>VAT templates</li>
                <li>ASP integration</li>
              </ul>
            </Link>
            <Link className="home-shortcut-card" to="/services">
              <h3>Managed Compliance</h3>
              <div className="home-shortcut-sub">Ongoing Monitoring</div>
              <ul>
                <li>Rejections handling</li>
                <li>Audit readiness</li>
              </ul>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="home-faq">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">FAQs</div>
            <h2 className="section-title">Quick answers</h2>
          </div>

          <div className="home-faq-list">
            {faqs.map((f, idx) => {
              const isOpen = openFaq === idx;
              return (
                <button
                  className={`home-faq-item ${isOpen ? 'open' : ''}`}
                  key={f.q}
                  onClick={() => setOpenFaq((prev) => (prev === idx ? -1 : idx))}
                  type="button"
                >
                  <div className="home-faq-q">
                    <span>{f.q}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  {isOpen ? <div className="home-faq-a">{f.a}</div> : null}
                </button>
              );
            })}
          </div>

          <div className="home-faq-cta">
            <div className="home-faq-cta-text">For More Details</div>
            <Link className="btn btn-primary" to="/contact">Click here</Link>
          </div>
        </div>
      </section>

      {/* Mandatory + CTA */}
      <section className="home-mandatory">
        <div className="container home-mandatory-grid">
          <div>
            <div className="section-tag">Mandatory E-Invoicing in the UAE</div>
            <p className="home-mandatory-text">
              Federal Tax Authority (FTA) encourages businesses to adopt digital systems in line with VAT regulations and
              international best practices.
            </p>
            <div className="home-mandatory-quote">
              <strong>E-Invoicing is not just a system change — it’s a compliance obligation.</strong>
              <div>Let us help you get it right from day one.</div>
            </div>
          </div>
          <div className="home-mandatory-actions">
            <Link className="btn btn-primary" to="/contact">Book a Consultation</Link>
            <Link className="btn btn-outline" to="/contact">We&apos;re Ready, Let&apos;s Talk</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeExtras;




