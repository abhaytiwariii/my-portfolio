import type { Metadata } from "next";
import { Roboto, Archivo_Black } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhay Tiwari",
  jobTitle: "Full Stack Developer",
  url: "https://abhaytiwari.vercel.app",
  sameAs: [
    "https://github.com/abhaytiwariii",
    "https://linkedin.com/in/abhaytiwariii",
    "https://x.com/_abhaytiwariii",
    "https://instagram.com/_abhaytiwariii",
  ],
};

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const archivo = Archivo_Black({
  weight: ["400"],
  variable: "--font-archivo-black",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhay Tiwari | Full Stack Developer (Next.js, FastAPI, PostgreSQL)",
  description:
    "Abhay Tiwari is a Full Stack Developer building scalable, high-performance web applications using Next.js, React, TypeScript, FastAPI, and PostgreSQL. View real-world projects and production-level work.",
  keywords: [
    "Abhay Tiwari",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "FastAPI Developer",
    "PostgreSQL",
    "TypeScript",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Abhay Tiwari" }],
  creator: "Abhay Tiwari",

  metadataBase: new URL("https://abhaytiwari.vercel.app"),

  openGraph: {
    title: "Abhay Tiwari | Full Stack Developer",
    description:
      "Full Stack Developer building scalable web apps with Next.js, FastAPI, and PostgreSQL.",
    url: "https://abhaytiwari.vercel.app",
    siteName: "Abhay Tiwari Portfolio",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhay Tiwari - Full Stack Developer",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhay Tiwari | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, FastAPI, and PostgreSQL.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${archivo.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
