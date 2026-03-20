"use client";

import { useState } from "react";
import Link from "next/link";

// Scoring mirrors ScoreService — lab score only, behavior/trend neutral
function ldlScore10(ldl: number) {
  if (ldl <= 70) return 10; if (ldl <= 99) return 9; if (ldl <= 129) return 7;
  if (ldl <= 159) return 5; if (ldl <= 189) return 3; return 0;
}
function tgScore10(tg: number) {
  if (tg < 100) return 10; if (tg <= 149) return 9; if (tg <= 199) return 7;
  if (tg <= 499) return 4; return 0;
}
function hdlScore10(hdl: number) {
  if (hdl >= 60) return 10; if (hdl >= 50) return 8; if (hdl >= 40) return 6; return 2;
}
function ratioScore10(total: number, hdl: number) {
  if (hdl === 0) return 2;
  const r = total / hdl;
  if (r <= 3.5) return 10; if (r <= 4.5) return 8; if (r <= 6.0) return 5; return 2;
}
function nonHdlScore10(n: number) {
  if (n < 100) return 10; if (n <= 129) return 8; if (n <= 159) return 6;
  if (n <= 189) return 4; return 1;
}
function calcScore(ldl: number, hdl: number, trig: number) {
  const total = ldl + hdl + trig / 5;
  const nonHdl = total - hdl;
  const w = 0.35 * ldlScore10(ldl) + 0.25 * tgScore10(trig) + 0.15 * hdlScore10(hdl)
    + 0.15 * ratioScore10(total, hdl) + 0.10 * nonHdlScore10(nonHdl);
  return Math.round(Math.min(50, Math.max(0, w * 5)) + 15 + 10);
}
function scoreColor(s: number) {
  return s >= 70 ? "#3BA776" : s >= 45 ? "#E6A23C" : "#D64545";
}
function scoreLabel(s: number) {
  if (s >= 70) return "Good — keep it up";
  if (s >= 55) return "Fair — room to improve";
  if (s >= 45) return "Below average — but fixable";
  if (s >= 35) return "Needs work — focus on key habits";
  return "High risk — speak with your doctor";
}

export default function LipidScoreCalculator() {
  const [ldl, setLdl] = useState("");
  const [hdl, setHdl] = useState("");
  const [trig, setTrig] = useState("");
  const [score, setScore] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const l = parseInt(ldl), h = parseInt(hdl), t = parseInt(trig);
    if (!isNaN(l) && !isNaN(h) && !isNaN(t)) setScore(calcScore(l, h, t));
  }

  const color = score !== null ? scoreColor(score) : "#3B6EF5";

  return (
    <div className="my-10 rounded-2xl border border-gray-200 bg-brand-gray overflow-hidden not-prose">
      <div className="px-6 py-5 border-b border-gray-200 bg-white">
        <p className="text-xs font-semibold uppercase tracking-wide text-text-tertiary mb-0.5">Free tool</p>
        <p className="font-bold text-text-primary">Check your Lipid Score</p>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
          {[
            { label: "LDL", val: ldl, set: setLdl, ph: "160" },
            { label: "HDL", val: hdl, set: setHdl, ph: "52" },
            { label: "Triglycerides", val: trig, set: setTrig, ph: "188" },
          ].map((f) => (
            <div key={f.label} className="flex-1">
              <label className="block text-xs font-medium text-text-secondary mb-1">{f.label}</label>
              <input
                type="number"
                inputMode="numeric"
                required
                min={0}
                max={999}
                placeholder={f.ph}
                value={f.val}
                onChange={(e) => f.set(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition text-sm"
              />
            </div>
          ))}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-blue text-white font-semibold text-sm hover:bg-blue-600 active:scale-[0.99] transition whitespace-nowrap"
            >
              Get Score
            </button>
          </div>
        </form>

        {score !== null && (
          <div className="flex items-center justify-between bg-white rounded-xl border border-gray-200 px-5 py-4 animate-fade-in">
            <div>
              <p className="text-sm font-medium text-text-secondary">{scoreLabel(score)}</p>
              <Link
                href="/tools/cholesterol-calculator"
                className="text-xs text-brand-blue hover:underline mt-0.5 inline-block"
              >
                See full breakdown + 90-day potential →
              </Link>
            </div>
            <div className="text-3xl font-bold tabular-nums" style={{ color }}>
              {score}
              <span className="text-sm font-normal text-text-tertiary">/100</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
