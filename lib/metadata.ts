import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
    metadataBase: new URL('https://harmonyestetica.pe'),
    title: {
        default: 'Harmony Estética | Clínica de Medicina Estética en Huánuco',
        template: '%s | Harmony Estética',
    },
    description: 'Clínica de medicina estética en Huánuco, Perú. Servicios especializados: toxina botulínica, rinomodelación, relleno labial y endolifting. Profesionalismo y seguridad garantizados.',
    keywords: [
        'medicina estética Huánuco',
        'toxina botulínica Perú',
        'rinomodelación',
        'relleno labial',
        'endolifting',
        'ácido hialurónico',
        'clínica estética Huánuco',
        'Harmony Estética',
    ],
    authors: [{ name: 'Harmony Estética' }],
    creator: 'Harmony Estética',
    publisher: 'Harmony Estética',
    openGraph: {
        type: 'website',
        locale: 'es_PE',
        url: 'https://harmonyestetica.pe',
        siteName: 'Harmony Estética',
        title: 'Harmony Estética | Clínica de Medicina Estética en Huánuco',
        description: 'Clínica de medicina estética en Huánuco, Perú. Servicios especializados con profesionalismo y seguridad garantizados.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Harmony Estética',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Harmony Estética | Medicina Estética en Huánuco',
        description: 'Clínica especializada en medicina estética en Huánuco, Perú',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export const homeMetadata: Metadata = {
    title: 'Inicio',
    description: 'Bienvenido a Harmony Estética, su clínica de medicina estética de confianza en Huánuco. Ofrecemos tratamientos especializados con los más altos estándares de calidad y seguridad.',
};

export const servicesMetadata: Metadata = {
    title: 'Nuestros Servicios',
    description: 'Descubre nuestros tratamientos de medicina estética: toxina botulínica, rinomodelación con ácido hialurónico, relleno de labios y endolifting. Procedimientos seguros y resultados naturales.',
    keywords: [
        'toxina botulínica Huánuco',
        'botox Perú',
        'rinomodelación sin cirugía',
        'relleno labial ácido hialurónico',
        'endolifting facial',
        'tratamientos faciales Huánuco',
    ],
};

export const aboutMetadata: Metadata = {
    title: 'Nosotros',
    description: 'Conoce a Harmony Estética, clínica de medicina estética comprometida con la excelencia, seguridad y resultados naturales. Experiencia y profesionalismo en cada tratamiento.',
};

export const contactMetadata: Metadata = {
    title: 'Contacto',
    description: 'Contáctanos en Jirón Aguilar #393, Huánuco, Perú. Teléfono: +51 916 968 170. Agenda tu consulta por WhatsApp y descubre cómo podemos ayudarte.',
};
