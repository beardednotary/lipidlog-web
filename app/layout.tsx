import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LipidLog — Improve your cholesterol before your next blood test",
  description:
    "LipidLog helps you track your cholesterol score, identify what's driving your numbers, and improve your labs before your next test.",
  openGraph: {
    title: "LipidLog — Improve your cholesterol before your next blood test",
    description:
      "Track your cholesterol score, log habits that affect your numbers, and improve before your next lab test.",
    url: "https://lipidlog.com",
    siteName: "LipidLog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LipidLog — Improve your cholesterol before your next blood test",
    description:
      "Track your cholesterol score and improve your labs before your next test.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-text-primary font-sans">{children}</body>
    </html>
  );
}
