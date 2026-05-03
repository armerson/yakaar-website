import { Link } from 'react-router-dom'

const galleryImages = [
  '/images/photo-06.jpg',
  '/images/photo-22.jpg',
  '/images/photo-27.jpg',
  '/images/photo-33.jpg',
  '/images/photo-01.jpg',
  '/images/photo-03.jpg',
  '/images/photo-08.jpg',
  '/images/photo-13.jpg',
  '/images/photo-17.jpg',
  '/images/photo-28.jpg',
  '/images/photo-31.jpg',
  '/images/photo-34.jpg',
]

const stats = [
  { value: '200+', label: 'Kids weekly' },
  { value: '4', label: 'Academies' },
  { value: '4', label: 'Schools reached' },
  { value: '50+', label: 'Coaches trained' },
  { value: '3', label: 'Tournaments per year' },
]

const programmes = [
  { title: 'Youth Academy', desc: 'Weekly coaching, development, competition, and mentorship for players of all levels.', photo: '/images/photo-06.jpg' },
  { title: 'Schools Outreach', desc: 'Using football to engage students, build positive values, and encourage participation.', photo: '/images/photo-09.jpg' },
  { title: 'Camps & Tournaments', desc: 'Memorable experiences combining fun, challenge, teamwork, and personal growth.', photo: '/images/photo-27.jpg' },
  { title: 'Partner Academies', desc: 'We work alongside three partner academies, multiplying impact across Senegal.', photo: '/images/photo-22.jpg' },
]

