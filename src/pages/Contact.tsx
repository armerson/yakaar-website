import { useSearchParams } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { isContactTopic } from '../contactTopics'

export default function Contact() {
  const [params] = useSearchParams()
  const requestedTopic = params.get('topic')
  const topic = isContactTopic(requestedTopic) ? requestedTopic : 'General enquiry'

  return (
    <div className="premium-page">
      <section className="bg-[#171717] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="premium-eyebrow-light">Get in touch</p>
          <h1 className="mt-5 text-5xl font-semibold sm:text-7xl">Contact Yakaar Football</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Ask about football, partnership, visits or supporting the work.</p>
        </div>
      </section>
      <section className="premium-container grid gap-12 py-16 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <h2 className="premium-heading">We'd love to hear from you</h2>
          <p className="premium-copy mt-6">Use the form when delivery is enabled. Please do not include private information about children.</p>
          <p className="mt-6 text-[#4a4338]">Senegal, West Africa</p>
        </div>
        <div className="bg-[#171717] p-6 text-white sm:p-9">
          <h2 className="mb-7 text-3xl font-semibold">Send a message</h2>
          <ContactForm key={topic} initialTopic={topic} />
        </div>
      </section>
    </div>
  )
}
