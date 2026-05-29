import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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
        url: "/images/main.png",
        width: 1200,
        height: 630,
        alt: "Modern furnished student housing at ZIM.ca in Ottawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZIM.ca | Ottawa Student Rentals Near Algonquin College",
    description:
      "Furnished, all-inclusive student rooms in Nepean, Ottawa with utilities, internet, laundry, and respectful shared living.",
    images: ["/images/main.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
