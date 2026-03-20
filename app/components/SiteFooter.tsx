import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
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
  );
}
