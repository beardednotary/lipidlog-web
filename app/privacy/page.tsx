import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — LipidLog",
  description: "LipidLog privacy policy for the beta testing program.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight text-text-primary">LipidLog</Link>
          <Link
            href="/#beta"
            className="px-4 py-2 rounded-lg bg-brand-blue text-white text-sm font-semibold hover:bg-blue-600 transition"
          >
            Join Beta
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">Privacy Policy (Beta)</h1>
        <p className="text-sm text-text-tertiary mb-10">Last updated: March 11, 2026</p>

        <p className="text-text-secondary leading-relaxed mb-10">
          LipidLog is designed to help individuals track and improve cholesterol between blood tests. Protecting your data and privacy is important.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-4">Information Collected</h2>
          <p className="text-text-secondary leading-relaxed mb-6">LipidLog may collect the following information:</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-text-primary mb-2">Account information</h3>
              <p className="text-text-secondary leading-relaxed">
                If you sign up for beta access, your email address may be collected to provide TestFlight access and communicate about the beta program.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-text-primary mb-2">Health information</h3>
              <p className="text-text-secondary leading-relaxed">
                If you choose to enter cholesterol lab values (such as LDL, HDL, triglycerides), this data is stored within the app to calculate your cholesterol score and track progress.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-text-primary mb-2">Usage analytics</h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                LipidLog uses Firebase Analytics to collect anonymous usage information such as:
              </p>
              <ul className="list-disc list-inside space-y-1 text-text-secondary ml-1">
                <li>App opens</li>
                <li>Features used</li>
                <li>Onboarding completion</li>
                <li>Habit logging events</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-3">
                This information helps improve the app and identify bugs.
              </p>
              <p className="text-text-secondary leading-relaxed mt-3 font-medium text-text-primary">
                No health data is shared with advertisers.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-4">Data Sharing</h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            LipidLog does not sell or share personal health information with third parties.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Analytics data may be processed by Google Firebase for the purpose of improving app performance and reliability.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-4">Beta Status</h2>
          <p className="text-text-secondary leading-relaxed">
            LipidLog is currently in a beta testing phase. Features and data handling may evolve as the product develops.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-text-primary mb-4">Contact</h2>
          <p className="text-text-secondary leading-relaxed">
            If you have any questions about privacy, you can contact:{" "}
            <a href="mailto:ray@dahvio.com" className="text-brand-blue hover:underline">ray@dahvio.com</a>
          </p>
        </section>
      </div>

      <footer className="py-10 px-6 bg-brand-gray border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-text-primary">LipidLog</p>
            <p className="text-sm text-text-tertiary">Improve your cholesterol before your next test.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a href="mailto:ray@lipidlog.com" className="hover:text-brand-blue transition">Contact</a>
            <Link href="/privacy" className="hover:text-brand-blue transition">Privacy Policy</Link>
            <span className="text-text-tertiary">© 2025 LipidLog</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
