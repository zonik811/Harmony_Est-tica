'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { BUSINESS_INFO, SERVICES } from '@/lib/constants';

export default function ServicesPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
                <div className="container-custom">
                    <SectionHeading
                        title="Nuestros Servicios"
                        subtitle="Tratamientos especializados de medicina estética con los más altos estándares de seguridad y profesionalismo"
                    />
                </div>
            </section>

            {/* Services List */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="space-y-16">
                        {SERVICES.map((service, index) => (
                            <div
                                key={service.id}
                                className={`rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-medical-light p-8 shadow-lg transition-all duration-300 hover:shadow-xl lg:p-12 ${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
                                    }`}
                            >
                                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                                    {/* Content */}
                                    <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                                        <h2 className="heading-3 mb-4 text-primary-700">
                                            {service.title}
                                        </h2>

                                        <p className="mb-6 leading-relaxed text-medical">
                                            {service.description}
                                        </p>

                                        {/* Benefits */}
                                        <div className="mb-6">
                                            <h3 className="mb-3 text-lg font-semibold text-medical-dark">
                                                Beneficios
                                            </h3>
                                            <ul className="space-y-2">
                                                {service.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                                                        <span className="text-sm text-medical">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Areas */}
                                        <div className="mb-6">
                                            <h3 className="mb-3 text-lg font-semibold text-medical-dark">
                                                Áreas de Aplicación
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {service.areas.map((area, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700"
                                                    >
                                                        {area}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div className="pt-4">
                                            <Link
                                                href={BUSINESS_INFO.whatsappUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Button variant="whatsapp">
                                                    <MessageCircle className="h-5 w-5" />
                                                    Consultar sobre este tratamiento
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Considerations Card */}
                                    <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                                        <div className="rounded-2xl border-2 border-primary-200 bg-primary-50 p-6">
                                            <div className="mb-4 flex items-center gap-3">
                                                <div className="rounded-lg bg-primary-600 p-2">
                                                    <AlertCircle className="h-5 w-5 text-white" />
                                                </div>
                                                <h3 className="text-lg font-semibold text-primary-900">
                                                    Consideraciones Importantes
                                                </h3>
                                            </div>
                                            <p className="leading-relaxed text-primary-900">
                                                {service.considerations}
                                            </p>

                                            <div className="mt-6 rounded-lg bg-white p-4">
                                                <p className="text-sm font-medium text-medical-dark">
                                                    ℹ️ Información Importante
                                                </p>
                                                <p className="mt-2 text-sm text-medical">
                                                    Todos nuestros procedimientos son realizados por
                                                    profesionales médicos certificados. Se requiere una
                                                    evaluación previa personalizada.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-medical-dark to-primary-900 text-white">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="heading-2 mb-6">
                            ¿Tienes Preguntas sobre Nuestros Servicios?
                        </h2>
                        <p className="mb-8 text-lg text-primary-100">
                            Nuestro equipo médico está disponible para resolver todas tus
                            dudas y ayudarte a elegir el tratamiento más adecuado para ti.
                        </p>
                        <Link href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="whatsapp" className="bg-white text-primary-700 hover:bg-gray-100">
                                <MessageCircle className="h-5 w-5" />
                                Contactar por WhatsApp
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
