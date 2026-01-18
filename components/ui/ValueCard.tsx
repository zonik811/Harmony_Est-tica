'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-medical-light to-white p-8 shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-medical-dark">{title}</h3>
                <p className="text-medical leading-relaxed">{description}</p>
            </div>
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-100 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
        </div>
    );
}
