'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/constants';

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
                <div className="container-custom">
                    <SectionHeading
                        title="Contacto"
                        subtitle="Estamos aquí para atenderte. Agenda tu consulta hoy mismo."
                    />
                </div>
            </section>

            {/* Contact Information */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Contact Details */}
                        <div>
                            <h2 className="heading-3 mb-8">Información de Contacto</h2>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-4 rounded-xl border border-primary-100 bg-primary-50 p-6 transition-all duration-300 hover:shadow-lg">
                                    <div className="rounded-lg bg-primary-600 p-3">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-semibold text-medical-dark">
                                            Dirección
                                        </h3>
                                        <p className="text-medical">{BUSINESS_INFO.address}</p>
                                        <p className="mt-1 text-sm text-medical">
                                            {BUSINESS_INFO.city}, {BUSINESS_INFO.country}
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 rounded-xl border border-secondary-100 bg-secondary-50 p-6 transition-all duration-300 hover:shadow-lg">
                                    <div className="rounded-lg bg-secondary-600 p-3">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-semibold text-medical-dark">
                                            Teléfono
                                        </h3>
                                        <a
                                            href={`tel:${BUSINESS_INFO.phone}`}
                                            className="text-lg font-medium text-secondary-700 transition-colors hover:text-secondary-800"
                                        >
                                            {BUSINESS_INFO.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-start gap-4 rounded-xl border border-green-100 bg-green-50 p-6 transition-all duration-300 hover:shadow-lg">
                                    <div className="rounded-lg bg-[#25D366] p-3">
                                        <MessageCircle className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="mb-2 font-semibold text-medical-dark">
                                            WhatsApp
                                        </h3>
                                        <p className="mb-3 text-sm text-medical">
                                            La forma más rápida de comunicarte con nosotros
                                        </p>
                                        <Link
                                            href={BUSINESS_INFO.whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant="whatsapp" className="w-full sm:w-auto">
                                                <MessageCircle className="h-4 w-4" />
                                                Abrir WhatsApp
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Email (Optional) */}
                                <div className="flex items-start gap-4 rounded-xl border border-primary-100 bg-primary-50 p-6 transition-all duration-300 hover:shadow-lg">
                                    <div className="rounded-lg bg-primary-600 p-3">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 font-semibold text-medical-dark">
                                            Email
                                        </h3>
                                        <a
                                            href={`mailto:${BUSINESS_INFO.email}`}
                                            className="text-primary-700 transition-colors hover:text-primary-800"
                                        >
                                            {BUSINESS_INFO.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div>
                            <h2 className="heading-3 mb-8">Horario de Atención</h2>

                            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-medical-light p-8">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="rounded-lg bg-primary-600 p-3">
                                        <Clock className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-medical-dark">
                                        Nuestro Horario
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                                        <span className="font-medium text-medical-dark">
                                            Lunes - Viernes
                                        </span>
                                        <span className="text-primary-700 font-semibold">
                                            9:00 AM - 7:00 PM
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                                        <span className="font-medium text-medical-dark">
                                            Sábado
                                        </span>
                                        <span className="text-primary-700 font-semibold">
                                            9:00 AM - 2:00 PM
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between pb-2">
                                        <span className="font-medium text-medical-dark">
                                            Domingo
                                        </span>
                                        <span className="text-red-600 font-semibold">Cerrado</span>
                                    </div>
                                </div>

                                <div className="mt-8 rounded-lg bg-primary-100 p-4">
                                    <p className="text-sm text-primary-900">
                                        <strong>Nota:</strong> Se recomienda agendar cita previa
                                        para garantizar disponibilidad y recibir la mejor atención
                                        personalizada.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section-padding bg-medical-light">
                <div className="container-custom">
                    <SectionHeading
                        title="Encuéntranos"
                        subtitle="Visítanos en nuestra clínica ubicada en el corazón de Huánuco"
                    />

                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0!2d-76.2429!3d-9.9308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNTEuNSJTIDc2wrAxNCczMy4wIlc!5e0!3m2!1ses!2spe!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación de Harmony Estética en Huánuco"
                            className="w-full"
                        />
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-medical">
                            Jirón Aguilar #393, Huánuco
                        </p>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Jirón+Aguilar+393+Huánuco+Perú"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-700"
                        >
                            Ver en Google Maps →
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                <div className="container-custom">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="heading-2 mb-6">¿Listo para Agendar tu Consulta?</h2>
                        <p className="mb-8 text-lg text-primary-100">
                            Contáctanos por WhatsApp y uno de nuestros especialistas te
                            atenderá personalmente para resolver tus dudas y agendar tu cita.
                        </p>
                        <Link
                            href={BUSINESS_INFO.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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
