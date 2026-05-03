const courseComponents = [
  { title: 'Practical Coaching Tools', desc: 'Hands-on drills, session planning, and coaching frameworks you can use immediately in your programmes.' },
  { title: 'Leadership Development', desc: 'Equipping you to lead with integrity, build teams, and create environments where young people flourish.' },
  { title: 'Biblical Foundations', desc: 'Grounding your coaching in purpose and faith — understanding sport as a vehicle for ministry.' },
  { title: 'Project Planning', desc: 'Support to help you start or strengthen football-based outreach projects in your own community.' },
  { title: 'Ongoing Mentoring', desc: 'You\'re not on your own. We provide continued encouragement and mentoring beyond the course.' },
]

const trainingPhotos = [
  '/images/photo-01.jpg',
  '/images/photo-06.jpg',
  '/images/photo-22.jpg',
  '/images/photo-27.jpg',
  '/images/photo-33.jpg',
  '/images/photo-35.jpg',
]

export default function CoachesTraining() {
  return (
    <div className="premium-page">
      <section className="premium-hero">
        <img src="/images/photo-22.jpg" alt="Coaches training" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.52)_46%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f3ea] via-[#f7f3ea]/25 to-transparent" />
        <div className="premium-hero-content">
          <div className="max-w-4xl">
            <p className="premium-eyebrow-light">Coaches Training</p>
            <h1 className="mt-5 text-5xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">
              Equipping Leaders to Multiply Impact
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">We believe football should be about more than winning.</p>
          </div>
        </div>
      </section>

      <section className="premium-container grid gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="premium-eyebrow">Our Vision</p>
          <h2 className="premium-heading mt-4">Raising Up the Next Generation of Leaders</h2>
          <div className="mt-6 space-y-5 leading-8 text-[#4a4338]">
            <p className="text-lg">We believe football is an opportunity to bring people together, build one another up, and instil values that last far beyond the game. Through the way we coach and lead, we aim to honour God and make a lasting difference in people's lives.</p>
            <p>Our Coach Development Programme equips individuals and organisations to start and strengthen football-based outreach projects in their own communities.</p>
            <p className="font-semibold text-[#171717]">Our vision is multiplication — raising up leaders who will use football to inspire, serve, and transform lives.</p>
          </div>
        </div>
        <div className="grid min-h-[560px] grid-cols-2 gap-3">
          <img src="/images/photo-01.jpg" alt="Coaching session" className="col-span-2 h-72 w-full object-cover" />
          <img src="/images/photo-06.jpg" alt="Training drill" className="h-full min-h-64 w-full object-cover" />
          <img src="/images/photo-22.jpg" alt="Team" className="h-full min-h-64 w-full object-cover" />
        </div>
      </section>

      <section className="bg-[#fffaf0] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="premium-eyebrow">The Course</p>
            <h2 className="premium-heading mt-4">Three One-Week Blocks</h2>
            <p className="mt-5 leading-8 text-[#4a4338]">
              The course is delivered across three one-week blocks throughout the year, providing comprehensive training and development for coaches at every level.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden bg-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {courseComponents.map(({ title, desc }, index) => (
              <article key={title} className="bg-[#fffaf0] p-8">
                <p className="premium-eyebrow">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#4a4338]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[540px] overflow-hidden">
        <img src="/images/photo-04.jpg" alt="Football" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/68" />
        <div className="premium-container relative z-10 flex min-h-[540px] items-center justify-center text-center text-white">
          <div className="max-w-4xl">
            <p className="text-4xl font-semibold leading-tight sm:text-6xl">
              "We aim to honour God through how we play, how we coach, and how we serve."
            </p>
            <p className="mt-7 premium-eyebrow-light">Yakaar Football</p>
          </div>
        </div>
      </section>

      <section className="premium-container py-20">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {trainingPhotos.map((src, i) => (
            <img key={i} src={src} alt={`Training ${i + 1}`} className="h-64 w-full object-cover" />
          ))}
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-20 text-center text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-5xl font-semibold leading-tight">Apply for Training</h2>
          <p className="mt-6 text-lg leading-8 text-white/72">
            If you share our heart for seeing young people flourish through football, we'd love to hear from you. Applications for our next cohort are now open.
          </p>
          <a href="mailto:info@yaakarfootball.org?subject=Coach Development Programme Application" className="premium-button-gold mt-9">
            Apply for Training
          </a>
        </div>
      </section>
    </div>
  )
}
