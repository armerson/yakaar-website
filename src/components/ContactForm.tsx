import { useState, type FormEvent } from 'react'
import { contactTopics, type ContactTopic } from '../contactTopics'

export default function ContactForm({ initialTopic = 'General enquiry' }: { initialTopic?: ContactTopic }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')
  const formEnabled = import.meta.env.VITE_CONTACT_FORM_ENABLED === 'true'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formEnabled || status === 'sending') return

    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())
    setStatus('sending')
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error('Delivery failed')
      form.reset()
      setStatus('sent')
    } catch {
      setError('Your message could not be sent. Please try again later or use the email address below.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-white">Your name</label>
        <input id="contact-name" name="name" autoComplete="name" required maxLength={100} className="w-full border border-white/25 bg-white/10 px-4 py-3 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e]" />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-white">Email address</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className="w-full border border-white/25 bg-white/10 px-4 py-3 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e]" />
      </div>
      <div>
        <label htmlFor="contact-topic" className="mb-2 block text-sm font-semibold text-white">What is your enquiry about?</label>
        <select id="contact-topic" name="topic" defaultValue={initialTopic} className="w-full border border-white/25 bg-[#171717] px-4 py-3 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e]">
          {contactTopics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-white">Message</label>
        <textarea id="contact-message" name="message" rows={5} required minLength={10} maxLength={4000} className="w-full resize-y border border-white/25 bg-white/10 px-4 py-3 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4d35e]" />
      </div>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="text-sm leading-6 text-white/75">Your details will be sent to the Yakaar contact inbox so the team can reply. Please do not include sensitive information about children.</p>
      {!formEnabled && (
        <p className="border border-[#f4d35e]/50 p-4 text-sm leading-6 text-white" role="status">
          Form delivery is being set up. The form cannot send messages yet.
        </p>
      )}
      <button type="submit" disabled={!formEnabled || status === 'sending'} className="premium-button-gold w-full disabled:cursor-not-allowed disabled:opacity-50">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p aria-live="polite" className="text-sm leading-6 text-white">
        {status === 'sent' && 'Thank you. Your message has been sent.'}
        {status === 'error' && error}
      </p>
      {(!formEnabled || status === 'error') && (
        <p className="text-sm leading-6 text-white/75">
          You can email <a className="underline underline-offset-2 hover:text-white" href="mailto:rcuthbert@ambassadors-hope.org">rcuthbert@ambassadors-hope.org</a>.
        </p>
      )}
    </form>
  )
}
