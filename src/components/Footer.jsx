import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="bg-secondary text-primary font-bold w-6 h-6 flex items-center justify-center rounded text-sm">G</span>
                            GESTORÍA PRO
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{t.about.desc}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-secondary">{t.nav.services}</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>{t.services_menu.immigration}</li>
                            <li>{t.services_menu.nationality}</li>
                            <li>{t.services_menu.traffic}</li>
                            <li>{t.services_menu.lawyer}</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-secondary">{t.nav.contact}</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>{t.contact.address}</li>
                            <li>{t.contact.email}</li>
                            <li>{t.contact.phone}</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    &copy; {currentYear} Gestoría Pro. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
