
import PortfolioHeroSection from "../../components/portfoliopagesections/portfoliohero.jsx";
import ProjectsGallerySection from "../../components/portfoliopagesections/Projectsgallery.jsx";

// SEO Configuration
const siteUrl = "https://hightechengineeringsolution.com";
const pageUrl = `${siteUrl}/portfolio`;

const seoTitle =
  "Gate Motor & Electric Fence Projects | HighTech";

const seoDescription =
  "Explore HighTech Engineering's gate motor, automatic gate and electric fence projects. See our security automation and installation portfolio.";

const ogImage = `${siteUrl}/hightech-logo.png`;

// SEO Metadata
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: seoTitle,
  description: seoDescription,

  applicationName: "High Tech Engineering Solution",

  keywords: [
    "Gate Motor Projects",
    "Electric Fence Projects",
    "Gate Automation Portfolio",
    "Automatic Gate Installations",
    "Sliding Gate Motor Projects",
    "Swing Gate Motor Projects",
    "Security Automation Projects",
    "High Tech Engineering Portfolio",
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

  // Robots
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
        alt: "HighTech Engineering Gate Motor and Electric Fence Projects",
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

  category: "Engineering Projects and Security Automation",
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
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
          name: "Portfolio",
          item: pageUrl,
        },
      ],
    },
  ],
};

// Portfolio Page
export default function PortfolioPage() {
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
        <PortfolioHeroSection />
        <ProjectsGallerySection />
      </main>
    </>
  );
}
