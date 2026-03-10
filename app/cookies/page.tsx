import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, SITE_CONFIG } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Tevuna Cookie Policy. How we use cookies and similar technologies in line with UK GDPR and ePrivacy.',
  alternates: { canonical: `${SITE_URL}/cookies` },
}

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center text-primary-500 hover:text-primary-600 text-sm font-medium mb-8"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
          Cookie Policy
        </h1>
        <p className="text-slate-600 mb-10">
          Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help the site work properly, remember your preferences, and can be used for analytics. Under UK GDPR and the Privacy and Electronic Communications Regulations (PECR), we must tell you what cookies we use and obtain your consent for non-essential cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Cookies we use</h2>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-2">Strictly necessary</h3>
            <p>
              We store your cookie consent choice in your browser (local storage) so we do not ask again on every visit. This is essential for the site to respect your choice and does not require consent under UK law.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-slate-200 rounded-lg">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-3 font-semibold text-slate-900">Name / storage</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Purpose</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-200">
                    <td className="p-3 font-mono text-sm">cookie_consent (local storage)</td>
                    <td className="p-3">Stores your cookie consent preference (accept / reject non-essential)</td>
                    <td className="p-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-2">Non-essential cookies (optional)</h3>
            <p>
              If you choose &quot;Accept all&quot; in our cookie banner, we may use cookies for analytics (e.g. to understand how visitors use our site). We do not use advertising or third-party tracking cookies without your consent. You can change your choice at any time via the cookie banner or by clearing site data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Your choice</h2>
            <p>
              When you first visit our site, you will see a cookie banner. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Accept all:</strong> allow strictly necessary and optional (e.g. analytics) cookies.</li>
              <li><strong>Reject non-essential:</strong> only strictly necessary cookies will be used.</li>
            </ul>
            <p className="mt-4">
              Your choice is stored in a cookie so we can remember it. You can change your mind by clearing cookies for this site or contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Third-party cookies</h2>
            <p>
              Our site may link to external services (e.g. social media, WhatsApp). Those services may set their own cookies when you visit their sites. We do not control those cookies; please check their privacy and cookie policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. More information</h2>
            <p>
              For how we use your personal data, see our <Link href="/privacy" className="text-primary-500 hover:underline">Privacy Policy</Link>. For questions about cookies, contact us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-500 hover:underline">{SITE_CONFIG.email}</a>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-4">
          <Link href="/" className="text-primary-500 hover:underline font-medium">← Back to Home</Link>
          <Link href="/privacy" className="text-primary-500 hover:underline font-medium">Privacy Policy</Link>
        </div>
      </div>
    </main>
      <Footer />
    </>
  )
}
