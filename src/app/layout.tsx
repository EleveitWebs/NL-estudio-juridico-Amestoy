import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { BASE_DOMAIN, siteUrl } from "./seo";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_DOMAIN),
  title: "Estudio Amestoy & Asociados | Derecho Civil Patrimonial",
  description:
    "Estudio juridico especializado en Derecho Civil Patrimonial, recupero de inmuebles, sucesiones, divisiones de condominio, subastas judiciales y derecho penal en CABA y Provincia de Buenos Aires.",
  alternates: {
    canonical: siteUrl(),
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Estudio Amestoy & Asociados",
  description:
    "Especialistas en Derecho Civil Patrimonial y recupero de inmuebles en CABA y Provincia de Buenos Aires.",
  url: siteUrl(),
  logo: siteUrl("/logo%20amestoy%202.png"),
  image: siteUrl("/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg"),
  telephone: "+54 11 6011-1758",
  email: "info@amestoy.com.ar",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Corrientes 1386 Piso 4 Oficina 17",
    addressLocality: "CABA",
    addressCountry: "AR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: ["CABA", "Provincia de Buenos Aires"],
  sameAs: ["https://instagram.com/amestoyestudiojuridico"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Areas de practica",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Recupero de Inmuebles",
          description:
            "Acciones de desalojo y reivindicacion para recuperar su propiedad usurpada.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sucesiones",
          description:
            "Ab-intestato y testamentarias, tramites completos para proteger su herencia.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Divisiones de Condominio",
          description:
            "Resolucion de conflictos entre copropietarios de manera efectiva.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Subastas Judiciales",
          description:
            "Asesoramiento y representacion en subastas judiciales especializadas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Derecho Penal",
          description:
            "Defensa penal especializada y asesoramiento en procesos criminales.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta
          property="og:title"
          content="Estudio Amestoy & Asociados | Derecho Civil Patrimonial"
        />
        <meta
          property="og:description"
          content="Especialistas en Derecho Civil Patrimonial y recupero de inmuebles en CABA y Provincia de Buenos Aires."
        />
        <meta property="og:url" content={siteUrl()} />
        <meta property="og:site_name" content="Estudio Amestoy & Asociados" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={siteUrl("/logo%20amestoy%202.png")}
        />
        <meta
          property="og:image:alt"
          content="Estudio Amestoy & Asociados"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceJsonLd),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
