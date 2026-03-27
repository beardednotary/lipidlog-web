import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/icon.png", apple: "/icon.png" },
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
    images: [{ url: "https://lipidlog.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LipidLog — Improve your cholesterol before your next blood test",
    description:
      "Track your cholesterol score and improve your labs before your next test.",
    images: ["https://lipidlog.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-text-primary font-sans">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DY775BRCXV"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','G-DY775BRCXV');
        `}</Script>
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "LipidLog",
            url: "https://lipidlog.com",
            description:
              "LipidLog helps you track your cholesterol score, identify what's driving your numbers, and improve your labs before your next test.",
          }),
        }}
      />
    </html>
  );
}
