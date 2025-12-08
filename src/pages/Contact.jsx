import React from 'react';
import { useLanguage } from '../LanguageContext';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <div className="py-16 bg-gray-50 min-h-screen animate-fade-in">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="heading-lg">{t.contact.title}</h1>
                    <p className="text-gray-600">Estamos aquí para ayudarle. Escríbanos o visítenos.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold mb-6 text-primary">Información de Contacto</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Dirección</h4>
                                        <p className="text-gray-600">{t.contact.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Teléfono</h4>
                                        <p className="text-gray-600">{t.contact.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email</h4>
                                        <p className="text-gray-600">{t.contact.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center text-gray-500 overflow-hidden shadow-inner">
                            <span className="flex items-center gap-2"><MapPin /> Mapa de Google Maps</span>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t.booking.name}</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Su nombre" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t.booking.email}</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="ejemplo@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="¿En qué podemos ayudarle?"></textarea>
                            </div>
                            <button type="button" className="w-full btn btn-primary flex items-center justify-center gap-2">
                                Enviar Mensaje <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
