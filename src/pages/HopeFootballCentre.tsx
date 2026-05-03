const benefits = [
  'A safe and reliable space for academy training',
  'Improved playing conditions year-round',
  'Access for local schools and teams',
  'Expanded opportunities for tournaments and community events',
  'A lasting resource for the local area',
]

export default function HopeFootballCentre() {
  const raised = 180000
  const target = 230000
  const pct = Math.round((raised / target) * 100)

  return (
    <div className="premium-page">
      <section className="premium-hero">
        <img src="/images/photo-01.jpg" alt="Football pitch" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.5)_45%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f3ea] via-[#f7f3ea]/25 to-transparent" />
        <div className="premium-hero-content">
          <div className="max-w-4xl">
            <p className="premium-eyebrow-light">Hope Football Centre</p>
            <h1 className="mt-5 text-5xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">
              Building a Space for Hope
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">
              Transforming a sandy pitch into a world-class facility that will serve generations of young people.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-container py-16">
        <div className="grid gap-px overflow-hidden bg-black/15 md:grid-cols-3">
          <div className="bg-[#171717] p-8 text-white">
            <p className="premium-eyebrow-light">Fundraising Progress</p>
            <p className="mt-4 text-lg leading-7 text-white/72">{pct}% of goal reached</p>
          </div>
          <div className="bg-[#fffaf0] p-8">
            <div className="text-5xl font-semibold text-[#a34a28]">£180,000</div>
            <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4a4338]">raised so far</div>
          </div>
          <div className="bg-[#fffaf0] p-8">
            <div className="text-5xl font-semibold text-[#a34a28]">£50,000</div>
            <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4a4338]">still needed</div>
          </div>
        </div>
        <div className="mt-6 h-3 bg-black/15">
          <div className="h-3 bg-[#a34a28]" style={{ width: `${pct}%` }} />
        </div>
      </section>

      <section className="premium-container grid gap-12 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="premium-eyebrow">Why It Matters</p>
          <h2 className="premium-heading mt-4">A Facility That Will Impact Generations</h2>
          <p className="premium-copy mt-6">
            As the work has grown, so has the need for improved facilities. Our current priority is transforming our sandy, uneven pitch into a high-quality artificial turf football pitch that will serve young people and the wider community for years to come.
          </p>
          <p className="mt-6 leading-8 text-[#4a4338]">The new pitch will provide:</p>
          <ul className="mt-7 divide-y divide-black/15 border-y border-black/15">
            {benefits.map(b => (
              <li key={b} className="py-4 text-[#4a4338]">{b}</li>
            ))}
          </ul>
          <a href="mailto:info@yaakarfootball.org?subject=Hope Football Centre Donation" className="premium-button mt-9">
            Support the Hope Football Centre
          </a>
        </div>
        <div className="grid min-h-[560px] grid-cols-2 gap-3">
          <img src="/images/photo-28.jpg" alt="Football action" className="col-span-2 h-72 w-full object-cover" />
          <img src="/images/photo-31.jpg" alt="Training" className="h-full min-h-64 w-full object-cover" />
          <img src="/images/photo-34.jpg" alt="Match" className="h-full min-h-64 w-full object-cover" />
        </div>
      </section>

      <section className="relative min-h-[540px] overflow-hidden">
        <img src="/images/photo-32.jpg" alt="Players on pitch" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/58" />
        <div className="premium-container relative z-10 flex min-h-[540px] items-center justify-center text-center text-white">
          <p className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
            "A lasting resource for the local area — and for generations of young people."
          </p>
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-20 text-center text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-5xl font-semibold leading-tight">We're Almost There</h2>
          <p className="mt-6 text-lg leading-8 text-white/72">
            Thanks to generous supporters, we are close to making this vision a reality. Your support will help complete a facility that will impact generations of young people in Senegal.
          </p>
          <a href="mailto:info@yaakarfootball.org?subject=Hope Football Centre Donation" className="premium-button-gold mt-9">
            Make a Donation
          </a>
        </div>
      </section>
    </div>
  )
}
