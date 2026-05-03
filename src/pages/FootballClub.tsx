import { Link } from 'react-router-dom'

const programmes = [
  {
    title: 'Youth Academy',
    desc: 'Weekly coaching sessions, structured development pathways, competitive fixtures, and ongoing mentorship. Whether just starting out or pursuing excellence, every player is supported.',
    photo: '/images/photo-06.jpg',
  },
  {
    title: 'Schools Outreach',
    desc: 'Using football to engage students, encourage participation, build positive values, and create a sense of belonging within the school community.',
    photo: '/images/photo-09.jpg',
  },
  {
    title: 'Camps & Tournaments',
    desc: 'Seasonal holiday camps and tournaments that combine fun, challenge, teamwork, and personal growth — creating memorable experiences for every player.',
    photo: '/images/photo-27.jpg',
  },
]

const qualities = ['Confidence', 'Technical ability', 'Character', 'Leadership', 'Faith']

const actionPhotos = [
  '/images/photo-33.jpg',
  '/images/photo-06.jpg',
  '/images/photo-27.jpg',
  '/images/photo-07.jpg',
  '/images/photo-10.jpg',
  '/images/photo-16.jpg',
  '/images/photo-23.jpg',
  '/images/photo-29.jpg',
]

export default function FootballClub() {
  return (
    <div className="premium-page">
      <section className="premium-hero">
        <img src="/images/photo-33.jpg" alt="Match action" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.48)_45%,rgba(0,0,0,0.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f3ea] via-[#f7f3ea]/25 to-transparent" />
        <div className="premium-hero-content">
          <div className="max-w-4xl">
            <p className="premium-eyebrow-light">Yakaar Football Club</p>
            <h1 className="mt-5 text-5xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">
              Developing Players.<br />Building Character.<br />Inspiring Purpose.
            </h1>
          </div>
        </div>
      </section>

      <section className="premium-container py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="premium-eyebrow">Our Club</p>
          <h2 className="premium-heading mt-4">A Club Built on More Than Football</h2>
          <p className="premium-copy mt-6">
            Our local football programmes create opportunities for young people to play, develop their skills, compete, and grow in a supportive and encouraging environment. Whether a child is just starting out or dreaming of pursuing football at a higher level, we are committed to walking alongside them every step of the way.
          </p>
        </div>
      </section>

      <section>
        {programmes.map(({ title, desc, photo }, i) => (
          <article key={title} className="grid min-h-[560px] grid-cols-1 lg:grid-cols-2">
            <div className={i % 2 === 1 ? 'relative min-h-[420px] overflow-hidden lg:order-2' : 'relative min-h-[420px] overflow-hidden'}>
              <img src={photo} alt={title} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="flex items-center bg-[#fffaf0] px-5 py-14 sm:px-8 lg:px-16">
              <div className="max-w-xl">
                <p className="premium-eyebrow">0{i + 1}</p>
                <h3 className="mt-4 text-4xl font-semibold leading-tight">{title}</h3>
                <p className="mt-6 text-lg leading-8 text-[#4a4338]">{desc}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-[#171717] px-5 py-20 text-center text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="premium-eyebrow-light">Player Development</p>
          <h2 className="mt-5 text-5xl font-semibold leading-tight">We Help Every Player Grow In</h2>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden bg-white/15 sm:grid-cols-5">
            {qualities.map(q => (
              <div key={q} className="bg-[#171717] p-5 text-sm font-bold uppercase tracking-[0.14em] text-white/82">
                {q}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/72">
            Our desire is to see every player equipped to pursue their dreams and fulfil their God-given potential — both on and off the pitch.
          </p>
        </div>
      </section>

      <section className="premium-container py-20">
        <div className="mb-10">
          <p className="premium-eyebrow">On the Pitch</p>
          <h2 className="premium-heading mt-4">Match day, training day, every day.</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {actionPhotos.map((src, i) => (
            <img key={i} src={src} alt={`Action ${i + 1}`} className="h-56 w-full object-cover" />
          ))}
        </div>
      </section>

      <section className="relative min-h-[520px] overflow-hidden">
        <img src="/images/photo-11.jpg" alt="Academy players" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="premium-container relative z-10 flex min-h-[520px] items-center justify-center text-center text-white">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-semibold leading-tight">Support Our Players</h2>
            <p className="mt-6 text-lg leading-8 text-white/78">
              For just £10 per month, you can sponsor an academy player and help them access training, kit, and mentorship.
            </p>
            <Link to="/sponsor" className="premium-button-gold mt-9">
              Become an Academy Sponsor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
