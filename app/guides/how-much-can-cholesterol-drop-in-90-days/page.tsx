import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/app/components/GuideLayout";
import LipidScoreCalculator from "@/app/components/LipidScoreCalculator";

export const metadata: Metadata = {
  title: "How Much Can Cholesterol Drop in 90 Days? | LipidLog",
  description:
    "90 days is the standard window between lifestyle changes and follow-up labs. Here's what's realistic — and what actually drives the biggest improvements.",
  openGraph: {
    title: "How Much Can Cholesterol Drop in 90 Days?",
    description:
      "90 days is the standard window between lifestyle changes and follow-up labs. Here's what's realistic — and what actually drives the biggest improvements.",
  },
};

const prose =
  "prose prose-gray max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline prose-blockquote:border-brand-blue prose-blockquote:text-text-secondary prose-table:text-sm";

export default function Guide() {
  return (
    <GuideLayout
      title="How Much Can Cholesterol Drop in 90 Days?"
      description="90 days is the standard window between lifestyle changes and follow-up labs. Here's what's realistic — and what actually drives the biggest improvements."
      publishedAt="2026-03-19"
      readingTime={6}
    >
      <div className={prose}>
        <p>
          When a doctor tells you to &ldquo;make some lifestyle changes and come back in three months,&rdquo;
          they&apos;re working from a well-established principle: 90 days is long enough for sustained
          habits to show up clearly in bloodwork.
        </p>
        <p>
          But most people walk out of that appointment without a concrete sense of what&apos;s actually
          achievable. Is 10 points realistic? 30 points? Does it depend on where you&apos;re starting?
        </p>
        <p>Here&apos;s what the evidence shows.</p>

        <hr />

        <h2>What&apos;s Realistic for LDL</h2>
        <p>
          LDL is the number most doctors focus on, and it responds more slowly than people expect.
        </p>
        <p>With <strong>diet changes alone</strong>, most people can realistically lower LDL by:</p>
        <table>
          <thead>
            <tr>
              <th>Approach</th>
              <th>LDL reduction in 90 days</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Reducing saturated fat</td><td>8–15 mg/dL</td></tr>
            <tr><td>Adding soluble fiber daily</td><td>5–10 mg/dL</td></tr>
            <tr><td>Both combined</td><td>15–25 mg/dL</td></tr>
            <tr><td>Mediterranean-style diet, consistent</td><td>15–30 mg/dL</td></tr>
          </tbody>
        </table>
        <p>
          These aren&apos;t best-case numbers — they&apos;re what studies show in people who actually stick to
          the changes. The ceiling for lifestyle-only LDL reduction is roughly <strong>20–30%</strong> from
          baseline for most people.
        </p>
        <p>
          If your LDL is 170 and you make consistent dietary changes, landing at 140–150 in 90 days
          is a reasonable target. Getting to 100 through diet alone in that timeframe is not.
        </p>

        <h2>What&apos;s Realistic for Triglycerides</h2>
        <p>
          Triglycerides are more volatile than LDL — they respond faster and more dramatically to
          specific changes.
        </p>
        <table>
          <thead>
            <tr>
              <th>Approach</th>
              <th>Triglyceride reduction in 90 days</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Cutting sugar and refined carbs</td><td>20–50 mg/dL</td></tr>
            <tr><td>Reducing alcohol</td><td>20–50 mg/dL</td></tr>
            <tr><td>Adding regular cardio</td><td>15–30 mg/dL</td></tr>
            <tr><td>All three combined</td><td>50–100+ mg/dL</td></tr>
          </tbody>
        </table>
        <p>
          If your triglycerides are elevated, this is often where you&apos;ll see the most dramatic
          movement in 90 days — sometimes cutting them nearly in half with consistent changes to
          sugar intake and activity.
        </p>

        <h2>What&apos;s Realistic for HDL</h2>
        <p>
          HDL is the slowest to move. It responds primarily to aerobic exercise and, to a lesser
          extent, weight loss and reducing refined carbs.
        </p>
        <p>In 90 days of consistent cardio (150+ minutes per week):</p>
        <ul>
          <li>HDL typically rises <strong>3–6 mg/dL</strong></li>
          <li>Some people see up to <strong>10 mg/dL</strong> with sustained high-intensity exercise</li>
        </ul>
        <p>
          That may not sound like much, but HDL improvements compound over time and meaningfully
          affect your overall cardiovascular risk profile.
        </p>

        <h2>With Medication</h2>
        <p>If your doctor starts you on a statin, the numbers are more predictable:</p>
        <table>
          <thead>
            <tr>
              <th>Statin intensity</th>
              <th>LDL reduction</th>
              <th>Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Low-intensity</td><td>20–30%</td><td>6–8 weeks</td></tr>
            <tr><td>Moderate-intensity</td><td>30–50%</td><td>6–8 weeks</td></tr>
            <tr><td>High-intensity</td><td>50%+</td><td>6–8 weeks</td></tr>
          </tbody>
        </table>
        <p>
          A 90-day recheck after starting a statin will almost always show significant LDL improvement.
          The question then becomes whether you can also move HDL and triglycerides through lifestyle
          — statins have less impact on those.
        </p>

        <h2>The Compounding Effect</h2>
        <p>
          Here&apos;s what most people miss: lifestyle changes don&apos;t just add up — they interact.
        </p>
        <p>
          Losing weight lowers LDL <em>and</em> triglycerides <em>and</em> raises HDL. Cutting sugar
          dramatically drops triglycerides, which also improves your overall cholesterol ratio. Adding
          fiber lowers LDL while also supporting weight management.
        </p>
        <p>
          A 90-day period where you consistently do 2–3 things well often produces better results than
          the sum of each change in isolation.
        </p>

        <h2>Why Your Starting Point Matters</h2>
        <p>
          The higher your numbers, the more room for improvement — but also the less likely lifestyle
          changes alone will get you to optimal.
        </p>
        <table>
          <thead>
            <tr>
              <th>Starting LDL</th>
              <th>Realistic 90-day range (lifestyle only)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>130–150</td><td>Down to 110–130</td></tr>
            <tr><td>150–170</td><td>Down to 125–145</td></tr>
            <tr><td>170–190</td><td>Down to 140–160</td></tr>
            <tr><td>190+</td><td>Often needs medication to reach optimal</td></tr>
          </tbody>
        </table>
        <p>
          If you&apos;re starting above 190, lifestyle changes are still important and will lower your
          number — but most physicians will discuss medication alongside them, not instead.
        </p>

        <h2>The Consistency Problem</h2>
        <p>
          The research on cholesterol improvement almost always measures people in controlled or
          semi-controlled settings. Real-world results are typically lower — not because the
          interventions don&apos;t work, but because most people aren&apos;t fully consistent for 90 days.
        </p>
        <p>A realistic breakdown of what consistency actually looks like:</p>
        <ul>
          <li><strong>Fully consistent (80–90% of days):</strong> expect the upper end of the ranges above</li>
          <li><strong>Mostly consistent (60–70% of days):</strong> expect the middle of the ranges</li>
          <li><strong>Inconsistent (under 50%):</strong> results will be minimal and hard to interpret</li>
        </ul>
        <p>
          This is the part that&apos;s uncomfortable to say plainly: half-effort produces results that
          are easy to dismiss as &ldquo;lifestyle changes don&apos;t work,&rdquo; when the real issue is consistency,
          not the approach.
        </p>

        <h2>See Where Your Numbers Could Go</h2>
        <p>
          Enter your current labs to get your Lipid Score and a 90-day projection based on improving
          your key habits.
        </p>
      </div>

      <LipidScoreCalculator />

      <div className={prose}>
        <h2>How to Make the 90 Days Count</h2>
        <p>
          <strong>Pick one or two levers, not five.</strong> The most common mistake is trying to
          overhaul everything at once. Choose the one or two changes most likely to move your specific
          numbers — for high triglycerides, that&apos;s usually sugar and alcohol. For high LDL, it&apos;s
          saturated fat and fiber.
        </p>
        <p>
          <strong>Track the habits, not the cholesterol.</strong> You can&apos;t see your LDL day to day,
          but you can see whether you ate fiber this morning, walked today, or had a second drink.
          The habits are the leading indicator.
        </p>
        <p>
          <strong>Don&apos;t retest too early.</strong> At 4 weeks, the signal is too noisy. At 8–12 weeks,
          you&apos;ll have a real read. Retesting at 3 weeks because you&apos;re curious usually just produces
          anxiety, not insight.
        </p>
        <p>
          <strong>Account for regression.</strong> Most people do well for 3–4 weeks, slip for 1–2
          weeks, recover, and finish strong. That&apos;s normal. A bad week doesn&apos;t ruin a 90-day effort
          — chronic drift does.
        </p>

        <h2>Bottom Line</h2>
        <p>In 90 days of consistent lifestyle changes, most people can expect:</p>
        <ul>
          <li>LDL: down <strong>10–30 mg/dL</strong></li>
          <li>Triglycerides: down <strong>20–80 mg/dL</strong> (more if starting high)</li>
          <li>HDL: up <strong>3–6 mg/dL</strong></li>
        </ul>
        <p>
          With medication, LDL improvements are faster and more predictable — typically{" "}
          <strong>30–50%</strong> reduction in 6–8 weeks.
        </p>
        <p>
          The 90-day window is real, and it works — but only if your habits are consistent enough
          for long enough to show up in the numbers.
        </p>
      </div>

      {/* Related links */}
      <div className="mt-12 pt-8 border-t border-gray-100">
        <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wide mb-4">Related</p>
        <ul className="space-y-2">
          {[
            { href: "/guides/how-long-to-lower-cholesterol", label: "How Long Does It Take to Lower Cholesterol?" },
            { href: "/guides/can-you-lower-cholesterol-without-medication", label: "Can You Lower Cholesterol Without Medication?" },
            { href: "/labs/ldl-170", label: "LDL 170: What It Means and How to Lower It" },
            { href: "/labs/triglycerides-250", label: "Triglycerides 250: What It Means" },
            { href: "/tools/cholesterol-calculator", label: "Cholesterol Score Calculator" },
          ].map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-brand-blue hover:underline text-sm font-medium">
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </GuideLayout>
  );
}
