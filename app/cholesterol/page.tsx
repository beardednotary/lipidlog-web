import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Cholesterol: Understand Your Numbers and Improve Them | LipidLog",
  description:
    "What your LDL, HDL, and triglyceride levels mean — and how to improve them between lab tests. Guides, lab value pages, and a free score calculator.",
};

// Clinical classification labels — based on standard medical categories (ACC/AHA guidelines).
// These thresholds are intentionally separate from the scoring subscore logic in
// Calculator.tsx / ScoreService, which uses a weighted 0–10 scale per metric.
// If clinical guidelines change, update here. If scoring logic changes, update Calculator.tsx.
function ldlRisk(ldl: number) {
  if (ldl < 130) return { label: "Near optimal", color: "text-brand-green bg-green-50" };
  if (ldl < 160) return { label: "Borderline high", color: "text-brand-amber bg-amber-50" };
  if (ldl < 190) return { label: "High", color: "text-brand-red bg-red-50" };
  return { label: "Very high", color: "text-brand-red bg-red-50" };
}

function tgRisk(tg: number) {
  if (tg < 200) return { label: "Borderline high", color: "text-brand-amber bg-amber-50" };
  if (tg < 500) return { label: "High", color: "text-brand-red bg-red-50" };
  return { label: "Very high", color: "text-brand-red bg-red-50" };
}

const LDL_VALUES = [130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 200, 210, 220];
const TG_VALUES  = [150, 175, 200, 225, 250, 275, 300, 350, 400, 500];

const GUIDES = [
  {
    href: "/guides/how-long-to-lower-cholesterol",
    title: "How Long Does It Take to Lower Cholesterol?",
    description: "What the evidence shows about timelines for diet, exercise, and medication.",
  },
  {
    href: "/guides/how-much-can-cholesterol-drop-in-90-days",
    title: "How Much Can Cholesterol Drop in 90 Days?",
    description: "Realistic ranges for LDL, triglycerides, and HDL over the standard follow-up window.",
  },
  {
    href: "/guides/can-you-lower-cholesterol-without-medication",
    title: "Can You Lower Cholesterol Without Medication?",
    description: "When lifestyle changes are enough — and when medication is the right call.",
  },
];

export default function CholesterolHub() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-5">
            Cholesterol: Understand Your Numbers
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            What your LDL, HDL, and triglyceride levels mean — and what you can realistically
            do to improve them between lab tests.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 px-6 bg-brand-gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Guides</h2>
          <p className="text-text-secondary mb-8">Evidence-based answers to the questions people ask most after getting high cholesterol results.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {GUIDES.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-brand-blue/30 hover:shadow-md transition group"
              >
                <h3 className="font-bold text-text-primary mb-2 group-hover:text-brand-blue transition leading-snug">
                  {g.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{g.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LDL pages */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2">LDL Levels Explained</h2>
          <p className="text-text-secondary mb-8">
            Got a specific number back? Find out what it means and what to do next.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {LDL_VALUES.map((v) => {
              const risk = ldlRisk(v);
              return (
                <Link
                  key={v}
                  href={`/labs/ldl-${v}`}
                  className="bg-white rounded-xl border border-gray-100 p-4 hover:border-brand-blue/30 hover:shadow-sm transition group"
                >
                  <p className="text-xl font-bold text-text-primary group-hover:text-brand-blue transition">
                    LDL {v}
                  </p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1.5 inline-block ${risk.color}`}>
                    {risk.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Triglycerides pages */}
      <section className="py-16 px-6 bg-brand-gray">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Triglyceride Levels Explained</h2>
          <p className="text-text-secondary mb-8">
            Triglycerides often respond faster than LDL — find your number to understand your options.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {TG_VALUES.map((v) => {
              const risk = tgRisk(v);
              return (
                <Link
                  key={v}
                  href={`/labs/triglycerides-${v}`}
                  className="bg-white rounded-xl border border-gray-100 p-4 hover:border-brand-blue/30 hover:shadow-sm transition group"
                >
                  <p className="text-lg font-bold text-text-primary group-hover:text-brand-blue transition">
                    TG {v}
                  </p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1.5 inline-block ${risk.color}`}>
                    {risk.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-tertiary mb-3">Free tool</p>
          <h2 className="text-3xl font-bold text-text-primary mb-4">Get your Lipid Score</h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Enter your LDL, HDL, and triglycerides to see your score, your 90-day potential,
            and the habits most likely to move your numbers.
          </p>
          <Link
            href="/tools/cholesterol-calculator"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold text-base hover:bg-blue-600 active:scale-[0.99] transition"
          >
            Try the calculator
          </Link>
        </div>
      </section>

      {/* Beta CTA */}
      <section className="py-16 px-6 bg-brand-gray border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-3">Track your progress in the app</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            LipidLog lets you log daily habits, track your cholesterol score, and see real progress
            between lab tests — not just at them.
          </p>
          <Link
            href="/#beta"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold text-base hover:bg-blue-600 active:scale-[0.99] transition"
          >
            Join the Beta
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
