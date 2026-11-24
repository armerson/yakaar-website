import { Link } from 'react-router-dom'

const includes = [
  'Playing kit',
  'Training equipment',
  'Transport to matches and tournaments',
  'End-of-year excursions',
  'Ongoing coaching and mentorship',
]

const sponsorPhotos = [
  '/images/photo-11.jpg',
  '/images/photo-02.jpg',
  '/images/photo-05.jpg',
  '/images/photo-12.jpg',
  '/images/photo-19.jpg',
  '/images/photo-24.jpg',
]

export default function SponsorPlayer() {
  return (
    <div className="premium-page">
      <section className="premium-hero">
        <img src="/images/photo-11.jpg" alt="Academy players" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.5)_46%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f3ea] via-[#f7f3ea]/25 to-transparent" />
        <div className="premium-hero-content">
          <div className="max-w-4xl">
            <p className="premium-eyebrow-light">Sponsor a Player</p>
            <h1 className="mt-5 text-5xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">
              Change a Young Person's Future
            </h1>
          </div>
        </div>
      </section>

      <section className="premium-container grid gap-12 py-20 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <div>
          <p className="premium-eyebrow">£10 per month</p>
          <h2 className="premium-heading mt-4">Give a Child the Gift of Football</h2>
          <p className="premium-copy mt-6">
            It costs just <strong>£10 per month</strong> to support one academy player. Many of the families we serve are unable to cover the full cost of participation, so sponsorship enables every child to access these opportunities regardless of their financial circumstances.
          </p>
          <p className="mt-6 leading-8 text-[#4a4338]">Your sponsorship helps provide:</p>
          <ul className="mt-7 divide-y divide-black/15 border-y border-black/15">
            {includes.map(item => (
              <li key={item} className="py-4 text-[#4a4338]">{item}</li>
            ))}
          </ul>
          <blockquote className="mt-9 border-l-4 border-[#a34a28] pl-6 text-xl leading-9 text-[#171717]">
            "Through coaching, encouragement, and mentorship, we help each young person grow in confidence, technical ability, character, leadership, and faith."
          </blockquote>
          <Link to="/give?purpose=player" className="premium-button mt-9">
            Become an Academy Sponsor
          </Link>
          <p className="mt-4 text-sm text-[#6b6254]">Choose where you are giving from to see the current payment setup status.</p>
        </div>

        <aside className="bg-[#171717] text-white">
          <img loading="lazy" decoding="async" src="/images/photo-11.jpg" alt="Players" className="h-80 w-full object-cover object-top opacity-90" />
          <div className="p-8">
            <div className="text-6xl font-semibold text-[#f4d35e]">£10</div>
            <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/64">per month · per player</div>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden bg-white/15">
              <div className="bg-[#171717] p-5">
                <div className="text-3xl font-semibold">200+</div>
                <div className="mt-2 text-xs uppercase tracking-[0.14em] text-white/55">Players weekly</div>
              </div>
              <div className="bg-[#171717] p-5">
                <div className="text-3xl font-semibold">4</div>
                <div className="mt-2 text-xs uppercase tracking-[0.14em] text-white/55">Academies</div>
              </div>
            </div>
            <p className="mt-8 text-sm leading-6 text-white/68">
              Sponsors receive regular updates on the impact their support is making in the lives of Yakaar players.
            </p>
          </div>
        </aside>
      </section>

      <section className="premium-container pb-20">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {sponsorPhotos.map((src, i) => (
            <img loading="lazy" decoding="async" key={i} src={src} alt={`Player ${i + 1}`} className="h-64 w-full object-cover object-top" />
          ))}
        </div>
      </section>
    </div>
  )
}
