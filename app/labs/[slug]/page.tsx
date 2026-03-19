import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

// ── Data ──────────────────────────────────────────────────────────────────────

type LabType = "ldl" | "triglycerides" | "hdl";

type LabData = {
  type: LabType;
  value: number;
  label: string;
};

function parseSlug(slug: string): LabData | null {
  // Supports: ldl-160, triglycerides-250, hdl-38
  const match = slug.match(/^(ldl|triglycerides|hdl)-(\d+)$/);
  if (!match) return null;
  const type = match[1] as LabType;
  const value = parseInt(match[2]);
  if (isNaN(value)) return null;
  const labels: Record<LabType, string> = { ldl: "LDL", triglycerides: "Triglycerides", hdl: "HDL" };
  return { type, value, label: labels[type] };
}

function getRiskLevel(type: LabType, value: number): { level: string; color: string; description: string } {
  if (type === "ldl") {
    if (value < 100) return { level: "Optimal", color: "text-brand-green", description: "This is the ideal range. Keep doing what you're doing." };
    if (value < 130) return { level: "Near Optimal", color: "text-brand-green", description: "Close to ideal. Minor lifestyle improvements can get you there." };
    if (value < 160) return { level: "Borderline High", color: "text-brand-amber", description: "Worth monitoring. Diet and activity changes can make a real difference." };
    if (value < 190) return { level: "High", color: "text-brand-amber", description: "Your doctor will likely recommend lifestyle changes, and may discuss medication." };
    return { level: "Very High", color: "text-brand-red", description: "This level warrants a conversation with your doctor about next steps." };
  }
  if (type === "triglycerides") {
    if (value < 150) return { level: "Normal", color: "text-brand-green", description: "Within a healthy range." };
    if (value < 200) return { level: "Borderline High", color: "text-brand-amber", description: "Reducing sugar and refined carbs can bring this down meaningfully." };
    if (value < 500) return { level: "High", color: "text-brand-amber", description: "Diet changes — especially reducing sugar and alcohol — have the biggest impact here." };
    return { level: "Very High", color: "text-brand-red", description: "Speak with your doctor. This level increases cardiovascular risk." };
  }
  if (type === "hdl") {
    if (value >= 60) return { level: "Optimal", color: "text-brand-green", description: "High HDL is protective. This is a good number." };
    if (value >= 40) return { level: "Acceptable", color: "text-brand-amber", description: "In the normal range, but higher is better. Exercise is the most effective way to raise HDL." };
    return { level: "Low", color: "text-brand-red", description: "Low HDL is a risk factor. Regular aerobic exercise is the most effective way to raise it." };
  }
  return { level: "Unknown", color: "text-text-secondary", description: "" };
}

type ImprovementTip = { habit: string; impact: string };

function getImprovementTips(type: LabType): ImprovementTip[] {
  if (type === "ldl") return [
    { habit: "Increase soluble fiber (oats, beans, vegetables)", impact: "Can reduce LDL by 5–10 points" },
    { habit: "Replace saturated fat with unsaturated fat", impact: "One of the strongest dietary levers" },
    { habit: "Regular aerobic exercise (30 min most days)", impact: "Modest LDL reduction, stronger HDL benefit" },
    { habit: "Lose 5–10% of body weight if overweight", impact: "Can reduce LDL by 10–20 points" },
    { habit: "Reduce processed and packaged foods", impact: "Eliminates hidden saturated and trans fats" },
  ];
  if (type === "triglycerides") return [
    { habit: "Cut sugar and refined carbohydrates", impact: "Biggest single lever for triglycerides" },
    { habit: "Reduce or eliminate alcohol", impact: "Even moderate intake raises triglycerides significantly" },
    { habit: "Increase omega-3 intake (fatty fish, flaxseed)", impact: "Can reduce triglycerides by 15–30%" },
    { habit: "Regular aerobic exercise", impact: "Consistent cardio is highly effective" },
    { habit: "Lose weight if overweight", impact: "Strong correlation between weight loss and triglyceride reduction" },
  ];
  if (type === "hdl") return [
    { habit: "Regular aerobic exercise (most important)", impact: "Most effective non-medication HDL booster" },
    { habit: "Quit smoking if applicable", impact: "Smoking directly lowers HDL" },
    { habit: "Lose weight if overweight", impact: "Weight loss raises HDL in most people" },
    { habit: "Eat healthy fats (olive oil, avocado, nuts)", impact: "Modest HDL improvement" },
    { habit: "Moderate alcohol (or none)", impact: "Very light intake may raise HDL slightly, but risks outweigh benefit" },
  ];
  return [];
}

