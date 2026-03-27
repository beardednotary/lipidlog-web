import type { Metadata } from "next";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Cholesterol Score Calculator — LipidLog",
  description:
    "Enter your LDL, HDL, and triglycerides to get your Lipid Score in 10 seconds. See your 90-day potential and the habits that will move your numbers most.",
};

export default function CalculatorPage() {
  return (
    <>
      <Calculator />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Cholesterol Score Calculator",
            url: "https://lipidlog.com/tools/cholesterol-calculator",
            description:
              "Enter your LDL, HDL, and triglycerides to get your Lipid Score in 10 seconds. See your 90-day potential and the habits that will move your numbers most.",
            applicationCategory: "HealthApplication",
            operatingSystem: "Web",
            publisher: {
              "@type": "Organization",
              name: "LipidLog",
              url: "https://lipidlog.com",
            },
          }),
        }}
      />
    </>
  );
}
