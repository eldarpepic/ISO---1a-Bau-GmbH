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
  title: "ISO - 1a Bau GmbH",
  description:
    "ISO - 1a Bau GmbH bietet Hoch- und Tiefbauarbeiten, Fundamentarbeiten, Kanal- und Wasserinstallationen, Umbauten, sowie Elektro-, Sanitär-, Heizungs- und Klimaanlageninstallationen und die Planung von Wohn- und Geschäftsgebäuden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
