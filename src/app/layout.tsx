import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Read Consulting — Public Holiday Normal Working Day Calculator (NZ)",
  description: "Upload timecards, pick a public holiday, and calculate normal working day eligibility using configurable benchmarks.",
  keywords: ["New Zealand", "public holiday", "normal working day", "day in lieu", "employment law", "payroll", "Read Consulting"],
  authors: [{ name: "Read Consulting" }],
  openGraph: {
    title: "Read Consulting — Public Holiday Normal Working Day Calculator (NZ)",
    description: "Upload timecards, pick a public holiday, and calculate normal working day eligibility using configurable benchmarks.",
    type: "website",
    locale: "en_NZ",
    siteName: "Read Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Read Consulting — Public Holiday Normal Working Day Calculator (NZ)",
    description: "Upload timecards, pick a public holiday, and calculate normal working day eligibility using configurable benchmarks.",
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
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
