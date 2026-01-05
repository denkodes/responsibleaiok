/**
 * ROOT LAYOUT
 * 
 * This is the main layout wrapper for the entire application.
 * It includes:
 * - Font configuration (Inter for Swiss-inspired typography)
 * - SEO metadata (title, description, Open Graph)
 * - Global styles
 * - Structured data for search engines
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_METADATA, ORG_INFO } from "@/lib/constants";

/* ============================================
   FONT CONFIGURATION
   ============================================
   
   Using Inter font family for both headings and body.
   - Inter: Excellent readability, professional, Swiss-inspired
   - Variable font with optical sizing for better rendering
   - Preloaded for performance
   ============================================ */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Prevents invisible text while font loads
  preload: true,
  // Optical sizing automatically adjusts letter spacing based on size
  adjustFontFallback: true,
});

// Inter Display variant for headings (same family, optimized for larger sizes)
const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-inter-display",
  display: "swap",
  weight: ["600", "700", "800"], // Bold weights for headings
  preload: true,
});

/* ============================================
   SEO METADATA
   ============================================
   
   Comprehensive metadata for search engines and social sharing.
   This appears in search results and when sharing on social media.
   ============================================ */

export const metadata: Metadata = {
  // Basic metadata
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,

  // Keywords for search engines (use sparingly, not heavily weighted by Google)
  keywords: [
    "responsible AI",
    "AI governance",
    "AI safety",
    "Oklahoma",
    "artificial intelligence",
    "community engagement",
    "AI education",
    "AI policy",
    "nonprofit AI support",
    "AI capacity building",
    "civic tech Oklahoma",
    "AI governance training",
    "community AI literacy",
    "AI ethics education",
    "grassroots AI safety",
    "AI readiness nonprofits",
  ],

  // Author and creator information
  authors: [{ name: ORG_INFO.name }],
  creator: ORG_INFO.name,
  publisher: ORG_INFO.name,

  // Canonical URL (prevents duplicate content issues)
  metadataBase: new URL(SITE_METADATA.url),

  // Open Graph metadata (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_METADATA.url,
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: ORG_INFO.name,
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: `${ORG_INFO.name} - ${ORG_INFO.tagline}`,
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: [SITE_METADATA.ogImage],
    creator: "@responsibleaiok", // Update with actual Twitter handle
  },

  // Robots directives (allow indexing)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification for search consoles (add when available)
  // verification: {
  //   google: 'your-google-verification-code',
  // },

  // App icons and favicons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0F172A" },
    ],
  },

  // Manifest for PWA (if needed in future)
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#0F172A",
};

/* ============================================
   ROOT LAYOUT COMPONENT
   ============================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 
        Structured Data (JSON-LD) for search engines
        Helps Google understand our organization
      */}
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5QEKF3S811"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5QEKF3S811');
            `,
          }}
        />

        {/* HubSpot Tracking Code */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na2.hs-scripts.com/242682784.js"
        />

        {/* Structured Data (JSON-LD) for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: ORG_INFO.name,
              alternateName: ORG_INFO.formerName,
              foundingDate: "2024",
              url: SITE_METADATA.url,
              logo: `${SITE_METADATA.url}/logo.png`,
              description: SITE_METADATA.description,
              areaServed: {
                "@type": "State",
                name: "Oklahoma",
              },
              knowsAbout: [
                "AI Governance",
                "AI Safety",
                "Responsible AI",
                "AI Ethics",
                "Community AI Education",
                "Nonprofit AI Support",
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "OK",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.linkedin.com/company/aistulsa/",
                "https://www.facebook.com/p/AI-Safety-Tulsa-61574217595795/",
                "https://www.instagram.com/aistulsa/",
              ],
            }),
          }}
        />

        {/* FAQ Schema for AI Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Responsible AI OK?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Responsible AI OK is a public interest initiative that helps Oklahoma nonprofits, civic organizations, and communities build AI governance capacity through workshops, education, and practical guidance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who should partner with Responsible AI OK?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Foundations supporting AI governance, nonprofits exploring AI adoption, civic organizations, educational institutions, and community groups in Oklahoma seeking responsible AI guidance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What services does Responsible AI OK provide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide community events, workshops and training, education and awareness programs, and AI governance guidance for nonprofits and civic organizations across Oklahoma.",
                  },
                },
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${interDisplay.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* 
          Main content wrapper
          suppressHydrationWarning prevents console warnings from
          browser extensions that modify the DOM
        */}
        {children}
      </body>
    </html>
  );
}
