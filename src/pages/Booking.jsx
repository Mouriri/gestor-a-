import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { CreditCard, Calendar, Check, AlertCircle } from 'lucide-react';

const Booking = () => {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'immigration',
        date: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePayment = () => {
        // Mock payment processing
        setTimeout(() => {
            setStep(3);
        }, 1500);
    };

    return (
        <div className="py-12 bg-gray-50 min-h-screen animate-fade-in">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-10">
                    <h1 className="heading-lg">{t.booking.title}</h1>
                    <p className="text-gray-600">{t.booking.subtitle}</p>
                </div>

                {/* Steps Indicator */}
                <div className="flex justify-center mb-10">
                    <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                        <div className={`w-16 h-1 bg-gray-200 ${step >= 2 ? 'bg-primary' : ''}`}></div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                        <div className={`w-16 h-1 bg-gray-200 ${step >= 3 ? 'bg-primary' : ''}`}></div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}><Check size={20} /></div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

                    {step === 1 && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.booking.name}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.booking.email}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.booking.service_type}</label>
                                    <select
                                        name="service"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="immigration">{t.services_menu.immigration}</option>
                                        <option value="nationality">{t.services_menu.nationality}</option>
                                        <option value="traffic">{t.services_menu.traffic}</option>
                                        <option value="lawyer">{t.services_menu.lawyer}</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.booking.date}</label>
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm border border-yellow-100">
                                <AlertCircle size={20} className="shrink-0" />
                                <p>El coste de la consulta es de <strong>30€</strong>. Este importe será descontado si finalmente contrata el servicio con nosotros.</p>
                            </div>

                            <button type="submit" className="w-full btn btn-primary text-lg">
                                Continuar al Pago
                            </button>
                        </form>
                    )}

                    {step === 2 && (
                        <div className="space-y-6 text-center">
                            <h2 className="heading-md">Resumen del Pedido</h2>
                            <div className="bg-gray-50 p-6 rounded-xl text-left space-y-3">
                                <p className="flex justify-between">
                                    <span className="text-gray-600">Servicio:</span>
                                    <span className="font-semibold capitalize">{formData.service}</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-gray-600">Fecha:</span>
                                    <span className="font-semibold">{formData.date}</span>
                                </p>
                                <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-bold text-primary">
                                    <span>Total:</span>
                                    <span>30.00 €</span>
                                </div>
                            </div>

                            <div className="p-6 border-2 border-dashed border-gray-200 rounded-xl">
                                <CreditCard size={48} className="mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500 mb-4">Simulación de Pasarela de Pago Segura</p>
                                <button onClick={handlePayment} className="w-full btn btn-primary">
                                    {t.booking.submit} (30€)
                                </button>
                            </div>
                            <button onClick={() => setStep(1)} className="text-sm text-gray-500 underline">Volver</button>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check size={40} />
                            </div>
                            <h2 className="heading-md text-green-600 mb-2">¡Cita Confirmada!</h2>
                            <p className="text-gray-600 mb-8">Hemos enviado los detalles a <strong>{formData.email}</strong>.</p>
                            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-gray-500">
                                Recuerde: Los 30€ abonados se descontarán de su trámite final.
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Booking;
