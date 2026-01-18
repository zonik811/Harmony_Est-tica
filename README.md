# Harmony Estética - Sitio Web Institucional

Sitio web profesional para clínica de medicina estética en Huánuco, Perú.

## 🚀 Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

## 🌐 Estructura del Proyecto

```
.
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── servicios/         # Página de servicios
│   ├── nosotros/          # Página sobre nosotros
│   ├── contacto/          # Página de contacto
│   └── globals.css        # Estilos globales
├── components/
│   ├── layout/            # Header, Footer
│   └── ui/                # Componentes reutilizables
├── lib/
│   ├── constants.ts       # Constantes del negocio
│   └── metadata.ts        # Configuración SEO
└── public/                # Archivos estáticos
```

## 🎨 Paleta de Colores

- **Primary (Teal)**: #0891b2
- **Secondary (Pink)**: #ec4899
- **Medical Gray**: #64748b
- **WhatsApp Green**: #25D366

## 📱 Características

- ✅ Diseño responsive (mobile-first)
- ✅ SEO optimizado
- ✅ Integración con WhatsApp
- ✅ Google Maps embebido
- ✅ Animaciones suaves
- ✅ Tipografía profesional (Inter + Open Sans)

## 🔧 Variables de Entorno

Crear archivo `.env.local` con:

```env
NEXT_PUBLIC_BUSINESS_NAME=Harmony Estética
NEXT_PUBLIC_PHONE=+51 916 968 170
NEXT_PUBLIC_WHATSAPP_NUMBER=51916968170
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/51916968170
NEXT_PUBLIC_ADDRESS=Jirón Aguilar #393, Huánuco, Perú
NEXT_PUBLIC_CITY=Huánuco
NEXT_PUBLIC_COUNTRY=Perú
```

## 🚀 Deployment (Vercel)

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático

## 📄 Páginas

- **Inicio**: Hero, introducción, servicios, valores
- **Servicios**: Listado detallado de tratamientos
- **Nosotros**: Misión, valores, enfoque médico
- **Contacto**: Información, horarios, mapa

## 📞 Información de Contacto

- **Dirección**: Jirón Aguilar #393, Huánuco, Perú
- **Teléfono**: +51 916 968 170
- **WhatsApp**: [wa.me/51916968170](https://wa.me/51916968170)

---

Desarrollado con Next.js 15 y Tailwind CSS
