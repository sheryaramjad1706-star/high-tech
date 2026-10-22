
import Hero from "../../components/ElectricFence/Hero";
import ElectricFenceServicesSection from "../../components/ElectricFence/Electricfenceservices.jsx";
import ElectricFenceWireSection from "../../components/ElectricFence/Electricfencewire.jsx";
import WhyChooseHighTechSection from "../../components/ElectricFence/Whychoosehightech.jsx";
import ElectricFencingComponentSection from "../../components/ElectricFence/Electricfencingcomponents.jsx";

// Website SEO Configuration
const siteUrl = "https://hightechengineeringsolution.com";
const pageUrl = `${siteUrl}/electric-fence`;

const seoTitle =
  "Electric Fence Installation & Security | HighTech";

const seoDescription =
  "Explore electric fence installation by HighTech Engineering. Get reliable electric fencing solutions for secure residential and commercial properties.";

const ogImage = `${siteUrl}/hightech-logo.png`;

// SEO Metadata
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: seoTitle,
  description: seoDescription,

  applicationName: "High Tech Engineering Solution",

  keywords: [
    "Electric Fence Installation",
    "Electric Fence",
    "Electric Fencing",
    "Electric Fence Security",
    "Electric Fencing Systems",
    "Electric Fence Wire",
    "Electric Fence Components",
    "Perimeter Security Solutions",
    "Electric Fence Services",
    "Residential Electric Fencing",
    "Commercial Electric Fencing",
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
        alt: "Electric Fence Installation by HighTech Engineering",
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

  category: "Electric Fencing and Security",
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
      name: "Electric Fence Installation and Security",
      serviceType: "Electric Fence Installation",
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
          name: "Electric Fence",
          item: pageUrl,
        },
      ],
    },
  ],
};

// Electric Fence Page
export default function ElectricFence() {
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
        <Hero />
        <ElectricFenceServicesSection />
        <ElectricFenceWireSection />
        <WhyChooseHighTechSection />
        <ElectricFencingComponentSection />
      </main>
    </>
  );
}
