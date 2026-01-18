'use client';

import Image from 'next/image';
import { Shield, Heart, Award, Users, Target, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ValueCard from '@/components/ui/ValueCard';
import { BUSINESS_INFO } from '@/lib/constants';

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
                <div className="container-custom">
                    <SectionHeading
                        title="Sobre Nosotros"
                        subtitle="Conoce a Harmony Estética, tu clínica de confianza en medicina estética"
                    />
                </div>
            </section>

            {/* Mission Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-12 text-center">
                            <h2 className="heading-2 mb-6 text-primary-700">
                                Nuestra Misión
                            </h2>
                            <p className="text-lg leading-relaxed text-medical">
                                En <span className="font-semibold text-primary-600">{BUSINESS_INFO.name}</span>,
                                nos dedicamos a proporcionar servicios de medicina estética de
                                la más alta calidad, combinando experiencia médica, tecnología
                                avanzada y un enfoque centrado en el paciente.
                            </p>
                        </div>

                        <div className="space-y-6 text-medical">
                            <p className="leading-relaxed">
                                Fundada con la visión de ofrecer tratamientos estéticos seguros
                                y efectivos en Huánuco, nuestra clínica se ha convertido en un
                                referente de confianza para quienes buscan realzar su belleza
                                natural sin comprometer su seguridad.
                            </p>

                            <p className="leading-relaxed">
                                Creemos firmemente que la medicina estética debe ser practicada
                                con la máxima ética profesional, utilizando únicamente productos
                                certificados y siguiendo protocolos médicos internacionales.
                                Cada procedimiento es realizado por profesionales médicos
                                especializados que priorizan tu bienestar por encima de todo.
                            </p>

                            <p className="leading-relaxed">
                                Nuestra filosofía se basa en resultados naturales y armónicos.
                                No buscamos transformaciones radicales, sino realzar las
                                características únicas de cada paciente, respetando su esencia y
                                proporcionando mejoras sutiles que aumenten su confianza y
                                bienestar.
                            </p>
                        </div>
                    </div>

                    {/* Medical Team Image */}
                    <div className="mt-12 overflow-hidden rounded-3xl shadow-2xl">
                        <Image
                            src="/images/medical-team.png"
                            alt="Equipo Médico de Harmony Estética"
                            width={1200}
                            height={600}
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-gradient-to-br from-medical-light to-white">
                <div className="container-custom">
                    <SectionHeading
                        title="Nuestros Valores"
                        subtitle="Los principios que guían cada uno de nuestros tratamientos"
                    />

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <ValueCard
                            icon={Shield}
                            title="Seguridad Médica"
                            description="Aplicamos los más estrictos protocolos de seguridad y bioseguridad. Utilizamos únicamente productos certificados y aprobados por autoridades sanitarias."
                        />
                        <ValueCard
                            icon={Heart}
                            title="Ética Profesional"
                            description="Actuamos con transparencia, honestidad y respeto. Proporcionamos información veraz sobre cada procedimiento, sus beneficios y consideraciones."
                        />
                        <ValueCard
                            icon={Award}
                            title="Excelencia"
                            description="Nos comprometemos con la mejora continua y la actualización constante en técnicas y tecnologías de medicina estética."
                        />
                        <ValueCard
                            icon={Users}
                            title="Atención Personalizada"
                            description="Cada paciente es único. Realizamos evaluaciones individualizadas y diseñamos planes de tratamiento específicos para cada persona."
                        />
                        <ValueCard
                            icon={Target}
                            title="Resultados Naturales"
                            description="Buscamos realzar la belleza natural de cada paciente con resultados armónicos, equilibrados y de aspecto saludable."
                        />
                        <ValueCard
                            icon={CheckCircle}
                            title="Compromiso"
                            description="Estamos comprometidos con tu satisfacción y bienestar. Te acompañamos en todo el proceso, antes, durante y después del tratamiento."
                        />
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="mx-auto max-w-4xl">
                        <SectionHeading
                            title="Nuestro Enfoque Médico"
                            subtitle="Ciencia, experiencia y dedicación en cada tratamiento"
                        />

                        <div className="space-y-8">
                            <div className="rounded-2xl bg-primary-50 p-8">
                                <h3 className="mb-4 text-xl font-semibold text-primary-900">
                                    Evaluación Personalizada
                                </h3>
                                <p className="leading-relaxed text-primary-900">
                                    Antes de cualquier procedimiento, realizamos una evaluación
                                    facial completa y un análisis detallado de tus necesidades.
                                    Escuchamos tus objetivos y te brindamos una orientación
                                    profesional sobre las opciones más adecuadas para ti.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-secondary-50 p-8">
                                <h3 className="mb-4 text-xl font-semibold text-secondary-900">
                                    Técnica y Precisión
                                </h3>
                                <p className="leading-relaxed text-secondary-900">
                                    Utilizamos técnicas avanzadas de aplicación que garantizan
                                    resultados óptimos con mínimas molestias. Nuestra experiencia
                                    nos permite trabajar con precisión anatómica, respetando las
                                    estructuras faciales y logrando efectos naturales.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-primary-50 p-8">
                                <h3 className="mb-4 text-xl font-semibold text-primary-900">
                                    Seguimiento Continuo
                                </h3>
                                <p className="leading-relaxed text-primary-900">
                                    No terminamos nuestra relación contigo después del
                                    procedimiento. Realizamos seguimiento para verificar tu
                                    evolución, resolver dudas y asegurarnos de que estés
                                    completamente satisfecho con los resultados.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section (Placeholder) */}
            <section className="section-padding bg-gradient-to-br from-medical-dark to-primary-900 text-white">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="heading-2 mb-6">Profesionalismo Certificado</h2>
                        <p className="mb-8 text-lg text-primary-100">
                            Nuestro equipo médico cuenta con certificaciones especializadas en
                            medicina estética y se mantiene en constante actualización sobre
                            las últimas técnicas y avances en el campo.
                        </p>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                                <Award className="mx-auto mb-3 h-10 w-10 text-primary-400" />
                                <p className="font-semibold">Certificación Médica</p>
                            </div>
                            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                                <Shield className="mx-auto mb-3 h-10 w-10 text-primary-400" />
                                <p className="font-semibold">Productos Certificados</p>
                            </div>
                            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                                <CheckCircle className="mx-auto mb-3 h-10 w-10 text-primary-400" />
                                <p className="font-semibold">Protocolos Internacionales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