export default function Home() {
  return (
    <div className="premium-page">
      <section className="premium-hero">
        <img
          src="/images/photo-11.jpg"
          alt="Yakaar Football players"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.5)_44%,rgba(0,0,0,0.1)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f3ea] via-[#f7f3ea]/25 to-transparent" />
        <div className="premium-hero-content">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-3 premium-eyebrow-light">
              <span className="h-px w-12 bg-[#f4d35e]" />
              Yakaar Football
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              Football with Purpose
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              Helping young people in Senegal discover and fulfil their God-given purpose through football.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/sponsor" className="premium-button-gold">
              Sponsor a Player
            </Link>
            <Link to="/get-involved" className="premium-button-outline border-white/65 text-white hover:bg-white hover:text-black">
              Get Involved
            </Link>
            <Link to="/hope-football-centre" className="premium-button-outline border-white/65 text-white hover:bg-white hover:text-black">
              Support the Mission
            </Link>
          </div>
        </div>
      </section>

      <section className="premium-container py-14">
        <div className="grid grid-cols-2 gap-px overflow-hidden bg-black/15 md:grid-cols-5">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-[#f7f3ea] p-6 text-center">
              <div className="text-4xl font-semibold text-[#a34a28]">{value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4a4338]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="premium-container grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="premium-eyebrow">Who We Are</p>
          <h2 className="premium-heading mt-4">Transforming Lives Through Football</h2>
          <p className="premium-copy mt-6">
            Yakaar Football exists to help young people discover and fulfil their God-given purpose and potential through the game of football. We believe football is far more than a sport — it is a powerful platform to inspire, develop, and guide the next generation both on and off the pitch.
          </p>
          <p className="mt-5 leading-8 text-[#4a4338]">
            Through coaching, mentorship, discipleship, and community outreach, we create environments where young people can grow in skill, character, confidence, and faith.
          </p>
          <Link to="/about" className="premium-button mt-9">
            Our Story
          </Link>
        </div>
        <div className="grid min-h-[560px] grid-cols-2 gap-3">
          <img src="/images/photo-22.jpg" alt="Community outreach" className="col-span-2 h-72 w-full object-cover" />
          <img src="/images/photo-06.jpg" alt="Player training" className="h-full min-h-64 w-full object-cover" />
          <img src="/images/photo-33.jpg" alt="Match action" className="h-full min-h-64 w-full object-cover" />
        </div>
      </section>

      <section className="py-20">
        <div className="premium-container mb-10">
          <p className="premium-eyebrow">What We Do</p>
          <h2 className="premium-heading mt-4">Our Programmes</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {programmes.map(({ title, desc, photo }, index) => (
            <article key={title} className="group relative min-h-[520px] overflow-hidden">
              <img src={photo} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/24 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <p className="premium-eyebrow-light">0{index + 1}</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/80">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative min-h-[560px] overflow-hidden">
        <img src="/images/photo-27.jpg" alt="Match action" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/35 to-transparent" />
        <div className="premium-container relative z-10 flex min-h-[560px] items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-semibold leading-none sm:text-6xl">
              Developing Players.<br />Building Character.<br />Inspiring Purpose.
            </h2>
            <Link to="/football-club" className="premium-button-gold mt-8">
              The Football Club
            </Link>
          </div>
        </div>
      </section>

      <section className="premium-container grid gap-12 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="relative min-h-[560px] overflow-hidden bg-black">
          <img src="/images/photo-11.jpg" alt="Academy players" className="absolute inset-0 h-full w-full object-cover object-top" />
          <div className="absolute bottom-0 right-0 bg-[#f4d35e] px-8 py-6 text-black">
            <div className="text-5xl font-semibold">£10</div>
            <div className="text-xs font-bold uppercase tracking-[0.18em]">per month</div>
          </div>
        </div>
        <div>
          <p className="premium-eyebrow">Sponsor a Player</p>
          <h2 className="premium-heading mt-4">Change a Young Person's Future</h2>
          <p className="premium-copy mt-6">
            It costs just <strong>£10 per month</strong> to support one academy player — providing kit, training equipment, transport, and ongoing coaching.
          </p>
          <ul className="mt-8 space-y-3 border-y border-black/15 py-6">
            {['Playing kit & training equipment', 'Transport to matches and tournaments', 'End-of-year excursions', 'Ongoing coaching and mentorship'].map(item => (
              <li key={item} className="text-[#4a4338]">{item}</li>
            ))}
          </ul>
          <Link to="/sponsor" className="premium-button mt-9">
            Become an Academy Sponsor
          </Link>
        </div>
      </section>

      <section className="relative min-h-[620px] overflow-hidden">
        <img src="/images/photo-01.jpg" alt="Football pitch" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="premium-container relative z-10 flex min-h-[620px] items-end py-16 text-white">
          <div className="max-w-3xl">
            <p className="premium-eyebrow-light">Hope Football Centre</p>
            <h2 className="mt-5 text-5xl font-semibold leading-none sm:text-7xl">Building a Space for Hope</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              We are transforming a sandy, uneven pitch into a high-quality artificial turf facility that will serve young people and the wider community for years to come.
            </p>
            <div className="mt-8 max-w-md">
              <div className="mb-3 flex justify-between text-sm font-bold uppercase tracking-[0.16em] text-white/75">
                <span>£180,000 raised</span>
                <span>£50,000 needed</span>
              </div>
              <div className="h-2 bg-white/25">
                <div className="h-2 bg-[#f4d35e]" style={{ width: '78%' }} />
              </div>
            </div>
            <Link to="/hope-football-centre" className="premium-button-gold mt-9">
              Support the Hope Football Centre
            </Link>
          </div>
        </div>
      </section>

      <section className="premium-container py-20">
        <div className="mb-10">
          <p className="premium-eyebrow">Life at Yakaar</p>
          <h2 className="premium-heading mt-4">Moments from the Pitch</h2>
        </div>
        <div className="columns-2 gap-3 space-y-3 sm:columns-3 lg:columns-4">
          {galleryImages.map((src, i) => (
            <img key={i} src={src} alt={`Yakaar Football moment ${i + 1}`} className="w-full break-inside-avoid object-cover" />
          ))}
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-20 text-center text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold sm:text-5xl">Join the Mission</h2>
          <p className="mt-6 text-lg leading-8 text-white/72">
            There are many ways to be part of what God is doing through Yakaar Football — from playing tours and coaching support to sponsorship and practical work teams.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/get-involved" className="premium-button-gold">
              Get Involved
            </Link>
            <Link to="/sponsor" className="premium-button-outline border-white/60 text-white hover:bg-white hover:text-black">
              Sponsor a Player
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