function getTimeline(type: LabType): { period: string; change: string }[] {
  if (type === "ldl") return [
    { period: "2–4 weeks", change: "Initial response to diet changes" },
    { period: "6–8 weeks", change: "Meaningful reduction from consistent diet + exercise" },
    { period: "12 weeks", change: "Full effect of lifestyle changes visible in labs" },
    { period: "With medication", change: "30–60+ point reduction within 4–6 weeks" },
  ];
  if (type === "triglycerides") return [
    { period: "1–2 weeks", change: "Rapid improvement after cutting sugar/alcohol" },
    { period: "4–6 weeks", change: "Significant reduction with sustained diet changes" },
    { period: "12 weeks", change: "Full benefit of lifestyle changes" },
    { period: "With medication (fibrates)", change: "40–50% reduction possible" },
  ];
  if (type === "hdl") return [
    { period: "4–8 weeks", change: "Early response to consistent exercise" },
    { period: "3–6 months", change: "Meaningful increase with sustained aerobic exercise" },
    { period: "Note", change: "HDL responds more slowly than LDL or triglycerides" },
  ];
  return [];
}

function getLDLRangeTable() {
  return [
    { range: "Under 100", label: "Optimal" },
    { range: "100–129", label: "Near optimal" },
    { range: "130–159", label: "Borderline high" },
    { range: "160–189", label: "High" },
    { range: "190+", label: "Very high" },
  ];
}

function getTrigRangeTable() {
  return [
    { range: "Under 150", label: "Normal" },
    { range: "150–199", label: "Borderline high" },
    { range: "200–499", label: "High" },
    { range: "500+", label: "Very high" },
  ];
}

function getHDLRangeTable() {
  return [
    { range: "60+", label: "Optimal (protective)" },
    { range: "40–59", label: "Acceptable" },
    { range: "Under 40", label: "Low (risk factor)" },
  ];
}

