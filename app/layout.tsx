import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Zabinski Fitness | Personal Trainer Houston, TX",
  description:
    "Elite personal training in Houston, TX. 13+ years experience, 18,000+ sessions. Specializing in strength training, golf fitness, and online coaching.",
  openGraph: {
    title: "David Zabinski Fitness | Personal Trainer Houston, TX",
    description:
      "Elite personal training in Houston, TX. Strength, golf fitness, and online coaching.",
    url: "https://davidzabinskifitness.com",
    siteName: "David Zabinski Fitness",
    type: "website",
    images: [
      {
        url: "https://davidzabinskifitness.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "David Zabinski Fitness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Zabinski Fitness | Personal Trainer Houston, TX",
    description: "Elite personal training in Houston, TX",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://davidzabinskifitness.com",
  name: "David Zabinski Fitness",
  image: "https://davidzabinskifitness.com/images/logo-white.png",
  description:
    "Elite personal training in Houston, TX. 13+ years experience, 18,000+ sessions. Specializing in strength training, golf fitness, and online coaching.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5528 Cornish St Unit A",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77007",
    addressCountry: "US",
  },
  telephone: "+1-713-822-0738",
  email: "davidzabinskifitness@gmail.com",
  url: "https://davidzabinskifitness.com",
  sameAs: [
    "https://www.instagram.com/david__zabinski/",
    "https://www.youtube.com/@davidzabinskifitness",
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Houston, TX",
  },
  knowsAbout: [
    "Personal Training",
    "Strength Training",
    "Golf Fitness",
    "TPI Certification",
    "Online Coaching",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "67",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#141414] text-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
