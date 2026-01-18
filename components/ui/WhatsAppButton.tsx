'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after component mounts
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Link
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-all duration-500 hover:scale-110 hover:shadow-[#25D366]/60 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="h-7 w-7 animate-pulse" />

            {/* Ripple effect */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        </Link>
    );
}
