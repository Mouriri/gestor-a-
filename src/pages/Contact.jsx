import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setStatus('');

        try {
            await emailjs.send(
                'service_p4ad2uk',
                'template_ps12i6x',
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.message
                },
                'w1AJGdKjkgg2Ghq3A'
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            
            // Limpiar mensaje de éxito después de 5 segundos
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error('Error al enviar email:', error);
            setStatus('error');
            
            // Limpiar mensaje de error después de 5 segundos
            setTimeout(() => setStatus(''), 5000);
        } finally {
            setSending(false);
        }
    };

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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t.booking.name}</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={sending}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed" 
                                    placeholder="Su nombre" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">{t.booking.email}</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={sending}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed" 
                                    placeholder="ejemplo@email.com" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea 
                                    rows="4" 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={sending}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed" 
                                    placeholder="¿En qué podemos ayudarle?"
                                ></textarea>
                            </div>

                            {status === 'success' && (
                                <div className="bg-green-50 text-green-800 p-4 rounded-lg border border-green-200 animate-fade-in">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium">¡Mensaje enviado correctamente!</span>
                                    </div>
                                    <p className="text-sm mt-1 ml-7">Nos pondremos en contacto con usted pronto.</p>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="bg-red-50 text-red-800 p-4 rounded-lg border border-red-200 animate-fade-in">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium">Error al enviar el mensaje</span>
                                    </div>
                                    <p className="text-sm mt-1 ml-7">Por favor, inténtelo de nuevo o contáctenos por teléfono.</p>
                                </div>
                            )}

                            <button 
                                type="submit" 
                                disabled={sending}
                                className="w-full btn btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {sending ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Mensaje <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
