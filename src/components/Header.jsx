import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const isPagesWithDarkHero = pathname === '/about' || pathname === '/thank-you' || pathname === '/services';

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
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isPagesWithDarkHero ? 'header-solid' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo logo-brand">
                    <img
                        src="/eedbbe4b-bfc0-4500-b1e1-a2442ab24826.jpeg"
                        alt="Otomation logo"
                        className="logo-img"
                    />
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
