import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Atiq Rehman | Senior Frontend Developer (React & Next.js)",
  description:
    "Portfolio of Atiq Rehman, Senior Frontend Developer specializing in React, Next.js, TypeScript, and scalable frontend architectures.",
  openGraph: {
    title: "Atiq Rehman | Senior Frontend Developer",
    description:
      "Portfolio of Atiq Rehman, Senior Frontend Developer specializing in React, Next.js, TypeScript, and scalable frontend architectures.",
    images: [
      {
        url: "/profile-photo.png",
        width: 1200,
        height: 630,
        alt: "Atiq Rehman - Senior Frontend Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atiq Rehman | Senior Frontend Developer",
    description:
      "Portfolio of Atiq Rehman, Senior Frontend Developer specializing in React, Next.js, TypeScript, and scalable frontend architectures.",
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
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
