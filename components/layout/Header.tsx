'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 z-40 w-full transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 shadow-md backdrop-blur-sm'
                    : 'bg-white shadow-sm'
                }`}
        >
            <nav className="container-custom">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg">
                            <span className="text-xl font-bold">H</span>
                        </div>
                        <span className="text-xl font-bold text-medical-dark">
                            {BUSINESS_INFO.name}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-8 md:flex">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${pathname === link.href
                                        ? 'text-primary-600'
                                        : 'text-medical hover:text-primary-600'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <Link href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="whatsapp" className="text-xs">
                                <Phone className="h-4 w-4" />
                                Contactar
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="rounded-lg p-2 text-medical hover:bg-medical-light md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                >
                    <div className="space-y-4 pb-6 pt-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${pathname === link.href
                                        ? 'bg-primary-50 text-primary-600'
                                        : 'text-medical hover:bg-medical-light'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="px-4 pt-2">
                            <Link href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="whatsapp" className="w-full text-sm">
                                    <Phone className="h-4 w-4" />
                                    Contactar por WhatsApp
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
