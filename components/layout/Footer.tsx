import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-medical-dark to-medical-dark/95 text-white">
            <div className="container-custom py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Business Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-4 flex items-center space-x-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 shadow-lg">
                                <span className="text-xl font-bold">H</span>
                            </div>
                            <span className="text-xl font-bold">{BUSINESS_INFO.name}</span>
                        </div>
                        <p className="mb-6 max-w-md text-sm leading-relaxed text-gray-300">
                            Clínica de medicina estética comprometida con la excelencia,
                            seguridad y resultados naturales. Tu bienestar es nuestra prioridad.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />
                                <div>
                                    <p className="text-sm font-medium">Ubicación</p>
                                    <p className="text-sm text-gray-300">{BUSINESS_INFO.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />
                                <div>
                                    <p className="text-sm font-medium">Razon Social: </p>
                                    <p className="text-sm text-gray-300">{BUSINESS_INFO.razonsocial}</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />
                                <div>
                                    <p className="text-sm font-medium">RUC</p>
                                    <p className="text-sm text-gray-300">{BUSINESS_INFO.ruc}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />
                                <div>
                                    <p className="text-sm font-medium">Teléfono</p>
                                    <a
                                        href={`tel:${BUSINESS_INFO.phone1}`}
                                        className="text-sm text-gray-300 transition-colors hover:text-primary-400"
                                    >
                                        {BUSINESS_INFO.phone1}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <MessageCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#25D366]" />
                                <div>
                                    <p className="text-sm font-medium">WhatsApp</p>
                                    <a
                                        href={BUSINESS_INFO.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-300 transition-colors hover:text-[#25D366]"
                                    >
                                        {BUSINESS_INFO.phone1}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 transition-colors hover:text-primary-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Business Hours (Placeholder) */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Horario de Atención</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Lunes - Viernes</li>
                            <li className="font-medium text-white">9:00 AM - 7:00 PM</li>
                            <li className="mt-3">Sábado</li>
                            <li className="font-medium text-white">9:00 AM - 2:00 PM</li>
                            <li className="mt-3 text-primary-400">Domingo: Cerrado</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-center text-sm text-gray-400">
                            © {currentYear} {BUSINESS_INFO.name}. Todos los derechos reservados.
                        </p>
                        <p className="text-center text-xs text-gray-500">
                            Clínica de Medicina Estética | Huánuco, Perú
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
