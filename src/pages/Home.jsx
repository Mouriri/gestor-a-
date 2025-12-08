import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ArrowRight, CheckCircle, Shield, Clock, Users } from 'lucide-react';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative bg-primary text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Gestoría Integral</span>
                        <h1 className="heading-xl text-white mb-6 leading-tight">
                            {t.home.hero_title}
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-lg">
                            {t.home.hero_subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/booking" className="btn btn-primary shadow-lg hover:shadow-xl">
                                {t.home.cta_book} <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link to="/services" className="btn btn-outline border-gray-500 text-gray-300 hover:text-white hover:border-white">
                                {t.home.cta_services}
                            </Link>
                        </div>

                        {/* Trust Badge / Logo */}
                        <div className="mt-10 flex items-center gap-4 animate-fade-in opacity-90">
                            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 inline-block">
                                <img src="/logo-colegio.png" alt="Colegio Oficial de Gestores" className="h-12 w-auto object-contain brightness-0 invert opacity-90" />
                            </div>
                            <span className="text-gray-400 text-sm max-w-[150px] leading-tight border-l border-gray-600 pl-4">
                                Miembro del Colegio Oficial de Gestores Administrativos
                            </span>
                        </div>
                    </div>
                    {/* Abstract Visual or Image Placeholder */}
                    <div className="relative hidden md:block">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
                                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white">Trámites Seguros</h3>
                                    <p className="text-sm text-gray-400">Garantía de profesionalidad</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded border border-gray-700">
                                    <span className="text-gray-300 text-sm">Nacionalidad Española</span>
                                    <span className="text-green-400 text-xs font-bold px-2 py-1 bg-green-400/10 rounded">APROBADO</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded border border-gray-700">
                                    <span className="text-gray-300 text-sm">Canje de Carnet</span>
                                    <span className="text-blue-400 text-xs font-bold px-2 py-1 bg-blue-400/10 rounded">EN PROCESO</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-800/50 p-3 rounded border border-gray-700">
                                    <span className="text-gray-300 text-sm">Residencia Larga Duración</span>
                                    <span className="text-green-400 text-xs font-bold px-2 py-1 bg-green-400/10 rounded">APROBADO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Info */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                            <Clock className="text-secondary mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2 text-primary">Rapidez y Eficacia</h3>
                            <p className="text-gray-600 text-sm">Optimizamos los tiempos de gestión para que obtenga sus documentos lo antes posible.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                            <Users className="text-secondary mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2 text-primary">Atención Personalizada</h3>
                            <p className="text-gray-600 text-sm">Cada caso es único. Analizamos su situación al detalle para ofrecerle la mejor solución.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                            <Shield className="text-secondary mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2 text-primary">Seguridad Jurídica</h3>
                            <p className="text-gray-600 text-sm">Contamos con abogados colegiados expertos en extranjería y derecho administrativo.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
