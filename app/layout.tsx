import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider/ThemeProvider";
export const dynamic = 'force-dynamic'
import JsonLD from "../scripts/jsonLD";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bluewaveholidayhouse.com";

export const metadata: Metadata = {
  title: {
    default: "Blue Wave — Cozy Coastal Stays",
    template: "%s | Blue Wave",
  },
  description:
    "Blue Wave: stylish coastal apartments with curated comforts, clear policies, and local recommendations — book your memorable stay.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "coastal apartments",
    "vacation rental",
    "short term rental",
    "holiday stay",
    "Blue Wave",
  ],
  authors: [{ name: "Blue Wave", url: SITE_URL }],
  creator: "Blue Wave",
  publisher: "Blue Wave",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Blue Wave — Aci Trezza · Sicilia orientale",
    description:
      "Stylish coastal apartments with curated comforts, clear policies and local recommendations.",
    url: SITE_URL,
    siteName: "Blue Wave",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Blue Wave apartment interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Wave — Cozy Coastal Stays",
    description:
      "Stylish coastal apartments with curated comforts, clear policies and local recommendations.",
    images: [`${SITE_URL}/images/og-image.jpg`],
    site: "@BlueWave",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
  } as any,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" href={`${SITE_URL}/sea.webp`} as="image" fetchPriority="high" />
        <style>{`/* Critical Hero CSS: inline to reduce render-blocking */
          #home { min-height: 60vh; }
          .hero-bg-fallback { background-image: url('/sea.webp'); background-size: cover; background-position: center; }
        `}</style>
        {/* <script
          type="application/ld+json"
          // Structured data for better SERP results
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "Blue Wave",
            url: SITE_URL,
            description:
              "Blue Wave: stylish coastal apartments with curated comforts, clear policies, and local recommendations.",
            image: `${SITE_URL}/images/og-image.jpg`,
            sameAs: [SITE_URL],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Coastal Town",
              addressRegion: "",
              addressCountry: "",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "124",
            },
          }) }}
        /> */}
        <JsonLD />
      </head>
      <body className={inter.className}>
        {/* <ThemeProvider> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html> 
  );
}
