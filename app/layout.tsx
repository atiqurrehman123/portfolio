import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Atiq Rehman | MERN Stack & React Native Developer",
  description:
    "Portfolio of Atiq Rehman — MERN Stack & React Native developer building scalable full-stack web apps and cross-platform mobile apps with MongoDB, Express, React, Node.js, Next.js, and React Native.",
  openGraph: {
    title: "Atiq Rehman | MERN Stack & React Native Developer",
    description:
      "Full-stack MERN & React Native developer building scalable web and cross-platform mobile apps. Available for freelance and full-time work.",
    images: [
      {
        url: "/profile-photo.png",
        width: 1200,
        height: 630,
        alt: "Atiq Rehman - MERN Stack & React Native Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atiq Rehman | MERN Stack & React Native Developer",
    description:
      "Full-stack MERN & React Native developer building scalable web and cross-platform mobile apps. Available for freelance and full-time work.",
    images: ["/profile-photo.png"],
  },
  icons: {
    icon: "/profile-photo.png",
    apple: "/profile-photo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
