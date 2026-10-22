
import SwingGateMotorHeroSection from "../../components/Swing-gate-motor/Swinggatemotorhero.jsx";
import SwingGateExpertiseSection from "../../components/Swing-gate-motor/Swinggateexpertise.jsx";
import SwingGateDetialsSection from "../../components/Swing-gate-motor/Swinggatedetails.jsx";
import SwingGateAssistanceSection from "../../components/Swing-gate-motor/Swinggateassistance.jsx";

// Website SEO Configuration
const siteUrl = "https://hightechengineeringsolution.com";
const pageUrl = `${siteUrl}/swing-gate-motor`;

const seoTitle =
  "Automatic Swing Gate Motors | HighTech Engineering";


  const seoDescription =
  "Explore automatic swing gate motors by HighTech Engineering. Get reliable gate automation solutions for secure, convenient property access.";

const ogImage = `${siteUrl}/hightech-logo.png`;

// SEO Metadata
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: seoTitle,
  description: seoDescription,

  applicationName: "High Tech Engineering Solution",

  keywords: [
    "Automatic Swing Gate Motors",
    "Swing Gate Motors",
    "Swing Gate Motor",
    "Swing Gate Automation",
    "Automatic Swing Gate",
    "Electric Swing Gate Motor",
    "Swing Gate Motor Installation",
    "Swing Gate Opener",
    "Gate Automation Systems",
    "High Tech Engineering Solution",
  ],

  authors: [
    { name: "High Tech Engineering Solution" },
  ],
  creator: "High Tech Engineering Solution",
  publisher: "High Tech Engineering Solution",

  // Canonical URL
  alternates: {
    canonical: pageUrl,
  },

  // Search Engine Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Open Graph: Facebook, WhatsApp, LinkedIn
  openGraph: {
    type: "website",
    locale: "en_US",
    url: pageUrl,
    siteName: "High Tech Engineering Solution",
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Automatic Swing Gate Motors by HighTech Engineering",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [ogImage],
  },

  category: "Gate Automation and Security",
};

// Structured Data / JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: seoTitle,
      description: seoDescription,
      inLanguage: "en-US",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Automatic Swing Gate Motors",
      serviceType: "Swing Gate Motor Installation and Automation",
      description: seoDescription,
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      url: pageUrl,
      mainEntityOfPage: {
        "@id": `${pageUrl}#webpage`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Swing Gate Motors",
          item: pageUrl,
        },
      ],
    },
  ],
};

// Swing Gate Motors Page
export default function SwingGateMotorsPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main id="main-content">
        <SwingGateMotorHeroSection />
        <SwingGateExpertiseSection />
        <SwingGateDetialsSection />
        <SwingGateAssistanceSection />
      </main>
    </>
  );
}
