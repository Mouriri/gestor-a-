import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { FileText, Flag, Car, Scale, ChevronRight } from 'lucide-react';

const Services = () => {
    const { serviceId } = useParams();
    const { t } = useLanguage();
    const navigate = useNavigate();

    const services = [
        {
            id: 'immigration',
            title: t.services_menu.immigration,
            icon: <FileText size={24} />,
            details: [
                "Arraigo Social, Laboral y Familiar",
                "Reagrupación Familiar",
                "Renovación de Residencia",
                "Visa de Estudiante",
                "Tarjeta Comunitaria"
            ]
        },
        {
            id: 'nationality',
            title: t.services_menu.nationality,
            icon: <Flag size={24} />,
            details: [
                "Nacionalidad por Residencia",
                "Nacionalidad por Opción",
                "Ley de Memoria Democrática (Ley de Nietos)",
                "Dispensa de Exámenes CCSE/DELE"
            ]
        },
        {
            id: 'traffic',
            title: t.services_menu.traffic,
            icon: <Car size={24} />,
            details: [
                "Canje de Permisos de Conducir",
                "Matriculación de Vehículos",
                "Transferencias y Cambios de Titularidad",
                "Informes de Vehículos",
                "Recurso de Multas"
            ]
        },
        {
            id: 'lawyer',
            title: t.services_menu.lawyer,
            icon: <Scale size={24} />,
            details: [
                "Recursos Administrativos y Contenciosos",
                "Derecho Civil y Familia",
                "Asesoría Jurídica General",
                "Divorcios y Herencias"
            ]
        }
    ];

    const activeService = services.find(s => s.id === serviceId) || services[0];

    return (
        <div className="bg-gray-50 min-h-screen py-12 animate-fade-in">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="heading-lg">{t.nav.services}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos un servicio integral cubriendo todas las áreas administrativas y legales que usted necesita.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {/* Sidebar Menu */}
                    <div className="md:col-span-1 space-y-2">
                        {services.map(service => (
                            <button
                                key={service.id}
                                onClick={() => navigate(`/services/${service.id}`)}
                                className={`w-full text-left px-6 py-4 rounded-lg flex items-center justify-between transition-all ${activeService.id === service.id
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                <span className="flex items-center gap-3">
                                    {service.icon}
                                    <span className="font-medium">{service.title}</span>
                                </span>
                                {activeService.id === service.id && <ChevronRight size={16} />}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="md:col-span-3">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                                <div className="p-4 bg-secondary/10 text-secondary rounded-xl">
                                    {React.cloneElement(activeService.icon, { size: 40 })}
                                </div>
                                <h2 className="heading-md mb-0 text-3xl">{activeService.title}</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {activeService.details.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                        <div className="mt-1 bg-primary rounded-full p-1">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                <h3 className="text-blue-900 font-bold mb-2">¿Necesita ayuda con este trámite?</h3>
                                <p className="text-blue-800 text-sm mb-4">
                                    Nuestros expertos pueden encargarse de todo el proceso. Reserve una consulta inicial para evaluar su caso.
                                </p>
                                <button
                                    onClick={() => navigate('/booking')}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Reservar Cita Previa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
