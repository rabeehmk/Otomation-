import React from 'react';
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">Otomation</div>
                        <p className="footer-desc">
                            Empowering UAE businesses with seamless, compliant, and future-proof e-invoicing solutions.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact</h4>
                            <ul className="contact-list">
                                <li><MapPin size={16} /> Dubai, United Arab Emirates</li>
                                <li><Phone size={16} /> +971 56 575 7475</li>
                                <li><Mail size={16} /> info@otomation.ae</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Otomation UAE. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
