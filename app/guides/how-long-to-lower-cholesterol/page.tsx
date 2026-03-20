import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/app/components/GuideLayout";
import LipidScoreCalculator from "@/app/components/LipidScoreCalculator";

const prose =
  "prose prose-gray max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline prose-blockquote:border-brand-blue prose-blockquote:text-text-secondary prose-table:text-sm";

export const metadata: Metadata = {
  title: "How Long Does It Take to Lower Cholesterol? | LipidLog",
  description:
    "Most people expect quick results. Here's what the evidence actually shows — and what you can realistically expect from diet, exercise, and medication.",
  openGraph: {
    title: "How Long Does It Take to Lower Cholesterol?",
    description:
      "Most people expect quick results. Here's what the evidence actually shows — and what you can realistically expect from diet, exercise, and medication.",
  },
};

export default function Guide() {
  return (
    <GuideLayout
      title="How Long Does It Take to Lower Cholesterol?"
      description="Most people expect quick results. Here's what the evidence actually shows — and what you can realistically expect from diet, exercise, and medication."
      publishedAt="2026-03-19"
      readingTime={7}
    >
      <div className={prose}>

        <p>
          If you just got your labs back and your LDL or triglycerides are high, the first question
          most people ask is: <em>how long until I see this improve?</em>
        </p>
        <p>
          The answer matters — because if you expect results in two weeks and nothing has changed,
          you stop. Most people quit not because the approach is wrong, but because the timeline is wrong.
        </p>
        <p>Here&apos;s what the evidence actually shows.</p>

        <hr />

        <h2>The Short Answer</h2>
        <p>For most people making lifestyle changes:</p>
        <ul>
          <li><strong>Triglycerides</strong> respond fastest — meaningful drops in <strong>2–4 weeks</strong></li>
          <li><strong>LDL</strong> takes longer — expect <strong>6–12 weeks</strong> for noticeable change</li>
          <li><strong>HDL</strong> is the slowest — can take <strong>3–6 months</strong> of consistent aerobic exercise</li>
        </ul>
        <p>
          If you start medication (statins), LDL typically drops within <strong>4–6 weeks</strong> and
          stabilizes around <strong>8 weeks</strong>.
        </p>

        <h2>Why Cholesterol Doesn&apos;t Change Overnight</h2>
        <p>
          Cholesterol isn&apos;t like blood sugar, which fluctuates hour to hour. LDL reflects how your
          liver is producing and clearing cholesterol over time — it&apos;s a slow process that responds to
          sustained changes, not single good days.
        </p>
        <p>
          This is why one healthy week looks identical to one bad week on a lab test.
        </p>
        <p>
          What moves the needle is <strong>consistency over weeks</strong>, not intensity over days.
        </p>

        <h2>Timeline by Intervention</h2>

        <h3>Diet changes</h3>
        <table>
          <thead>
            <tr>
              <th>What you change</th>
              <th>Expected LDL impact</th>
              <th>Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Reduce saturated fat</td><td>−8 to −15 mg/dL</td><td>6–8 weeks</td></tr>
            <tr><td>Add soluble fiber (oats, beans)</td><td>−5 to −10 mg/dL</td><td>4–8 weeks</td></tr>
            <tr><td>Cut dietary cholesterol</td><td>−3 to −8 mg/dL</td><td>4–6 weeks</td></tr>
            <tr><td>Adopt Mediterranean-style diet</td><td>−10 to −20 mg/dL</td><td>8–12 weeks</td></tr>
          </tbody>
        </table>
        <p>
          Diet changes tend to plateau around 10–15% reduction from baseline. That&apos;s meaningful —
          but it requires the changes to stick.
        </p>

        <h3>Exercise</h3>
        <p>
          Regular aerobic exercise has a modest effect on LDL (typically −3 to −6 mg/dL), but its
          strongest impact is on <strong>triglycerides</strong> and <strong>HDL</strong>.
        </p>
        <ul>
          <li>Triglycerides: can drop <strong>10–30%</strong> within <strong>2–4 weeks</strong> of consistent activity</li>
          <li>HDL: increases gradually over <strong>3–6 months</strong> of sustained cardio</li>
        </ul>
        <p>
          &ldquo;Consistent&rdquo; here means 150+ minutes per week of moderate activity. Walking counts.
        </p>

        <h3>Weight loss</h3>
        <p>
          If you&apos;re carrying extra weight, losing even 5–10% of body weight can lower LDL by{" "}
          <strong>5–20 mg/dL</strong> and triglycerides significantly more. The timeline tracks with
          the weight loss itself — usually 2–4 months to see meaningful lab improvement.
        </p>

        <h3>Statins and medication</h3>
        <p>Statins are the most predictable intervention:</p>
        <table>
          <thead>
            <tr>
              <th>Medication</th>
              <th>LDL reduction</th>
              <th>Time to effect</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Low-intensity statin</td><td>−20 to −30%</td><td>4–6 weeks</td></tr>
            <tr><td>Moderate-intensity statin</td><td>−30 to −50%</td><td>4–8 weeks</td></tr>
            <tr><td>High-intensity statin</td><td>−50%+</td><td>6–8 weeks</td></tr>
          </tbody>
        </table>
        <p>
          Your doctor will typically recheck labs at <strong>6–12 weeks</strong> after starting a
          statin to confirm response.
        </p>

        <h2>The 90-Day Window</h2>
        <p>
          Most physicians use a <strong>90-day cycle</strong> between lifestyle interventions and
          follow-up labs. This isn&apos;t arbitrary — it&apos;s roughly how long it takes for sustained changes
          to show up clearly in bloodwork.
        </p>
        <p>
          This is also why habit consistency between tests matters so much. If you&apos;re good for 2
          weeks, slide for 4, then tighten up before your appointment — your labs will reflect the
          average, not your best days.
        </p>
        <blockquote>
          The goal isn&apos;t to perform well for a test. It&apos;s to build the consistency that moves your baseline.
        </blockquote>

        <h2>What to Expect in Each Phase</h2>

        <p>
          <strong>Weeks 1–2.</strong> You won&apos;t see any change in your labs, but your triglycerides may
          already be starting to respond if you&apos;ve cut sugar and refined carbs. This is the phase where
          most people give up — don&apos;t.
        </p>
        <p>
          <strong>Weeks 3–6.</strong> If your changes are consistent, LDL is beginning to respond. You still
          won&apos;t feel different. This is the hardest stretch because you&apos;re working but the feedback loop
          is silent.
        </p>
        <p>
          <strong>Weeks 6–12.</strong> This is where labs start to reflect your effort. If you retest around
          week 8–12, you should see movement — not always dramatic, but measurable. Many people see their
          first meaningful drop here.
        </p>
        <p>
          <strong>3–6 months.</strong> Compounding effects. HDL is rising from exercise. LDL has continued
          responding to diet. Weight loss (if applicable) is now contributing. This is where the full
          picture emerges.
        </p>

        <h2>The Part Nobody Talks About</h2>
        <p>
          The most common reason people don&apos;t see results isn&apos;t the wrong diet or wrong exercise.
        </p>
        <p>It&apos;s <strong>inconsistency that&apos;s invisible to them</strong>.</p>
        <p>
          They think they&apos;ve been consistent because they remember the good days. But a few
          high-saturated-fat meals per week, skipped walks, or a stressful week of poor eating —
          those average into your labs too.
        </p>
        <p>
          This is why tracking matters between tests. Not obsessively — but enough to see your actual
          pattern rather than your remembered one.
        </p>

        <h2>Check Your Starting Point</h2>
        <p>
          Before you can gauge progress, it helps to understand where you stand now.
        </p>
      </div>

      <LipidScoreCalculator />

      <div className="prose prose-gray max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline prose-table:text-sm">
        <p>
          Your score gives you a baseline — and a projected potential if you improve 2–3 key habits
          over the next 90 days.
        </p>

        <h2>How to Use the 90-Day Window</h2>
        <ol>
          <li><strong>Start from a clear baseline.</strong> Get labs done, note your numbers.</li>
          <li><strong>Pick 1–2 habit changes</strong>, not 10. Consistency beats complexity.</li>
          <li><strong>Track daily</strong> — not your cholesterol (you can&apos;t), but the habits that move it.</li>
          <li><strong>Retest at 8–12 weeks.</strong> That&apos;s enough time for real signal.</li>
          <li><strong>Adjust based on results</strong>, not assumptions.</li>
        </ol>
        <p>
          The cycle repeats. Each 90-day window is a chance to test one or two variables and see
          what your body responds to.
        </p>

        <h2>Bottom Line</h2>
        <table>
          <thead>
            <tr>
              <th>Intervention</th>
              <th>LDL impact</th>
              <th>Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Dietary fat reduction</td><td>−5 to −15%</td><td>6–8 weeks</td></tr>
            <tr><td>Adding fiber</td><td>−5 to −10%</td><td>4–8 weeks</td></tr>
            <tr><td>Regular aerobic exercise</td><td>−3 to −6%</td><td>8–12 weeks</td></tr>
            <tr><td>Weight loss (5–10% body weight)</td><td>−5 to −20%</td><td>8–16 weeks</td></tr>
            <tr><td>Statins</td><td>−20 to −50%+</td><td>4–8 weeks</td></tr>
          </tbody>
        </table>
        <p>
          Realistic expectations make it easier to stay consistent. Most people who stick with
          lifestyle changes for 3 months see meaningful improvement — not dramatic, but enough to matter.
        </p>
      </div>

      {/* Related links */}
      <div className="mt-12 pt-8 border-t border-gray-100">
        <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wide mb-4">Related</p>
        <ul className="space-y-2">
          {[
            { href: "/guides/how-much-can-cholesterol-drop-in-90-days", label: "How Much Can Cholesterol Drop in 90 Days?" },
            { href: "/guides/can-you-lower-cholesterol-without-medication", label: "Can You Lower Cholesterol Without Medication?" },
            { href: "/labs/ldl-160", label: "LDL 160: What It Means and How to Lower It" },
            { href: "/tools/cholesterol-calculator", label: "Cholesterol Score Calculator" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-brand-blue hover:underline text-sm font-medium"
              >
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </GuideLayout>
  );
}
