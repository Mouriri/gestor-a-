import React from 'react';
import { useLanguage } from '../LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <div className="py-16 animate-fade-in">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="heading-xl text-center mb-8">{t.about.title}</h1>

                    <div className="prose prose-lg mx-auto text-gray-600 space-y-6 text-justify">
                        <p className="text-xl leading-relaxed font-medium text-primary">
                            {t.about.desc}
                        </p>
                        <p>
                            En <strong>Gestoría Mohammed El Ali Haddada</strong>, entendemos que detrás de cada trámite hay una persona, una familia o un proyecto de vida. Por eso, no solo gestionamos papeles; ofrecemos soluciones reales y personalizadas.
                        </p>
                        <p>
                            Nuestro equipo multidisciplinar está formado por gestores administrativos, abogados y expertos en extranjería con más de 15 años de experiencia en el sector. Nos mantenemos constantemente actualizados sobre las últimas normativas y cambios legislativos para garantizar el éxito de sus expedientes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center p-6 border rounded-xl bg-gray-50">
                            <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                            <div className="text-gray-600 font-medium">Años de Experiencia</div>
                        </div>
                        <div className="text-center p-6 border rounded-xl bg-gray-50">
                            <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
                            <div className="text-gray-600 font-medium">Expedientes Resueltos</div>
                        </div>
                        <div className="text-center p-6 border rounded-xl bg-gray-50">
                            <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                            <div className="text-gray-600 font-medium">Clientes Satisfechos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
