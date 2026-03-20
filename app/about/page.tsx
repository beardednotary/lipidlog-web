import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "About — LipidLog",
  description:
    "LipidLog was built by a 42-year-old solo dad who got scary lab results and wanted a better way to track progress between tests.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      <div className="max-w-2xl mx-auto px-4 pt-32 pb-24">
        <h1 className="text-3xl font-bold text-text-primary mb-8">
          Why I built LipidLog
        </h1>

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>
            Last year I got my labs back and the numbers were not good: LDL 176,
            triglycerides 265, HDL 37. My doctor wanted to start me on statins.
          </p>

          <p>
            I asked for a short window to try lifestyle changes first. He agreed,
            not optimistically, but he agreed.
          </p>

          <p>
            I&apos;m 42, a solo dad with two kids. The &ldquo;you could have a heart attack
            at 50&rdquo; conversation hit differently than I expected. I walked out of
            that appointment thinking less about cholesterol in theory and more
            about what I was actually going to do next.
          </p>

          <p>
            The problem was simple: there was no good way to know whether what I
            was doing was working. My next lab test was weeks away. I could eat
            better, walk more, cut back on sugar, and still have no signal at all.
          </p>

          <p>
            Most health apps solve a different problem. They store your numbers.
            They log your food. They track your steps. But none of them answered
            the question I actually had: <em>am I improving?</em>
          </p>

          <p>
            So I built something for myself. LipidLog takes your lab values and
            daily habits and turns them into a simple score you can track over
            time. My starting score was 34.
          </p>

          <p>
            The idea was to create a better signal between blood tests. If I was
            doing the work consistently, I wanted to see progress. If I wasn&apos;t, I
            wanted to know that too.
          </p>

          <h2 className="text-xl font-semibold text-text-primary pt-4">
            A few things I want to be clear about
          </h2>

          <p>
            I&apos;m not anti-medication. If my numbers don&apos;t improve, I&apos;ll take the
            statin. This is not ideology. It&apos;s a time-boxed experiment with medical
            supervision and a clear endpoint.
          </p>

          <p>
            LipidLog is also not a replacement for medical care. It does not
            diagnose, prescribe, or replace your doctor. It gives you a way to
            track habits and stay engaged between tests instead of operating blind
            for 6 to 12 weeks.
          </p>

          <h2 className="text-xl font-semibold text-text-primary pt-4">
            Who this is for
          </h2>

          <p>
            If your doctor has given you a window to try lifestyle changes before
            medication, LipidLog is built for that window.
          </p>

          <p>
            If you&apos;re already on medication and want a better way to track your
            habits and progress, it can help with that too.
          </p>

          <p>
            And if you just got your labs back and you&apos;re trying to make sense of
            what they mean, start with the calculator below.
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-brand-gray border border-gray-100 p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-tertiary mb-2">
            Free tool
          </p>
          <h2 className="text-xl font-bold text-text-primary mb-2">
            See your Lipid Score
          </h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Enter your LDL, HDL, and triglycerides to get your score and see how
            much progress may be possible over the next 90 days.
          </p>
          <Link
            href="/tools/cholesterol-calculator"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-blue-600 active:scale-[0.99] transition"
          >
            Try the calculator
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-text-secondary">— Ray</p>
          <p className="text-sm text-text-tertiary mt-1">Founder, LipidLog</p>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
