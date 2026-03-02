'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_CONSENT_KEY = 'cookie_consent'
const COOKIE_CONSENT_EXPIRY_DAYS = 365

type ConsentStatus = 'accepted' | 'rejected' | null

export default function CookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus | null
    if (stored === 'accepted' || stored === 'rejected') {
      setStatus(stored)
    }
  }, [])

  const saveConsent = (value: 'accepted' | 'rejected') => {
    const expiry = new Date()
    expiry.setDate(expiry.getDate() + COOKIE_CONSENT_EXPIRY_DAYS)
    localStorage.setItem(COOKIE_CONSENT_KEY, value)
    localStorage.setItem(`${COOKIE_CONSENT_KEY}_date`, expiry.toISOString())
    setStatus(value)
  }

  if (!mounted || status !== null) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-slate-900/95 backdrop-blur border-t border-slate-700 shadow-2xl"
    >
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-slate-200 text-sm md:text-base flex-1">
          We use cookies to remember your preferences and to improve our site. By clicking &quot;Accept all&quot; you agree to our use of cookies. You can change your mind anytime. See our{' '}
          <Link href="/cookies" className="text-primary-400 hover:text-primary-300 underline">
            Cookie Policy
          </Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-primary-400 hover:text-primary-300 underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            type="button"
            onClick={() => saveConsent('rejected')}
            className="px-4 py-2.5 rounded-lg border border-slate-500 text-slate-300 hover:bg-slate-700/50 transition-colors text-sm font-medium"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => saveConsent('accepted')}
            className="px-4 py-2.5 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors text-sm font-medium"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
