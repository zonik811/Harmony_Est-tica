'use client';

import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

export default function SectionHeading({
    title,
    subtitle,
    centered = true,
    className = '',
}: SectionHeadingProps) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
            <h2 className="heading-2 mb-4">{title}</h2>
            {subtitle && (
                <p className="mx-auto max-w-2xl text-lg text-medical">{subtitle}</p>
            )}
        </div>
    );
}
