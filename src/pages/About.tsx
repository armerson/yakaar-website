const team = [
  {
    name: 'Robert Cuthbert',
    role: 'Founder & Director',
    bio: 'Robert was born and raised in Guinea-Bissau and attended boarding school in Senegal. He moved to Senegal with Kyla in 2017, bringing a deep love for the region and a passion for using football to share God\'s love and create opportunities for young people.',
    photo: '/images/photo-15.jpg',
  },
  {
    name: 'Aliou Touré',
    role: 'Admin & Finance',
    bio: 'Aliou plays a key role in the day-to-day running of the organisation, overseeing administration and finances to ensure Yakaar Football operates effectively and sustainably.',
    photo: '/images/photo-18.jpg',
  },
  {
    name: 'Emmanuel Mané',
    role: 'Academy Director',
    bio: 'Emmanuel leads the football academy, overseeing coaching, player development, and programme delivery. He is passionate about helping young people grow in skill, character, and confidence.',
    photo: '/images/photo-20.jpg',
  },
]

const galleryImages = [
  '/images/photo-04.jpg',
  '/images/photo-09.jpg',
  '/images/photo-14.jpg',
  '/images/photo-21.jpg',
  '/images/photo-25.jpg',
  '/images/photo-30.jpg',
]

const values = [
  { title: 'Community', desc: 'Rooted in Senegal, connected to a global family committed to seeing young lives transformed.' },
  { title: 'Faith', desc: 'At the heart of everything we do is a desire to glorify God through how we play, coach, and serve.' },
  { title: 'Purpose', desc: 'We help every player discover their God-given potential — on and off the pitch.' },
]

export default function About() {
  return (
    <div className="premium-page">
      <section className="premium-hero">
        <img src="/images/photo-22.jpg" alt="Yakaar community" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.5)_44%,rgba(0,0,0,0.1)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f3ea] via-[#f7f3ea]/25 to-transparent" />
        <div className="premium-hero-content">
          <div className="max-w-4xl">
            <p className="premium-eyebrow-light">Our Story</p>
            <h1 className="mt-5 text-5xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">
              About Yakaar Football
            </h1>
          </div>
        </div>
      </section>

      <section className="premium-container grid gap-12 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="premium-eyebrow">Our Story</p>
          <h2 className="premium-heading mt-4">Founded in Faith, Rooted in Community</h2>
          <div className="mt-6 space-y-5 leading-8 text-[#4a4338]">
            <p>Yakaar Football was founded by Robert and Kyla Cuthbert, whose heart for Africa and passion for football have shaped the vision and mission of the organisation. Robert was born and raised in Guinea-Bissau and spent part of his childhood attending boarding school in Senegal — giving him a deep love for the region and its people.</p>
            <p>From a young age, he developed a passion for football and recognised its unique ability to bring people together, break down barriers, and create opportunities. Together, Robert and Kyla moved to Senegal in 2017, where they have been serving ever since.</p>
            <p>What began as a simple desire to use football to connect with young people has grown into a thriving ministry reaching children and communities through sport.</p>
            <p>At the heart of Yakaar Football is a clear vision: to share God's love in a practical and meaningful way while creating opportunities for young people to discover and fulfil their potential. We believe every child deserves the chance to play, to grow, and to dream.</p>
          </div>
        </div>
        <div className="grid min-h-[560px] grid-cols-2 gap-3">
          <img src="/images/photo-04.jpg" alt="Yakaar players" className="col-span-2 h-72 w-full object-cover" />
          <img src="/images/photo-09.jpg" alt="Community" className="h-full min-h-64 w-full object-cover" />
          <img src="/images/photo-14.jpg" alt="Training" className="h-full min-h-64 w-full object-cover" />
        </div>
      </section>

      <section className="bg-[#171717] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="premium-eyebrow-light">Our Vision</p>
          <h2 className="mt-5 text-5xl font-semibold leading-tight">More Than Football</h2>
          <p className="mt-6 text-lg leading-8 text-white/72">
            We believe football is a powerful platform to inspire, develop, and guide the next generation — both on and off the pitch. Through coaching, mentorship, discipleship, and community outreach, we create environments where young people grow in skill, character, confidence, and faith.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-px overflow-hidden bg-white/12 sm:grid-cols-3">
          {values.map(({ title, desc }) => (
            <article key={title} className="bg-[#171717] p-8">
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/68">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="premium-container py-20">
        <div className="mb-12 max-w-2xl">
          <p className="premium-eyebrow">Meet the Team</p>
          <h2 className="premium-heading mt-4">The People Behind Yakaar</h2>
          <p className="mt-5 leading-8 text-[#4a4338]">
            A dedicated local team who share a passion for seeing young people grow, thrive, and discover their God-given potential.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map(({ name, role, bio, photo }) => (
            <article key={name} className="bg-[#fffaf0]">
              <img src={photo} alt={name} className="h-72 w-full object-cover object-top" />
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a34a28]">{role}</p>
                <h3 className="mt-2 text-2xl font-semibold">{name}</h3>
                <p className="mt-4 text-sm leading-6 text-[#4a4338]">{bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative min-h-[560px] overflow-hidden">
        <img src="/images/photo-04.jpg" alt="Yakaar impact" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/62" />
        <div className="premium-container relative z-10 flex min-h-[560px] items-center justify-center text-center text-white">
          <div className="max-w-3xl">
            <p className="premium-eyebrow-light">Wider Impact</p>
            <h2 className="mt-5 text-5xl font-semibold leading-tight">Beyond Our Own Programmes</h2>
            <p className="mt-6 text-lg leading-8 text-white/78">
              Beyond our local work, we equip and train others to use football as a tool for transformation. We currently work alongside three partner academies, helping build a growing network of leaders committed to bringing hope, purpose, and opportunity to young people through sport.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-container py-20">
        <div className="columns-2 gap-3 space-y-3 sm:columns-3">
          {galleryImages.map((src, i) => (
            <img key={i} src={src} alt={`Yakaar ${i + 1}`} className="w-full break-inside-avoid object-cover" />
          ))}
        </div>
      </section>
    </div>
  )
}
