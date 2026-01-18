'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    href?: string;
}

export default function ServiceCard({
    icon: Icon,
    title,
    description,
    href,
}: ServiceCardProps) {
    const content = (
        <>
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg">
                <Icon className="h-7 w-7" />
            </div>
            <h3 className="heading-3 mb-3 text-xl">{title}</h3>
            <p className="text-medical leading-relaxed">{description}</p>
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className="card group border border-transparent hover:border-primary-200"
            >
                {content}
                <div className="mt-4 flex items-center text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-700">
                    Ver más
                    <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </Link>
        );
    }

    return <div className="card">{content}</div>;
}
