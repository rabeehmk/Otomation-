import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} `}>
            <div className="container header-container">
                <Link to="/" className="logo logo-brand">
                    <svg className="logo-img" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" aria-label="Otomation Logo">
                        {/* Left/Outer Crescent */}
                        <path d="M25 68 C 8 52 8 28 25 12 C 29 8 36 6 40 5 L 35 0 C 20 4 5 15 0 30 C -5 50 5 70 20 78 L 25 68 Z" fill="#000000" />
                        {/* Middle Crescent */}
                        <path d="M48 62 C 32 50 32 30 48 18 C 52 15 58 12 62 10 L 58 5 C 45 10 30 20 25 40 C 20 60 30 72 40 78 L 48 62 Z" fill="#000000" />
                        {/* Right/Inner Crescent */}
                        <path d="M70 55 C 58 45 58 35 70 25 C 74 22 78 20 82 20 L 78 15 C 65 20 55 30 50 40 C 45 55 55 65 65 70 L 70 55 Z" fill="#000000" />
                        {/* Dot */}
                        <circle cx="88" cy="30" r="5" fill="#000000" />
                    </svg>
                    <span className="logo-name">OTOMATION</span>
                </Link>

                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`nav ${isMenuOpen ? 'open' : ''} `}>
                    <ul className="nav-list">
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                        <li><Link to="/solutions" onClick={() => setIsMenuOpen(false)}>Solutions</Link></li>
                        <li><Link to="/industries" onClick={() => setIsMenuOpen(false)}>Industries</Link></li>
                        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>

                    <div className="mobile-only">
                        <Link to="/contact" className="btn btn-primary btn-sm" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                    </div>
                </nav>

                <div className="header-actions desktop-only">
                    <Link to="/contact" className="btn btn-primary btn-sm">Get Started</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
