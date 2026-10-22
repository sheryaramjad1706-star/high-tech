
import ContactHeroSection from "../../components/contactnow/Contact-hero.jsx";
import StayConnectedSection from "../../components/contactnow/Stayconnectedsection.jsx";

// SEO Configuration
const siteUrl = "https://hightechengineeringsolution.com";
const pageUrl = `${siteUrl}/contact`;

const seoTitle =
  "Contact HighTech Engineering | Gate Motor & Electric Fence";

const seoDescription =
  "Contact HighTech Engineering for automatic gate motors, electric fence installation and security automation solutions. Get in touch with our team.";

const ogImage = `${siteUrl}/hightech-logo.png`;

// SEO Metadata
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: seoTitle,
  description: seoDescription,

  applicationName: "High Tech Engineering Solution",

  keywords: [
    "Contact HighTech Engineering",
    "Gate Motor Installation Contact",
    "Electric Fence Installation",
    "Gate Automation Services",
    "Automatic Gate Motor",
    "Security Automation Solutions",
    "Electric Fence Services",
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
        alt: "Contact HighTech Engineering for Gate Motor and Electric Fence Solutions",
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

  category: "Contact and Security Automation Services",
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
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
      about: {
        "@id": `${siteUrl}/#organization`,
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
          name: "Contact Us",
          item: pageUrl,
        },
      ],
    },
  ],
};

// Contact Page
export default function ContactPage() {
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
        <ContactHeroSection />
        <StayConnectedSection />
      </main>
    </>
  );
}
