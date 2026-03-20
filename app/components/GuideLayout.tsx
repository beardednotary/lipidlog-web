import Link from "next/link";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

interface GuideLayoutProps {
  title: string;
  description: string;
  publishedAt: string; // ISO date string
  readingTime: number; // minutes
  children: React.ReactNode;
}

export default function GuideLayout({
  title,
  description,
  publishedAt,
  readingTime,
  children,
}: GuideLayoutProps) {
  const formatted = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      <div className="max-w-2xl mx-auto px-6 pt-28 pb-24">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-text-tertiary mb-8">
          <Link href="/" className="hover:text-brand-blue transition">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-blue transition">Guides</Link>
          <span>/</span>
          <span className="text-text-secondary">{title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10 pb-8 border-b border-gray-100">
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-5">
            {description}
          </p>
          <div className="flex items-center gap-3 text-sm text-text-tertiary">
            <span>{formatted}</span>
            <span>·</span>
            <span>{readingTime} min read</span>
          </div>
        </header>

        {/* Content */}
        <article>{children}</article>
      </div>

      <SiteFooter />
    </main>
  );
}
