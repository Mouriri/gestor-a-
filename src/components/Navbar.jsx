import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path) => location.pathname === path ? "text-secondary font-bold" : "text-gray-700 hover:text-secondary";

    const languages = [
        { code: 'ES', label: 'Español' },
        { code: 'FR', label: 'Français' },
        { code: 'AR', label: 'العربية' }
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
                        <span className="bg-secondary text-white w-8 h-8 flex items-center justify-center rounded">G</span>
                        GESTORÍA PRO
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={isActive('/')}>{t.nav.home}</Link>
                        <Link to="/about" className={isActive('/about')}>{t.nav.about}</Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-gray-700 hover:text-secondary py-2">
                                {t.nav.services} <ChevronDown size={16} />
                            </button>
                            <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-secondary">
                                <Link to="/services/immigration" className="block px-4 py-2 hover:bg-gray-50 hover:text-secondary">{t.services_menu.immigration}</Link>
                                <Link to="/services/nationality" className="block px-4 py-2 hover:bg-gray-50 hover:text-secondary">{t.services_menu.nationality}</Link>
                                <Link to="/services/traffic" className="block px-4 py-2 hover:bg-gray-50 hover:text-secondary">{t.services_menu.traffic}</Link>
                                <Link to="/services/lawyer" className="block px-4 py-2 hover:bg-gray-50 hover:text-secondary">{t.services_menu.lawyer}</Link>
                            </div>
                        </div>

                        <Link to="/contact" className={isActive('/contact')}>{t.nav.contact}</Link>

                        <Link to="/booking" className="btn btn-primary">{t.nav.book}</Link>

                        {/* Language Switcher */}
                        <div className="relative group ml-4">
                            <button className="flex items-center gap-1 text-gray-600 hover:text-primary">
                                <Globe size={18} /> {language}
                            </button>
                            <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === lang.code ? 'font-bold text-secondary' : ''}`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={toggleMenu} className="text-primary focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden bg-white border-t absolute w-full left-0 shadow-lg">
                    <div className="flex flex-col px-4 py-4 space-y-4">
                        <Link to="/" onClick={toggleMenu} className={isActive('/')}>{t.nav.home}</Link>
                        <Link to="/about" onClick={toggleMenu} className={isActive('/about')}>{t.nav.about}</Link>

                        <div>
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="flex items-center justify-between w-full text-gray-700 font-medium"
                            >
                                {t.nav.services} <ChevronDown size={16} className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {servicesOpen && (
                                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100 ml-1">
                                    <Link to="/services/immigration" onClick={toggleMenu} className="block text-gray-600 py-1">{t.services_menu.immigration}</Link>
                                    <Link to="/services/nationality" onClick={toggleMenu} className="block text-gray-600 py-1">{t.services_menu.nationality}</Link>
                                    <Link to="/services/traffic" onClick={toggleMenu} className="block text-gray-600 py-1">{t.services_menu.traffic}</Link>
                                    <Link to="/services/lawyer" onClick={toggleMenu} className="block text-gray-600 py-1">{t.services_menu.lawyer}</Link>
                                </div>
                            )}
                        </div>

                        <Link to="/contact" onClick={toggleMenu} className={isActive('/contact')}>{t.nav.contact}</Link>
                        <Link to="/booking" onClick={toggleMenu} className="btn btn-primary text-center justify-center">{t.nav.book}</Link>

                        {/* Mobile Lang Switcher */}
                        <div className="flex gap-2 pt-4 border-t">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setLanguage(lang.code)}
                                    className={`px-3 py-1 rounded border ${language === lang.code ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-300'}`}
                                >
                                    {lang.code}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
