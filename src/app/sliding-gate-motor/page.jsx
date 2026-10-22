
import SlidingGateHerosection from "../../components/Sliding-Gate-Motor/SlidingGateHero.jsx";
import SlidinggateexpertisSection from "../../components/Sliding-Gate-Motor/Slidinggateexperties.jsx";
import SlidingGateDetailsSection from "../../components/Sliding-Gate-Motor/Slidinggatedetials.jsx";
import SlidingGateAssistanceSection from "../../components/Sliding-Gate-Motor/Slidinggateassistance.jsx";

// Website SEO Configuration
const siteUrl = "https://hightechengineeringsolution.com";
const pageUrl = `${siteUrl}/sliding-gate-motor`;

const seoTitle =
  "Automatic Sliding Gate Motors | HighTech Engineering";

const seoDescription =
  "Explore automatic sliding gate motors from HighTech Engineering. Discover reliable gate automation solutions for secure, smooth and convenient access.";

const ogImage = `${siteUrl}/hightech-logo.png`;

// SEO Metadata
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: seoTitle,
  description: seoDescription,

  applicationName: "High Tech Engineering Solution",

  keywords: [
    "Automatic Sliding Gate Motors",
    "Sliding Gate Motors",
    "Sliding Gate Motor",
    "Sliding Gate Automation",
    "Automatic Sliding Gate",
    "Electric Sliding Gate Motor",
    "Sliding Gate Motor Installation",
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

  // Search Engine Robots
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

  // Open Graph: Facebook, LinkedIn, WhatsApp
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
        alt: "Automatic Sliding Gate Motors by HighTech Engineering",
      },
    ],
  },

  // Twitter / X Metadata
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [ogImage],
  },

  category: "Gate Automation and Security",
};

// SEO Schema / Structured Data
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
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Automatic Sliding Gate Motors",
      serviceType: "Sliding Gate Motor Installation and Automation",
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
          name: "Sliding Gate Motors",
          item: pageUrl,
        },
      ],
    },
  ],
};

// Sliding Gate Motors Page
export default function SlidingGateMotorsPage() {
  return (
    <>
      {/* SEO JSON-LD Structured Data */}
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
        <SlidingGateHerosection />
        <SlidinggateexpertisSection />
        <SlidingGateDetailsSection />
        <SlidingGateAssistanceSection />
      </main>
    </>
  );
}
