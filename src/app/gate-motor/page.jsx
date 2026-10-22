
import GateHeros from "../../components/GateMoter/GateHero";
import Services from "../../components/GateMoter/Services";
import Whychoosehightech from "../../components/GateMoter/Whychoosehightech";
import Makeusspecial from "../../components/GateMoter/Makeusspecial";

// Website Configuration
const siteUrl = "https://hightechengineeringsolution.com";
const pageUrl = `${siteUrl}/gate-moter`;

const seoTitle =
  "Automatic Gate Motor Solutions | HighTech Engineering";

const seoDescription =
  "Discover automatic gate motor solutions from HighTech Engineering. Explore gate automation, secure access and reliable systems for your property.";

const ogImage = `${siteUrl}/hightech-logo.png`;

const logoUrl =
  `${siteUrl}/wp-content/uploads/2025/10/Asset-4.png`;

// SEO Metadata
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: seoTitle,
  description: seoDescription,

  applicationName: "High Tech Engineering Solution",

  keywords: [
    "Automatic Gate Motor",
    "Gate Motor Solutions",
    "Automatic Gate Systems",
    "Gate Automation",
    "Gate Motor Installation",
    "Automatic Gate Installation",
    "Residential Gate Motors",
    "Commercial Gate Automation",
    "Electric Gate Motor",
    "Gate Security Systems",
    "HighTech Engineering",
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

  // Open Graph - Facebook, LinkedIn, WhatsApp
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
        alt: "Automatic Gate Motor Solutions by HighTech Engineering",
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

// Schema Structured Data
const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "High Tech Engineering Solution",
      alternateName: "High Tech",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },

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
      publisher: {
        "@id": `${siteUrl}/#organization`,
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
      name: "Automatic Gate Motor Solutions",
      serviceType: "Gate Motor Installation and Automation",
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
          name: "Gate Motor",
          item: pageUrl,
        },
      ],
    },
  ],
};

// Gate Motor Page
export default function GateMotor() {
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
        <GateHeros />
        <Services />
        <Whychoosehightech />
        <Makeusspecial />
      </main>
    </>
  );
}