// ── Meta ──────────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = parseSlug(slug);
  if (!data) return { title: "Lab Results — LipidLog" };
  return {
    title: `${data.label} ${data.value}: What It Means and How to Improve It — LipidLog`,
    description: `${data.label} of ${data.value} — understand your risk level, how much it can improve in 90 days, and the habits that move the needle most.`,
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function LabPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = parseSlug(slug);
  if (!data) return notFound();

  const risk = getRiskLevel(data.type, data.value);
  const tips = getImprovementTips(data.type);
  const timeline = getTimeline(data.type);

  const rangeTable =
    data.type === "ldl"
      ? getLDLRangeTable()
      : data.type === "triglycerides"
      ? getTrigRangeTable()
      : getHDLRangeTable();

  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      <article className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-text-tertiary mb-2">
            Understanding your labs
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 leading-tight">
            {data.label} {data.value}: What It Means and How to Improve It
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            If your {data.label} came back at {data.value}, you're probably wondering how serious it is — and what you can realistically do about it.
          </p>
        </div>

        {/* Risk badge */}
        <div className="bg-brand-gray rounded-2xl p-6 mb-10 border border-gray-100">
          <p className="text-sm text-text-tertiary mb-1">Your {data.label} level</p>
          <p className={`text-2xl font-bold mb-1 ${risk.color}`}>{risk.level}</p>
          <p className="text-text-secondary leading-relaxed">{risk.description}</p>
        </div>

        {/* Range table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-4">How {data.label} Levels Are Categorized</h2>
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-gray border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary">{data.label} (mg/dL)</th>
                  <th className="text-left px-4 py-3 font-semibold text-text-secondary">Category</th>
                </tr>
              </thead>
              <tbody>
                {rangeTable.map((row, i) => (
                  <tr
                    key={row.range}
                    className={`border-b border-gray-100 last:border-0 ${
                      isInRange(data.value, row.range) ? "bg-blue-50 font-semibold" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-text-primary">{row.range}</td>
                    <td className="px-4 py-3 text-text-secondary">{row.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-tertiary mt-2">Your value ({data.value}) is highlighted above.</p>
        </section>

        {/* How much can it improve */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-4">How Much Can It Improve — and How Fast?</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Most meaningful changes to {data.label} happen over a 6–12 week window — which is why tracking your habits consistently matters more than any single day.
          </p>
          <div className="space-y-3">
            {timeline.map((t) => (
              <div key={t.period} className="flex gap-4 items-start">
                <span className="text-xs font-semibold text-brand-blue bg-blue-50 rounded-lg px-2 py-1 whitespace-nowrap mt-0.5 min-w-[100px] text-center">
                  {t.period}
                </span>
                <span className="text-text-secondary text-sm leading-relaxed pt-1">{t.change}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What moves the needle */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-4">What Actually Moves {data.label}</h2>
          <p className="text-text-secondary leading-relaxed mb-5">
            Not everything has equal impact. Here are the habits with the strongest evidence for improving {data.label}:
          </p>
          <div className="space-y-3">
            {tips.map((tip) => (
              <div key={tip.habit} className="bg-brand-gray rounded-xl p-4 border border-gray-100">
                <p className="font-medium text-text-primary text-sm mb-1">{tip.habit}</p>
                <p className="text-xs text-text-tertiary">{tip.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The hard part */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-4">The Part Nobody Talks About</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Most people don't fail because they don't know what to do. They fail because they can't tell if anything is working.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            You won't see {data.label} change day to day — so without a way to track consistency, it's easy to lose momentum before your next lab test.
          </p>
          <p className="text-text-secondary leading-relaxed">
            That's the gap LipidLog was built to fill.
          </p>
        </section>

        {/* CTA */}
        <div className="rounded-2xl bg-blue-50 border border-blue-100 p-8 text-center">
          <h3 className="text-xl font-bold text-text-primary mb-3">Track Your Progress Between Lab Tests</h3>
          <p className="text-text-secondary leading-relaxed mb-6">
            LipidLog helps you log the habits that affect your labs, see your cholesterol score, and stay consistent between now and your next test.
          </p>
          <Link
            href="/#beta"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold text-base hover:bg-blue-600 active:scale-[0.99] transition"
          >
            Join the TestFlight Beta
          </Link>
        </div>

        {/* Related pages */}
        <section className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wide mb-4">Related</h3>
          <div className="flex flex-wrap gap-2">
            {getRelatedSlugs(data).map((s) => (
              <Link
                key={s.slug}
                href={`/labs/${s.slug}`}
                className="px-3 py-1.5 rounded-lg bg-brand-gray text-sm text-text-secondary hover:text-brand-blue hover:bg-blue-50 transition border border-gray-200"
              >
                {s.label}
              </Link>
            ))}
            <Link
              href="/tools/cholesterol-calculator"
              className="px-3 py-1.5 rounded-lg bg-brand-gray text-sm text-text-secondary hover:text-brand-blue hover:bg-blue-50 transition border border-gray-200"
            >
              Cholesterol Calculator
            </Link>
          </div>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function isInRange(value: number, range: string): boolean {
  if (range.startsWith("Under ")) return value < parseInt(range.replace("Under ", ""));
  if (range.endsWith("+")) return value >= parseInt(range.replace("+", ""));
  const parts = range.split("–");
  if (parts.length === 2) return value >= parseInt(parts[0]) && value <= parseInt(parts[1]);
  return false;
}

function getRelatedSlugs(data: LabData): { slug: string; label: string }[] {
  if (data.type === "ldl") {
    return [160, 170, 180, 190]
      .filter((v) => v !== data.value)
      .slice(0, 3)
      .map((v) => ({ slug: `ldl-${v}`, label: `LDL ${v}` }))
      .concat([{ slug: "triglycerides-200", label: "Triglycerides 200" }]);
  }
  if (data.type === "triglycerides") {
    return [200, 250, 300]
      .filter((v) => v !== data.value)
      .slice(0, 3)
      .map((v) => ({ slug: `triglycerides-${v}`, label: `Triglycerides ${v}` }))
      .concat([{ slug: "ldl-160", label: "LDL 160" }]);
  }
  return [
    { slug: "ldl-160", label: "LDL 160" },
    { slug: "triglycerides-200", label: "Triglycerides 200" },
  ];
}
