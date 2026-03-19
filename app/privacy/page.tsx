import type { Metadata } from "next";
import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — LipidLog",
  description: "LipidLog privacy policy for the beta testing program.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

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
              <p className="font-medium text-text-primary mt-3">
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

      <SiteFooter />
    </main>
  );
}
