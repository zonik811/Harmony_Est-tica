'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Shield, Award, Heart, Syringe, Wind, Droplet, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import ValueCard from '@/components/ui/ValueCard';
import { BUSINESS_INFO, SERVICES } from '@/lib/constants';

export default function HomePage() {
    const serviceIcons = [Syringe, Wind, Droplet, Zap];

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden pb-20 pt-12 min-h-[600px] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-clinic.png"
                        alt="Harmony Estética Clinic Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
                            <Sparkles className="h-4 w-4" />
                            Medicina Estética Profesional
                        </div>

                        <h1 className="heading-1 mb-6 animate-fade-in">
                            Bienvenido a{' '}
                            <span className="text-gradient">{BUSINESS_INFO.name}</span>
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl animate-fade-in text-lg leading-relaxed text-medical animation-delay-200">
                            Tu clínica de confianza en Huánuco para tratamientos de medicina
                            estética con los más altos estándares de calidad, seguridad y
                            profesionalismo médico.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="whatsapp" className="animate-fade-in animation-delay-400">
                                    <Sparkles className="h-5 w-5" />
                                    Agendar Consulta
                                </Button>
                            </Link>
                            <Link href="/servicios">
                                <Button variant="secondary" className="animate-fade-in animation-delay-600">
                                    Nuestros Servicios
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-200 opacity-10 blur-3xl z-0" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary-200 opacity-10 blur-3xl z-0" />
            </section>

            {/* Introduction Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="mx-auto max-w-4xl text-center">
                        <SectionHeading
                            title="Excelencia en Medicina Estética"
                            subtitle="En Harmony Estética, combinamos experiencia médica, tecnología de vanguardia y un enfoque personalizado para ofrecer resultados naturales y seguros."
                        />

                        <div className="space-y-6 text-left text-medical">
                            <p className="leading-relaxed">
                                Nuestra clínica se especializa en tratamientos no invasivos de
                                medicina estética facial, utilizando técnicas avanzadas y
                                productos de la más alta calidad. Cada procedimiento es
                                realizado por profesionales médicos capacitados, garantizando
                                tu seguridad y bienestar en todo momento.
                            </p>

                            <p className="leading-relaxed">
                                Entendemos que cada paciente es único. Por eso, realizamos una
                                evaluación personalizada antes de cada tratamiento, diseñando
                                un plan específico que se ajuste a tus necesidades y objetivos
                                estéticos, siempre manteniendo un aspecto natural y armonioso.
                            </p>

                            <p className="leading-relaxed">
                                Nos comprometemos a brindarte una experiencia profesional,
                                cómoda y confiable, utilizando solo productos certificados y
                                siguiendo estrictos protocolos de seguridad médica.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section-padding bg-gradient-to-br from-medical-light to-white">
                <div className="container-custom">
                    <SectionHeading
                        title="Nuestros Servicios"
                        subtitle="Tratamientos especializados con resultados naturales y seguros"
                    />

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {SERVICES.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                icon={serviceIcons[index]}
                                title={service.title}
                                description={service.shortDesc}
                                href="/servicios"
                            />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/servicios">
                            <Button variant="primary">Ver Todos los Servicios</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading
                        title="¿Por Qué Elegirnos?"
                        subtitle="Nuestro compromiso con la excelencia y tu bienestar"
                    />

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <ValueCard
                            icon={Shield}
                            title="Seguridad"
                            description="Protocolos médicos estrictos y productos certificados para garantizar tu seguridad en cada procedimiento."
                        />
                        <ValueCard
                            icon={Award}
                            title="Experiencia"
                            description="Equipo médico especializado con amplia trayectoria en medicina estética y procedimientos faciales."
                        />
                        <ValueCard
                            icon={Heart}
                            title="Atención Personalizada"
                            description="Cada tratamiento es diseñado específicamente para ti, considerando tus necesidades únicas."
                        />
                        <ValueCard
                            icon={Sparkles}
                            title="Resultados Naturales"
                            description="Buscamos realzar tu belleza natural con resultados armónicos y de aspecto saludable."
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="heading-2 mb-6">
                            ¿Listo para Tu Transformación?
                        </h2>
                        <p className="mb-8 text-lg text-primary-100">
                            Agenda una consulta personalizada y descubre cómo podemos ayudarte
                            a alcanzar tus objetivos estéticos con seguridad y profesionalismo.
                        </p>
                        <Link href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="whatsapp" className="bg-white text-primary-700 hover:bg-gray-100">
                                <Sparkles className="h-5 w-5" />
                                Contactar por WhatsApp
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
