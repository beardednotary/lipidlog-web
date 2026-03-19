"use client";

import { useState } from "react";
import Link from "next/link";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

// ── Scoring — mirrors ScoreService in score_service.dart ─────────────────────
// Lab Score (0–50) uses the exact subscore weights from the app.
// Behavior (0–30) and Trend (0–20) are neutral since the web calculator
// has no habit history or prior labs. Full score range: 0–100.

function ldlScore10(ldl: number): number {
  if (ldl <= 70) return 10;
  if (ldl <= 99) return 9;
  if (ldl <= 129) return 7;
  if (ldl <= 159) return 5;
  if (ldl <= 189) return 3;
  return 0;
}

function tgScore10(tg: number): number {
  if (tg < 100) return 10;
  if (tg <= 149) return 9;
  if (tg <= 199) return 7;
  if (tg <= 499) return 4;
  return 0;
}

function hdlScore10(hdl: number): number {
  if (hdl >= 60) return 10;
  if (hdl >= 50) return 8;
  if (hdl >= 40) return 6;
  return 2;
}

function ratioScore10(total: number, hdl: number): number {
  if (hdl === 0) return 2;
  const ratio = total / hdl;
  if (ratio <= 3.5) return 10;
  if (ratio <= 4.5) return 8;
  if (ratio <= 6.0) return 5;
  return 2;
}

function nonHdlScore10(nonHdl: number): number {
  if (nonHdl < 100) return 10;
  if (nonHdl <= 129) return 8;
  if (nonHdl <= 159) return 6;
  if (nonHdl <= 189) return 4;
  return 1;
}

function calculateScore(ldl: number, hdl: number, trig: number): number {
  // Friedewald equation: Total = LDL + HDL + TG/5
  const total = ldl + hdl + trig / 5;
  const nonHdl = total - hdl; // = LDL + TG/5

  const weighted10 =
    0.35 * ldlScore10(ldl) +
    0.25 * tgScore10(trig) +
    0.15 * hdlScore10(hdl) +
    0.15 * ratioScore10(total, hdl) +
    0.10 * nonHdlScore10(nonHdl);

  const labScore = Math.min(50, Math.max(0, weighted10 * 5));
  const behaviorScore = 15; // neutral — no habit history
  const trendScore = 10;    // neutral — no prior labs

  return Math.round(labScore + behaviorScore + trendScore);
}

function getScoreColor(score: number): string {
  if (score >= 70) return "#3BA776"; // green
  if (score >= 45) return "#E6A23C"; // amber
  return "#D64545"; // red
}

function getScoreLabel(score: number): string {
  if (score >= 70) return "Good — keep it up";
  if (score >= 55) return "Fair — room to improve";
  if (score >= 45) return "Below average — but fixable";
  if (score >= 35) return "Needs work — focus on key habits";
  return "High risk — speak with your doctor";
}

function getProjectedScore(score: number): number {
  const gain = score < 45 ? 22 : score < 60 ? 18 : 12;
  return Math.min(100, score + gain);
}

type Insight = { habit: string; reason: string };

function getBiggestOpportunity(ldl: number, hdl: number, trig: number): Insight {
  const ldlImpact = Math.max(0, ldl - 100) * 0.35;
  const trigImpact = Math.max(0, trig - 100) * 0.1;
  const hdlGap = Math.max(0, 60 - hdl) * 0.3;

  if (trigImpact >= ldlImpact && trigImpact >= hdlGap) {
    return {
      habit: "Reduce sugar and refined carbohydrates",
      reason: "Your triglycerides are the biggest drag on your score — cutting sugar has the fastest impact.",
    };
  }
  if (ldlImpact >= trigImpact && ldlImpact >= hdlGap) {
    return {
      habit: "Increase soluble fiber and reduce saturated fat",
      reason: "Your LDL is the main driver of your score. Diet quality is your most effective lever.",
    };
  }
  return {
    habit: "Add regular aerobic exercise",
    reason: "Raising your HDL through consistent cardio will meaningfully improve your score.",
  };
}

// ── Score Ring ────────────────────────────────────────────────────────────────

