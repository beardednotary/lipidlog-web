import Image from "next/image";
import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="LipidLog" height={28} width={120} className="object-contain" />
        </Link>
        <Link
          href="/#beta"
          className="px-4 py-2 rounded-lg bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 transition"
        >
          Join Beta
        </Link>
      </div>
    </nav>
  );
}
