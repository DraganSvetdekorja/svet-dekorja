import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Svet Dekorja - Premium notranje obloge',
  description: 'Ekskluzivne tapete, fototapete, samolepilne folije in tkanine. Brezplačna dostava nad 50 €. Salon v Ljubljani.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  // Open Graph
  openGraph: {
    title: 'Svet Dekorja - Premium notranje obloge',
    description: 'Ekskluzivne tapete, fototapete, samolepilne folije in tkanine. Brezplačna dostava nad 50 €. Salon v Ljubljani.',
    url: 'https://intercont.si',
    siteName: 'Svet Dekorja',
    images: [
      {
        url: 'https://intercont.si/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Svet Dekorja - Premium notranje obloge',
      },
    ],
    locale: 'sl_SI',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl" className={inter.className}>
      <head>
        {/* JSON-LD Schema for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Svet Dekorja",
              image: "https://intercont.si/logo.png",
              "@id": "https://intercont.si",
              url: "https://intercont.si",
              telephone: "+386 1 234 56 78",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Šmartinska 53",
                addressLocality: "Ljubljana",
                postalCode: "1000",
                addressCountry: "SI",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 46.0569,
                longitude: 14.5058,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              priceRange: "$$",
              servesCuisine: "Not applicable",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Svet Dekorja Catalog",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "Tapete",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Fototapete",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Samolepilne folije",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Dekorativne tkanine",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Tepihi",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}