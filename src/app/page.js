import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Workingprocess from "@/src/components/Workingprocess";
import Whychooseus from "@/src/components/Whychooseus";
import Ourteam from "@/src/components/Ourteam";
import Testinomials from "@/src/components/Testinomials";
import Blogsection from "@/src/components/Blogsection";

const siteUrl = "https://hightechengineeringsolution.com";

const seoTitle =
  "Best Gate Motor & Electric Fence Solutions | HighTech";

const seoDescription =
  "HighTech Engineering offers the Best Gate Motor & Electric Fence systems for homes. Get reliable automatic gate motors, electric fence.";

const logoUrl =
  `${siteUrl}/wp-content/uploads/2025/10/Asset-4.png`;

const ogImage = `${siteUrl}/hightech-logo.png`;

// SEO Metadata
export const metadata = {
  metadataBase: new URL(siteUrl),

  title: seoTitle,
  description: seoDescription,

  applicationName: "High Tech Engineering Solution",

  keywords: [
    "Best Gate Motor & Electric Fence",
    "Automatic Gate Motor",
    "Electric Fence",
    "Electric Fencing",
    "Gate Automation",
    "Automatic Gate Installation",
    "Gate Motor Installation",
    "Electric Fence Installation",
    "Security Automation",
    "Gate Motor Solutions",
    "Residential Security Solutions",
    "High Tech Engineering Solution",
  ],

  authors: [{ name: "High Tech Engineering Solution" }],
  creator: "High Tech Engineering Solution",
  publisher: "High Tech Engineering Solution",

  alternates: {
    canonical: "/",
  },

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

  // Facebook, LinkedIn, WhatsApp
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "High Tech Engineering Solution",
    title: seoTitle,
    description: seoDescription,
   
images: [
  {
    url: ogImage,
    width: 1200,
    height: 630,
    alt: "HighTech Gate Motor and Electric Fence Solutions",
  },
],

  },

  // X (Twitter)
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [ogImage],
  },

  category: "Engineering and Security Automation",
};

// Structured Data / JSON-LD
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
        "@id": `${siteUrl}/#logo`,
        url: logoUrl,
        contentUrl: logoUrl,
        caption: "High Tech Engineering Solution",
      },
      description: seoDescription,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "High Tech Engineering Solution",
      alternateName: "High Tech",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: seoTitle,
      description: seoDescription,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#gate-automation-service`,
      name: "Automatic Gate Motor Solutions",
      description:
        "Automatic gate motor and gate automation solutions for residential and commercial properties.",
      serviceType: "Gate Motor Installation and Automation",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      url: `${siteUrl}/`,
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#electric-fencing-service`,
      name: "Electric Fence Solutions",
      description:
        "Electric fencing and perimeter security solutions for residential and commercial properties.",
      serviceType: "Electric Fence Installation",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      url: `${siteUrl}/`,
    },
  ],
};

export default function Home() {
  return (
    <>
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
        <About />
        <Services />
        <Workingprocess />
        <Whychooseus />
        <Ourteam />
        <Testinomials />
        <Blogsection />
      </main>
    </>
  );
}
