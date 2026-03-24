import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/app/components/GuideLayout";
import LipidScoreCalculator from "@/app/components/LipidScoreCalculator";

export const metadata: Metadata = {
  title: "What Cholesterol Level Requires Medication? | LipidLog",
  description:
    "There's no single cholesterol number that automatically triggers a prescription. Here's how doctors actually make that decision — and what the evidence says about when medication is and isn't necessary.",
  openGraph: {
    title: "What Cholesterol Level Requires Medication?",
    description:
      "There's no single cholesterol number that automatically triggers a prescription. Here's how doctors actually make that decision — and what the evidence says about when medication is and isn't necessary.",
  },
};

const prose =
  "prose prose-gray max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline prose-blockquote:border-brand-blue prose-blockquote:text-text-secondary prose-table:text-sm prose-li:text-text-secondary";

export default function Guide() {
  return (
    <GuideLayout
      title="What Cholesterol Level Requires Medication?"
      description="There's no single cholesterol number that automatically triggers a prescription. Here's how doctors actually make that decision — and what the evidence says about when medication is and isn't necessary."
      publishedAt="2026-03-23"
      readingTime={8}
    >
      <div className={prose}>
        <p>
          There is no universal cholesterol number at which medication automatically becomes
          necessary. The decision is more nuanced than that — and understanding how it actually
          gets made can help you have a more informed conversation with your doctor.
        </p>

        <hr />

        <h2>Why There&apos;s No Single Threshold</h2>
        <p>
          Cholesterol medication — most often a statin — is prescribed based on{" "}
          <strong>cardiovascular risk</strong>, not a single lab value. Two people with identical
          LDL readings can have very different risk profiles depending on age, blood pressure, family
          history, and other factors. One may be a clear candidate for medication; the other may not be.
        </p>
        <p>
          This is why guidelines from organizations like the American College of Cardiology focus on
          risk calculators rather than fixed cutoffs.
        </p>

        <h2>The Numbers That Do Matter</h2>
        <p>That said, certain ranges reliably shift the clinical conversation toward medication.</p>
        <table>
          <thead>
            <tr><th>LDL (mg/dL)</th><th>Typical clinical posture</th></tr>
          </thead>
          <tbody>
            <tr><td>Under 100</td><td>Optimal — no intervention typically needed</td></tr>
            <tr><td>100–129</td><td>Near optimal — monitoring, possible lifestyle guidance</td></tr>
            <tr><td>130–159</td><td>Borderline high — lifestyle changes usually recommended first</td></tr>
            <tr><td>160–189</td><td>High — lifestyle trial common; medication discussed depending on risk</td></tr>
            <tr><td>190 and above</td><td>Very high — medication often recommended regardless of other factors</td></tr>
          </tbody>
        </table>
        <p>
          At LDL 190 or above, most guidelines recommend medication as part of the treatment plan,
          independent of other risk factors. Below that threshold, the decision depends heavily on
          the broader picture.
        </p>

        <h2>The 10-Year Risk Calculation</h2>
        <p>
          The tool most commonly used in the US is the{" "}
          <strong>Pooled Cohort Equations (PCE)</strong> — a calculator that estimates your 10-year
          risk of a cardiovascular event (heart attack or stroke) using:
        </p>
        <ul>
          <li>Age and sex</li>
          <li>Total cholesterol and HDL</li>
          <li>Systolic blood pressure and whether it&apos;s treated</li>
          <li>Diabetes status</li>
          <li>Smoking status</li>
        </ul>
        <p>
          The output is a percentage. Current ACC/AHA guidelines generally recommend statin therapy when:
        </p>
        <ul>
          <li>10-year risk is <strong>7.5% or higher</strong>, and LDL is 70 mg/dL or above</li>
          <li>10-year risk is <strong>10% or higher</strong>, statin therapy is typically recommended outright</li>
        </ul>
        <p>
          For people in the 5–7.5% intermediate range, the conversation involves more factors —
          including patient preference.
        </p>

        <h2>When Medication Is Recommended Regardless of LDL</h2>
        <p>
          Some conditions put medication on the table independent of where your numbers land:
        </p>
        <p>
          <strong>Established cardiovascular disease</strong> — if you&apos;ve had a heart attack,
          stroke, or coronary artery disease diagnosis, statin therapy is standard of care at almost
          any LDL level.
        </p>
        <p>
          <strong>Familial hypercholesterolemia (FH)</strong> — a genetic condition causing LDL of
          190 or above from birth. Medication is typically recommended early and aggressively.
        </p>
        <p>
          <strong>Diabetes with other risk factors</strong> — adults aged 40–75 with diabetes and
          LDL between 70–189 are often recommended statins even without a calculated high risk score.
        </p>

        <h2>The Lifestyle-First Window</h2>
        <p>
          For most people with LDL in the 160–189 range and no other major risk factors, guidelines
          support a <strong>3–6 month lifestyle intervention</strong> before medication is introduced.
          This isn&apos;t a delay tactic — it&apos;s a legitimate clinical pathway with meaningful evidence
          behind it.
        </p>
        <p>
          What can lifestyle change realistically accomplish in that window? Combined dietary
          improvements, increased soluble fiber, weight loss, and regular exercise can reduce LDL
          by 15–30 mg/dL in many people. For someone starting at 165, that&apos;s potentially enough to
          move out of the high range entirely.
        </p>
        <p>
          If you&apos;re in this situation,{" "}
          <Link href="/guides/ldl-160-what-it-means-and-how-to-lower-it">
            understanding exactly what&apos;s driving your LDL
          </Link>{" "}
          is the most useful first step — the levers are specific and the evidence is reasonably clear.
        </p>

        <h2>What Statins Actually Do</h2>
        <p>
          Statins work by inhibiting an enzyme (HMG-CoA reductase) the liver uses to produce
          cholesterol. This both reduces cholesterol production and increases the liver&apos;s uptake of
          LDL from the bloodstream.
        </p>
        <p>The LDL reductions are substantial:</p>
        <table>
          <thead>
            <tr><th>Statin intensity</th><th>Expected LDL reduction</th><th>Common examples</th></tr>
          </thead>
          <tbody>
            <tr><td>Low intensity</td><td>~20–30%</td><td>Lovastatin 20mg, Pravastatin 10–20mg</td></tr>
            <tr><td>Moderate intensity</td><td>~30–50%</td><td>Atorvastatin 10–20mg, Rosuvastatin 5–10mg</td></tr>
            <tr><td>High intensity</td><td>~50% or more</td><td>Atorvastatin 40–80mg, Rosuvastatin 20–40mg</td></tr>
          </tbody>
        </table>
        <p>
          For someone with LDL 170, a moderate-intensity statin could bring that to 85–120 mg/dL —
          well into the optimal or near-optimal range.
        </p>

        <h2>What Statins Don&apos;t Do</h2>
        <p>A few things worth understanding clearly:</p>
        <p>
          <strong>They don&apos;t address all cardiovascular risk.</strong> Statins reduce LDL
          effectively, but elevated triglycerides, low HDL, blood pressure, and lifestyle factors
          still matter. LDL is one variable in a larger equation.
        </p>
        <p>
          <strong>They don&apos;t eliminate the value of lifestyle changes.</strong> Diet, exercise, and
          weight management improve cardiovascular health through mechanisms beyond LDL — including
          inflammation, blood pressure, and insulin sensitivity. Statins and lifestyle aren&apos;t either/or.
        </p>
        <p>
          <strong>Side effects exist but are often overstated.</strong> Muscle aches are the most
          commonly reported side effect, occurring in roughly 5–10% of patients. Serious muscle
          damage (rhabdomyolysis) is rare. Liver toxicity, frequently cited in patient concerns, is
          uncommon with modern statins at standard doses.
        </p>

        <h2>Questions Worth Asking Your Doctor</h2>
        <p>
          If your cholesterol levels are in a range where medication is being discussed, these are
          reasonable questions to raise:
        </p>
        <ul>
          <li>What is my calculated 10-year cardiovascular risk?</li>
          <li>What LDL target are we aiming for, and why?</li>
          <li>Is a 3–6 month lifestyle trial appropriate given my current risk profile?</li>
          <li>If we start medication, what would success look like at my next lab draw?</li>
          <li>Are there non-statin options worth considering?</li>
        </ul>
        <p>
          The goal isn&apos;t to avoid medication if it&apos;s warranted — it&apos;s to make an informed decision
          based on your actual risk picture, not just a single number.
        </p>
      </div>

      <LipidScoreCalculator />

      <div className={prose}>
        <h2>Tracking the Variables That Affect the Decision</h2>
        <p>
          The factors that push someone toward or away from medication — LDL trend, weight,
          consistency of habits — change over time. The 3–6 month lifestyle window your doctor may
          offer you is also a window where tracking those inputs has real value.
        </p>
        <p>
          If you know your numbers are being re-evaluated at your next lab draw, having a record of
          what you actually did in the intervening weeks is useful — both for your own understanding
          and for the conversation with your doctor.
        </p>
        <p>
          LipidLog is designed for exactly this: logging the daily habits that drive your labs,
          tracking your results over time, and giving you a single score that reflects the full
          picture between appointments.
        </p>

        <h2>Summary</h2>
        <p>
          No single cholesterol number automatically requires medication. The decision turns on
          overall cardiovascular risk, calculated using LDL alongside age, blood pressure, diabetes,
          smoking, and family history.
        </p>
        <p>
          LDL of 190 or above typically warrants medication regardless of other factors. Below that
          — particularly in the 160–189 range — a structured lifestyle trial is a reasonable and
          guideline-supported first step for most people without other major risk factors.
        </p>
        <p>
          The most useful thing you can do right now is understand your full risk picture, not just
          your LDL number.
        </p>
      </div>

      {/* Related links */}
      <div className="mt-12 pt-8 border-t border-gray-100">
        <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wide mb-4">Related</p>
        <ul className="space-y-2">
          {[
            { href: "/guides/ldl-160-what-it-means-and-how-to-lower-it", label: "LDL 160: What It Means and How to Lower It" },
            { href: "/guides/can-you-lower-cholesterol-without-medication", label: "Can You Lower Cholesterol Without Medication?" },
            { href: "/guides/how-much-can-cholesterol-drop-in-90-days", label: "How Much Can Cholesterol Drop in 90 Days?" },
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
