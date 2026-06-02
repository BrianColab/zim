import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zim.ca"),
  title: {
    default: "ZIM.ca | Ottawa Student Rentals Near Algonquin College",
    template: "%s | ZIM.ca",
  },
  description:
    "Professional, all-inclusive student rentals in Nepean, Ottawa near Algonquin College. Furnished rooms with utilities, internet, laundry, and a calm shared living environment.",
  keywords: [
    "Ottawa student rentals",
    "student housing Ottawa",
    "Nepean student rentals",
    "Algonquin College housing",
    "student rooms Ottawa",
    "furnished student rooms Ottawa",
    "all-inclusive student rentals Ottawa",
    "Baseline Road student housing",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://www.zim.ca",
    siteName: "ZIM.ca",
    title: "ZIM.ca | Ottawa Student Rentals Near Algonquin College",
    description:
      "All-inclusive furnished student rooms in Nepean, Ottawa. Minutes from Algonquin College and open to students from every school.",
    images: [
      {
        url: "/images/og-zim-student-rentals.jpg",
        width: 1200,
        height: 630,
        alt: "Students entering the ZIM.ca rental at 1658-1660 Baseline Road in Ottawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZIM.ca | Ottawa Student Rentals Near Algonquin College",
    description:
      "Furnished, all-inclusive student rooms in Nepean, Ottawa with utilities, internet, laundry, and respectful shared living.",
    images: ["/images/og-zim-student-rentals.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.zim.ca/#organization",
      name: "ZIM.ca",
      url: "https://www.zim.ca",
      logo: "https://www.zim.ca/icon.svg",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.zim.ca/#website",
      url: "https://www.zim.ca",
      name: "ZIM.ca Student Rentals",
      description:
        "All-inclusive furnished student rooms in Nepean, Ottawa near Algonquin College.",
      publisher: {
        "@id": "https://www.zim.ca/#organization",
      },
      inLanguage: "en-CA",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
