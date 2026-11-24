import { Link, useSearchParams } from 'react-router-dom'

const purposes = {
  player: {
    eyebrow: 'Sponsor a Player',
    title: 'Support a Young Player',
    description: 'Help make football, coaching and mentorship accessible to young people at Yakaar.',
  },
  centre: {
    eyebrow: 'Hope Football Centre',
    title: 'Support the Football Centre',
    description: 'Support the plan to improve the football facilities used by young people and the wider community.',
  },
  general: {
    eyebrow: 'Support Yakaar',
    title: 'Support the Mission',
    description: 'Help Yakaar create opportunities for young people through football.',
  },
} as const

const regions = [
  {
    name: 'United Kingdom',
    detail: 'A UK giving option will be added when the receiving organisation, donation terms and checkout have been approved.',
  },
  {
    name: 'Other countries',
    detail: 'An international option will be added after the supported countries, currencies and recipient have been confirmed.',
  },
  {
    name: 'Senegal',
    detail: 'A local option will be added after the Senegal-based team confirms the recipient and an approved local payment method.',
  },
]

export default function Give() {
  const [params] = useSearchParams()
  const requestedPurpose = params.get('purpose')
  const purpose = requestedPurpose === 'player' || requestedPurpose === 'centre'
    ? purposes[requestedPurpose]
    : purposes.general

  return (
    <div className="premium-page">
      <section className="bg-[#171717] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="premium-eyebrow-light">{purpose.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight sm:text-7xl">{purpose.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">{purpose.description}</p>
        </div>
      </section>

      <section className="premium-container py-16">
        <div className="max-w-3xl border-l-4 border-[#a34a28] bg-[#fffaf0] p-6 sm:p-8" role="status">
          <h2 className="text-2xl font-semibold">Online payments are being prepared</h2>
          <p className="mt-3 leading-7 text-[#4a4338]">
            No payment method is active on this page yet. Please do not send money to an account shared in an unverified message or link.
          </p>
        </div>

        <h2 className="premium-heading mt-16">Choose where you are giving from</h2>
        <p className="premium-copy mt-4 max-w-3xl">We are preparing options for supporters in each region. The correct method and currency will be shown here after approval.</p>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {regions.map(({ name, detail }) => (
            <article key={name} className="flex flex-col border border-black/15 bg-[#fffaf0] p-7">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <p className="mt-4 flex-1 leading-7 text-[#4a4338]">{detail}</p>
              <p className="mt-8 border-t border-black/15 pt-5 text-sm font-bold uppercase tracking-[0.12em] text-[#a34a28]">Payment setup pending</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-black/15 pt-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Questions about giving?</h2>
            <p className="mt-4 leading-7 text-[#4a4338]">You can ask about the project while payment arrangements are being confirmed.</p>
          </div>
          <div className="flex flex-wrap gap-4 sm:justify-end">
            <Link to="/contact?topic=Sponsorship" className="premium-button">Contact Yakaar</Link>
            <Link to="/sponsor" className="premium-button-outline">Learn about sponsorship</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
