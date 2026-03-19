import type { Metadata } from "next";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Cholesterol Score Calculator — LipidLog",
  description:
    "Enter your LDL, HDL, and triglycerides to get your Lipid Score in 10 seconds. See your 90-day potential and the habits that will move your numbers most.",
};

export default function CalculatorPage() {
  return <Calculator />;
}
