import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Providers from "@/providers";
import MouseGlow from "@/components/animations/MouseGlow";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { LeadPopupProvider } from "@/context/LeadPopupContext";
import LeadPopup from "@/components/common/LeadPopup";
import {
  organizationSchema,
  localBusinessSchema,
} from "./schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dndc.in"),

  title: {
    default: "DNDC | Best IT Training Institute in Bhopal",
    template: "%s | DNDC",
  },

  description:
    "Join DNDC, Bhopal's leading IT Training Institute offering industry-focused courses in MERN Stack, Java Full Stack, Python, Data Analytics, Data Science, AI & Machine Learning with live projects and career guidance.",

  keywords: [
    "DNDC",
    "IT Institute in Bhopal",
    "Coding Institute in Bhopal",
    "Data Analytics Course in Bhopal",
    "Best IT Institute in Bhopal",
    "MERN Stack Course",
    "Java Full Stack",
    "Python Full Stack",
    "Data Analytics",
    "Data Science",
    "AI Course",
    "Machine Learning",
    "Web Development",
    "Programming Institute",
    "Coding Classes",
    "Fullstack course in bhopal",
    "Software Training",
    "Placement Assistance",
    "Bhopal",
    "Best IT Placement Consultancy"
  ],

  authors: [{ name: "DNDC" }],
  creator: "DNDC",
  publisher: "DNDC",

  alternates: {
    canonical: "https://dndc.in",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dndc.in",
    siteName: "DNDC",
    title: "DNDC | Best IT Training Institute in Bhopal",
    description:
      "Learn MERN Stack, Java, Python, AI, Data Analytics and Data Science with industry experts at DNDC.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DNDC - Best IT Training Institute",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DNDC | Best IT Training Institute in Bhopal",
    description:
      "Industry-ready training in Full Stack Development, AI, Data Analytics and more.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable}`}>
          <LeadPopupProvider>
          <Providers>
            <MouseGlow />
        {children}
        </Providers>
        <LeadPopup />
         <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={12}
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "16px",
              background: "#18181B",
              color: "#fff",
              padding: "16px 18px",
            },
            success: {
              iconTheme: {
                primary: "#f97316",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
          
        />
        </LeadPopupProvider>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationSchema),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(localBusinessSchema),
  }}
/>
      </body>
    </html> );}