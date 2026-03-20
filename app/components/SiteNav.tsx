"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/cholesterol", label: "Cholesterol" },
  { href: "/tools/cholesterol-calculator", label: "Calculator" },
  { href: "/about", label: "About" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="LipidLog" height={28} width={120} className="object-contain" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-text-secondary hover:text-brand-blue transition">
              {l.label}
            </Link>
          ))}
          <Link href="/#beta" className="px-4 py-2 rounded-lg bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 transition">
            Join Beta
          </Link>
        </div>

        {/* Mobile: Join Beta + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link href="/#beta" className="px-3 py-1.5 rounded-lg bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 transition">
            Join Beta
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-1.5 rounded-lg text-text-secondary hover:bg-brand-gray transition"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-medium text-text-secondary hover:text-brand-blue transition"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
