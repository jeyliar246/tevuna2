import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL, SITE_CONFIG } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Tevuna Privacy Policy. How we collect, use and protect your personal data under UK GDPR.',
  alternates: { canonical: `${SITE_URL}/privacy` },
}

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-slate-600 mb-10">
          Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Who we are</h2>
            <p>
              {SITE_CONFIG.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is the data controller for the personal data we collect through our website {SITE_URL}. We are committed to protecting your privacy and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. What data we collect</h2>
            <p>We may collect and process the following personal data:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Contact form:</strong> name, email address, subject, and message content when you use our contact form.</li>
              <li><strong>Academy waitlist:</strong> name, email address, phone number, area of interest, and any additional information you provide when joining the Tevuna Academy waitlist.</li>
              <li><strong>Technical data:</strong> IP address, browser type, device information, and cookies (see our <Link href="/cookies" className="text-primary-500 hover:underline">Cookie Policy</Link>) when you visit our site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Legal basis and purposes</h2>
            <p>We process your data only where we have a lawful basis:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Consent:</strong> when you submit a form, we process your data on the basis of your consent to respond to your enquiry or add you to our waitlist.</li>
              <li><strong>Legitimate interests:</strong> to operate and improve our website, prevent misuse, and comply with legal obligations.</li>
              <li><strong>Legal obligation:</strong> where we must retain or disclose data to comply with UK law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. How long we keep your data</h2>
            <p>
              We keep contact and waitlist data only for as long as necessary: typically up to 24 months after your last interaction, unless you ask us to delete it sooner or we have a legal obligation to retain it. Cookie and technical logs may be retained for a shorter period as described in our Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Your rights under UK GDPR</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Access</strong> your personal data (subject access request).</li>
              <li><strong>Rectification</strong> of inaccurate data.</li>
              <li><strong>Erasure</strong> (&quot;right to be forgotten&quot;) in certain circumstances.</li>
              <li><strong>Restrict processing</strong> in certain circumstances.</li>
              <li><strong>Data portability</strong> where processing is by automated means based on consent or contract.</li>
              <li><strong>Object</strong> to processing based on legitimate interests.</li>
              <li><strong>Withdraw consent</strong> at any time where we rely on consent.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at {SITE_CONFIG.email}. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) in the UK: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">ico.org.uk</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Sharing and international transfers</h2>
            <p>
              We do not sell your data. We may share data with service providers (e.g. hosting, email) who act as processors under our instructions. Where data is transferred outside the UK, we ensure appropriate safeguards (e.g. adequacy decisions or standard contractual clauses) are in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">7. Security</h2>
            <p>
              We use appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or alteration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">8. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will be revised, and we encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">9. Contact</h2>
            <p>
              For privacy-related questions or to exercise your rights, contact us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-500 hover:underline">{SITE_CONFIG.email}</a> or {SITE_CONFIG.phone}.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-4">
          <Link href="/cookies" className="text-primary-500 hover:underline font-medium">Cookie Policy</Link>
          <Link href="/" className="text-primary-500 hover:underline font-medium">Home</Link>
        </div>
      </div>
    </main>
      <Footer />
    </>
  )
}
