import type { Metadata } from "next";
import { Caveat, DM_Sans, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"]
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"]
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Portfolio | Teenager, Creator, Builder",
  description:
    "A minimalist personal portfolio focused on creativity, building, and meaningful products."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${dmSans.variable} ${caveat.variable}`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