function ScoreRing({ score, color }: { score: number; color: string }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const fill = (score / 100) * circ;
  return (
    <div className="relative w-32 h-32 flex items-center justify-center mx-auto">
      <svg width="128" height="128" className="-rotate-90">
        <circle cx="64" cy="64" r={r} fill="none" stroke="#F5F7FA" strokeWidth="10" />
        <circle
          cx="64" cy="64" r={r} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={`${fill} ${circ}`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 0.6s ease" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold text-text-primary" style={{ color }}>{score}</span>
        <span className="text-xs text-text-secondary -mt-1">/ 100</span>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Calculator() {
  const [ldl, setLdl] = useState("");
  const [hdl, setHdl] = useState("");
  const [trig, setTrig] = useState("");
  const [result, setResult] = useState<{ score: number; color: string; label: string; projected: number; insight: Insight } | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const l = parseInt(ldl);
    const h = parseInt(hdl);
    const t = parseInt(trig);
    if (isNaN(l) || isNaN(h) || isNaN(t)) return;

    const score = calculateScore(l, h, t);
    setResult({
      score,
      color: getScoreColor(score),
      label: getScoreLabel(score),
      projected: getProjectedScore(score),
      insight: getBiggestOpportunity(l, h, t),
    });
  }

  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      <div className="max-w-md mx-auto px-4 pt-32 pb-24">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-tertiary mb-2">Free tool</p>
          <h1 className="text-3xl font-bold text-text-primary mb-3">Get your cholesterol score in 10 seconds</h1>
          <p className="text-text-secondary">
            Enter your latest lab values to see your score and what to focus on.
          </p>
        </div>

        {/* Input card */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-5 mb-6">
          {[
            { label: "LDL", sublabel: "mg/dL", value: ldl, onChange: setLdl, placeholder: "e.g. 160" },
            { label: "HDL", sublabel: "mg/dL", value: hdl, onChange: setHdl, placeholder: "e.g. 52" },
            { label: "Triglycerides", sublabel: "mg/dL", value: trig, onChange: setTrig, placeholder: "e.g. 188" },
          ].map((field) => (
            <div key={field.label}>
              <div className="flex items-baseline justify-between mb-1.5">
                <label className="text-sm font-semibold text-text-primary">{field.label}</label>
                <span className="text-xs text-text-tertiary">{field.sublabel}</span>
              </div>
              <input
                type="number"
                inputMode="numeric"
                required
                min={0}
                max={999}
                placeholder={field.placeholder}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text-primary text-lg placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-brand-blue text-white font-semibold text-base hover:bg-blue-600 active:scale-[0.99] transition mt-2"
          >
            Get My Score
          </button>
        </form>

        {/* Result */}
        {result && (
          <div className="space-y-4 animate-fade-in">
            {/* Score card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-tertiary mb-4">Your Lipid Score</p>
              <ScoreRing score={result.score} color={result.color} />
              <p className="text-lg font-semibold text-text-primary mt-4">{result.label}</p>
              <p className="text-sm text-text-tertiary mt-1">Lab score only — habit tracking and trend history in the app raise or lower this further</p>
            </div>

            {/* Projection card */}
            <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue mb-2">90-Day Potential</p>
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <p className="text-2xl font-bold text-text-primary">{result.score}</p>
                  <p className="text-xs text-text-tertiary">Now</p>
                </div>
                <div className="flex-1 flex items-center gap-1">
                  <div className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-brand-blue transition-all duration-700"
                      style={{ width: `${Math.round((result.projected / 100) * 100)}%` }}
                    />
                  </div>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="#3B6EF5"><path d="M2 6h8M6 2l4 4-4 4" stroke="#3B6EF5" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-brand-blue">{result.projected}</p>
                  <p className="text-xs text-text-tertiary">Potential</p>
                </div>
              </div>
              <p className="text-xs text-text-tertiary mt-3">
                Based on improving 2–3 key habits consistently over 90 days.
              </p>
            </div>

            {/* Insight card */}
            <div className="bg-brand-gray rounded-2xl border border-gray-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-tertiary mb-2">Biggest Opportunity</p>
              <p className="font-semibold text-text-primary mb-1">{result.insight.habit}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{result.insight.reason}</p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-brand-blue p-6 text-center text-white">
              <p className="font-bold text-lg mb-2">Track this score in LipidLog</p>
              <p className="text-sm text-blue-100 mb-5 leading-relaxed">
                Log your habits daily, see your score move, and stay consistent until your next lab test.
              </p>
              <Link
                href="/#beta"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-white text-brand-blue font-semibold hover:bg-blue-50 active:scale-[0.99] transition"
              >
                Join the Beta
              </Link>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-text-tertiary text-center mt-8 leading-relaxed">
          This calculator is for informational purposes only and is not a substitute for medical advice. Always consult your doctor about your lab results.
        </p>
      </div>

      <SiteFooter />
    </main>
  );
}
