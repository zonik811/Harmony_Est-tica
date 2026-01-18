'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'whatsapp';
    children: React.ReactNode;
    className?: string;
}

export default function Button({
    variant = 'primary',
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        whatsapp: 'btn-whatsapp',
    };

    return (
        <button className={`${baseClasses[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
