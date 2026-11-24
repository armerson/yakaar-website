import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

const opportunities = [
  {
    title: 'Playing Tours',
    desc: 'Bring a team to Senegal to play, serve, and connect. An unforgettable experience that blesses both visitors and our local community.',
    cta: 'Enquire About a Tour',
    link: '/contact?topic=Playing%20Tour',
  },
  {
    title: 'Coaching Support',
    desc: 'Use your football experience to mentor and develop players. Whether for a week or a season, your contribution makes a real difference.',
    cta: 'Offer Coaching Support',
    link: '/contact?topic=Coaching%20Support',
  },
  {
    title: 'Work Teams',
    desc: 'Help improve our facilities and support practical projects. Skilled and unskilled volunteers are both welcome and needed.',
    cta: 'Join a Work Team',
    link: '/contact?topic=Work%20Team',
  },
  {
    title: 'Sponsorship',
    desc: 'Support players, programmes, and facility development for as little as £10 per month.',
    cta: 'Sponsor a Player',
    link: '/give?purpose=player',
  },
]

const communityPhotos = [
  '/images/photo-01.jpg',
  '/images/photo-22.jpg',
  '/images/photo-04.jpg',
  '/images/photo-07.jpg',
  '/images/photo-13.jpg',
  '/images/photo-26.jpg',
]

export default function GetInvolved() {
  return (
    <div className="premium-page">
      <section className="premium-hero">
        <img src="/images/photo-04.jpg" alt="Community" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.52)_46%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f3ea] via-[#f7f3ea]/25 to-transparent" />
        <div className="premium-hero-content">
          <div className="max-w-4xl">
            <p className="premium-eyebrow-light">Get Involved</p>
            <h1 className="mt-5 text-5xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">Join the Mission</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">
              There are many ways to be part of what God is doing through Yakaar Football.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-container py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="premium-eyebrow">Partner With Us</p>
          <h2 className="premium-heading mt-4">Many Ways to Make a Difference</h2>
          <p className="premium-copy mt-6">
            Each year we welcome teams and individuals who come alongside us to invest in young people and help strengthen our work. Together, we are seeing lives impacted and communities strengthened. If you share our heart for seeing young people flourish, we would love to partner with you.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden bg-black/15 sm:grid-cols-2 lg:grid-cols-4">
          {opportunities.map(({ title, desc, cta, link }, index) => (
            <article key={title} className="flex min-h-80 flex-col bg-[#fffaf0] p-8">
              <p className="premium-eyebrow">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-[#4a4338]">{desc}</p>
              <Link to={link} className="premium-button mt-8 w-full">{cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="premium-container grid gap-12 py-20 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <div>
          <p className="premium-eyebrow">Get in Touch</p>
          <h2 className="premium-heading mt-4">Let's Talk</h2>
          <p className="premium-copy mt-6">
            Whether you're looking to visit, partner, give, or simply find out more — we would love to hear from you. Reach out and let's start the conversation.
          </p>
          <p className="mt-8 text-[#4a4338]">Senegal, West Africa</p>
        </div>

        <div className="bg-[#171717] p-8 text-white">
          <h3 className="mb-7 text-3xl font-semibold">Send a message</h3>
          <ContactForm />
        </div>
      </section>

      <section className="premium-container pb-20">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {communityPhotos.map((src, i) => (
            <img loading="lazy" decoding="async" key={i} src={src} alt={`Community ${i + 1}`} className="h-64 w-full object-cover" />
          ))}
        </div>
      </section>
    </div>
  )
}
