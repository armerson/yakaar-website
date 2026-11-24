const recipient = 'rcuthbert@ambassadors-hope.org'
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const allowedTopics = new Set([
  'General enquiry',
  'Playing Tour',
  'Coaching Support',
  'Coach Development',
  'Work Team',
  'Sponsorship',
])

function json(body: object, status: number): Response {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  })
}

export function GET(): Response {
  return json({ error: 'Method not allowed' }, 405)
}

export async function POST(request: Request): Promise<Response> {
  if (request.headers.get('content-type')?.split(';')[0] !== 'application/json') {
    return json({ error: 'Expected JSON' }, 415)
  }

  const origin = request.headers.get('origin')
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) {
        return json({ error: 'Invalid origin' }, 403)
      }
    } catch {
      return json({ error: 'Invalid origin' }, 403)
    }
  }

  const raw = await request.text()
  if (raw.length > 10_000) return json({ error: 'Message too long' }, 413)

  let input: unknown
  try {
    input = JSON.parse(raw)
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return json({ error: 'Invalid message' }, 400)
  }

  const values = input as Record<string, unknown>
  if (typeof values.website === 'string' && values.website.trim()) {
    // A filled honeypot is treated as a successful submission without sending mail.
    return json({ ok: true }, 200)
  }

  const name = typeof values.name === 'string' ? values.name.trim() : ''
  const email = typeof values.email === 'string' ? values.email.trim() : ''
  const message = typeof values.message === 'string' ? values.message.trim() : ''
  const topic = typeof values.topic === 'string' ? values.topic : null

  if (
    name.length < 2 || name.length > 100 ||
    email.length > 254 || !emailPattern.test(email) ||
    message.length < 10 || message.length > 4000 ||
    !topic || !allowedTopics.has(topic)
  ) {
    return json({ error: 'Please check the form fields' }, 400)
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  if (process.env.CONTACT_FORM_ENABLED !== 'true' || !apiKey || !from) {
    return json({ error: 'Contact form unavailable' }, 503)
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Yakaar Football enquiry: ${topic}`,
        text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
      }),
    })
    if (!response.ok) {
      console.error('Contact delivery failed with provider status', response.status)
      return json({ error: 'Message could not be sent' }, 502)
    }
    return json({ ok: true }, 200)
  } catch {
    console.error('Contact delivery request failed')
    return json({ error: 'Message could not be sent' }, 502)
  }
}
