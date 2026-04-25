import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
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

  metadataBase: new URL("https://abhaytiwariii.vercel.app"),

  openGraph: {
    title: "Abhay Tiwari | Full Stack Developer",
    description:
      "Full Stack Developer building scalable web apps with Next.js, FastAPI, and PostgreSQL.",
    url: "https://abhaytiwariii.vercel.app",
    siteName: "Abhay Tiwari Portfolio",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "/homepage.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhay Tiwari | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, FastAPI, and PostgreSQL.",
    images: ["/homepage.png"],
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
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
