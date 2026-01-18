export const BUSINESS_INFO = {
    name: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Harmony Estética',
    phone: process.env.NEXT_PUBLIC_PHONE || '+51 916 968 170',
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '51916968170',
    whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/51916968170',
    address: process.env.NEXT_PUBLIC_ADDRESS || 'Jirón Aguilar #393, Huánuco, Perú',
    city: process.env.NEXT_PUBLIC_CITY || 'Huánuco',
    country: process.env.NEXT_PUBLIC_COUNTRY || 'Perú',
    email: 'contacto@harmonyestetica.pe', // Opcional
};

export const NAV_LINKS = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
];

export const SERVICES = [
    {
        id: 'toxina-botulinica',
        title: 'Aplicación de Toxina Botulínica',
        shortDesc: 'Tratamiento para reducir líneas de expresión y prevenir arrugas dinámicas',
        description: 'La toxina botulínica es una neurotoxina purificada que se utiliza en medicina estética para el tratamiento de arrugas dinámicas. Actúa bloqueando temporalmente la transmisión neuromuscular, reduciendo la contracción de los músculos faciales responsables de las líneas de expresión.',
        benefits: [
            'Reducción visible de arrugas en frente, entrecejo y patas de gallo',
            'Prevención de la formación de nuevas líneas de expresión',
            'Resultado natural que respeta la expresividad facial',
            'Procedimiento ambulatorio sin tiempo de recuperación',
        ],
        areas: ['Frente', 'Entrecejo', 'Contorno de ojos', 'Cuello'],
        considerations: 'Los resultados son visibles entre 3-7 días después del procedimiento y tienen una duración aproximada de 4-6 meses. Se recomienda evaluación médica previa.',
    },
    {
        id: 'rinomodelacion',
        title: 'Rinomodelación con Ácido Hialurónico',
        shortDesc: 'Corrección no quirúrgica del perfil nasal mediante rellenos dérmicos',
        description: 'La rinomodelación es un procedimiento no quirúrgico que utiliza ácido hialurónico de alta densidad para corregir imperfecciones estéticas del perfil nasal. Permite mejorar la proyección, simetría y contorno sin necesidad de cirugía.',
        benefits: [
            'Corrección de irregularidades y asimetrías nasales',
            'Mejora de la proyección y definición del dorso nasal',
            'Resultados inmediatos y naturales',
            'Procedimiento reversible y ambulatorio',
        ],
        areas: ['Dorso nasal', 'Punta nasal', 'Puente nasal'],
        considerations: 'Procedimiento ambulatorio con mínima molestia. Los resultados son inmediatos y tienen una duración de 12-18 meses. Requiere valoración médica especializada.',
    },
    {
        id: 'relleno-labios',
        title: 'Relleno de Labios',
        shortDesc: 'Aumento y definición labial con ácido hialurónico de última generación',
        description: 'El relleno labial con ácido hialurónico permite aumentar el volumen, mejorar la definición del contorno y corregir asimetrías de los labios. Se utilizan productos específicamente diseñados para tejido labial, garantizando resultados naturales y armónicos.',
        benefits: [
            'Aumento de volumen controlado y personalizado',
            'Definición del contorno labial (arco de cupido)',
            'Corrección de asimetrías',
            'Hidratación profunda del tejido labial',
        ],
        areas: ['Labio superior', 'Labio inferior', 'Contorno labial', 'Comisuras'],
        considerations: 'Se puede presentar leve inflamación durante 24-48 horas post-procedimiento. Los resultados son inmediatos y duran entre 6-12 meses dependiendo del metabolismo individual.',
    },
    {
        id: 'endolifting',
        title: 'Endolifting',
        shortDesc: 'Lifting facial no quirúrgico con tecnología de última generación',
        description: 'El Endolifting es un procedimiento mínimamente invasivo que combina la aplicación de ácido hialurónico estratégicamente posicionado con técnicas de vectorización facial. Proporciona un efecto de lifting sin cirugía, reposicionando los tejidos y restaurando los volúmenes faciales.',
        benefits: [
            'Efecto lifting inmediato sin cirugía',
            'Restauración de volúmenes faciales perdidos',
            'Reposicionamiento de tejidos descendidos',
            'Mejora de la calidad y firmeza de la piel',
        ],
        areas: ['Tercio medio facial', 'Pómulos', 'Mandíbula', 'Óvalo facial'],
        considerations: 'Procedimiento ambulatorio que requiere valoración facial completa. Los resultados son progresivos durante el primer mes y tienen una duración aproximada de 12-18 meses.',
    },
];
