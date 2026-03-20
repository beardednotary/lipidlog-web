"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconChart() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconApple() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

// ── Score Ring SVG ─────────────────────────────────────────────────────────────

function ScoreRing({ score = 44 }: { score?: number }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const fill = (score / 100) * circ;
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg width="128" height="128" className="-rotate-90">
        <circle cx="64" cy="64" r={r} fill="none" stroke="#F5F7FA" strokeWidth="10" />
        <circle
          cx="64" cy="64" r={r} fill="none"
          stroke="#E6A23C" strokeWidth="10"
          strokeDasharray={`${fill} ${circ}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold text-text-primary">{score}</span>
        <span className="text-xs text-text-secondary -mt-1">/ 100</span>
      </div>
    </div>
  );
}

// ── Beta Form ─────────────────────────────────────────────────────────────────

function BetaForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [hasIphone, setHasIphone] = useState<string>("");
  const [goals, setGoals] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const goalOptions = ["LDL", "Triglycerides", "HDL", "Not sure"];

  function toggleGoal(goal: string) {
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("goals", goals.join(", ") || "Not specified");
    data.set("has_iphone", hasIphone);

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      const res = await fetch("https://formspree.io/f/mlgpberz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
        setGoals([]);
        setHasIphone("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">You&apos;re on the list.</h3>
        <p className="text-text-secondary">I&apos;ll reach out with your TestFlight invite soon.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1.5">First name</label>
          <input
            name="first_name"
            type="text"
            required
            placeholder="Jane"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-1.5">Last name</label>
          <input
            name="last_name"
            type="text"
            placeholder="Smith"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-1.5">Email</label>
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">Do you have an iPhone?</label>
        <div className="flex gap-3">
          {["Yes", "No"].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setHasIphone(opt)}
              className={`flex-1 py-3 rounded-xl border text-sm font-medium transition ${
                hasIphone === opt
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-gray-200 bg-white text-text-secondary hover:border-brand-blue/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-secondary mb-2">What are you trying to improve? <span className="text-text-tertiary font-normal">(optional)</span></label>
        <div className="flex flex-wrap gap-2">
          {goalOptions.map((goal) => (
            <button
              key={goal}
              type="button"
              onClick={() => toggleGoal(goal)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                goals.includes(goal)
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-gray-200 bg-white text-text-secondary hover:border-brand-blue/50"
              }`}
            >
              {goal}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 rounded-xl bg-brand-blue text-white font-semibold text-base hover:bg-blue-600 active:scale-[0.99] transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting…" : "Request TestFlight Access"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-500">Something went wrong. Please try again or email me directly.</p>
      )}
    </form>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <SiteNav />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-semibold mb-6 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                Now in TestFlight Beta
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-6">
                Improve your cholesterol before your next blood test.
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                LipidLog helps you track your cholesterol score, identify what&apos;s driving your numbers, and improve your labs before your next test.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#beta"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-blue text-white font-semibold text-base hover:bg-blue-600 active:scale-[0.99] transition"
                >
                  <IconApple />
                  Join the TestFlight Beta
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-6 py-4 rounded-xl border border-gray-200 text-text-primary font-medium text-base hover:border-brand-blue/40 hover:bg-brand-gray transition"
                >
                  See how it works
                </a>
              </div>
            </div>

            {/* Score ring preview */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-[3rem] bg-brand-gray flex flex-col items-center justify-center gap-4 shadow-lg border border-gray-200">
                  <ScoreRing score={44} />
                  <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-1">Cholesterol Score</p>
                    <p className="text-sm text-text-secondary">Needs Work — let&apos;s improve it</p>
                  </div>
                  <div className="flex gap-4 text-center">
                    {[
                      { label: "LDL", value: "142" },
                      { label: "HDL", value: "52" },
                      { label: "TG", value: "188" },
                    ].map((m) => (
                      <div key={m.label}>
                        <p className="text-xs text-text-tertiary">{m.label}</p>
                        <p className="text-base font-bold text-text-primary">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Floating day count badge */}
                <div className="absolute -bottom-4 -right-4 bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-lg">
                  <p className="text-2xl font-bold text-brand-blue leading-none">67</p>
                  <p className="text-xs text-text-secondary">days to next test</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-brand-gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-6">
            Most health apps track steps.<br />
            None help you improve cholesterol<br />
            between lab tests.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            If you&apos;ve ever gotten high LDL or triglyceride results, you know the feeling — your doctor tells you to improve your diet and come back in 3 months.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            But what do you actually do in those 90 days?
          </p>
          <p className="text-lg text-text-secondary leading-relaxed mb-10">
            LipidLog was built to help you understand what affects your cholesterol and track real progress before your next test.
          </p>
          <a
            href="#beta"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold text-base hover:bg-blue-600 transition"
          >
            Get Early Access
          </a>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">How LipidLog Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <IconChart />,
                title: "Track Your Cholesterol Score",
                body: "See LDL, HDL, triglycerides, and total cholesterol in one simple score so you can monitor your progress between lab tests.",
              },
              {
                icon: <IconTarget />,
                title: "Identify What's Driving Your Numbers",
                body: "Log habits like sugary drinks, fast food, exercise, and medications to understand what may be affecting your cholesterol.",
              },
              {
                icon: <IconCalendar />,
                title: "Improve Before Your Next Test",
                body: "Set your next lab date and see a countdown while tracking habits that may improve your results.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-8 rounded-2xl bg-brand-gray border border-gray-100 hover:border-brand-blue/20 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">{card.title}</h3>
                <p className="text-text-secondary leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshots ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-brand-gray">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Built for clarity, not complexity</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Your cholesterol score", filename: "score-dashboard.png" },
              { label: "Track habits affecting your labs", filename: "habit-log.png" },
              { label: "Countdown to your next test", filename: "lab-countdown.png" },
              { label: "Share your progress", filename: "share-card.png" },
            ].map((s) => (
              <div key={s.filename} className="flex flex-col gap-3">
                <div className="relative aspect-[9/19.5] rounded-[2rem] overflow-hidden border border-gray-200 shadow-xl">
                  <Image
                    src={`/screenshots/${s.filename}`}
                    alt={s.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-sm text-center text-text-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder story ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">Why I built LipidLog</h2>
          </div>
          <div className="bg-brand-gray rounded-2xl p-8 lg:p-10 border border-gray-100">
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              I built LipidLog after getting high cholesterol results myself.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              My triglycerides were over 260, and I realized there wasn&apos;t a good tool for understanding what actually improves cholesterol between lab tests.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-5">
              Most apps store numbers. LipidLog helps you improve them.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              I&apos;m now using the app myself while working toward better results before my next test.
            </p>
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue font-bold">R</div>
              <div>
                <p className="font-semibold text-text-primary text-sm">Ray</p>
                <p className="text-xs text-text-tertiary">Founder, LipidLog</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Beta signup ─────────────────────────────────────────────────── */}
      <section id="beta" className="py-24 px-6 bg-brand-gray">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-brand-red text-xs font-semibold mb-6 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            Currently accepting 50 early beta testers
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Join the LipidLog TestFlight Beta
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-10">
            I&apos;m looking for a small group of early users who want to improve their cholesterol before their next blood test.
          </p>
          <BetaForm />
        </div>
      </section>

      {/* ── Privacy / Trust ─────────────────────────────────────────────── */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-text-secondary leading-relaxed">
            LipidLog is built for individuals trying to improve cholesterol naturally between lab tests.<br />
            <span className="font-medium text-text-primary">Your health data stays private and under your control.</span>
          </p>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="py-10 px-6 bg-brand-gray border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <Image src="/logo.png" alt="LipidLog" height={20} width={86} className="object-contain mb-1" />
            <p className="text-sm text-text-tertiary">Improve your cholesterol before your next test.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="mailto:ray@dahvio.com" className="hover:text-brand-blue transition">Contact</a>
            <Link href="/privacy" className="hover:text-brand-blue transition">Privacy Policy</Link>
            <a href="https://dahvio.com" className="text-text-tertiary hover:text-brand-blue transition">© 2026 DahVio Studios</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
