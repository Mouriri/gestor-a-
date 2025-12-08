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
                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d11161.943696518038!2d-1.8415882000000003!3d42.624382999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xd6a09d451ddd15d%3A0x95e83a91f02bbf0a!2sC.%20R%C3%ADo%20Valdemar%C3%ADas%2C%202%2C%2045007%20Toledo!3m2!1d39.8655506!2d-3.9564754!5e1!3m2!1sfr!2ses!4v1765236561814!5m2!1sfr!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
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
