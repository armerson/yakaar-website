import test from 'node:test'
import assert from 'node:assert/strict'
import { POST } from '../api/contact.ts'
import { contactTopics } from '../src/contactTopics.ts'

const url = 'https://yakaar.example/api/contact'
const valid = {
  name: 'Example Visitor',
  email: 'visitor@example.com',
  topic: 'Sponsorship',
  message: 'I would like to ask about sponsorship.',
  website: '',
}

function request(body, headers = {}) {
  return new Request(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: 'https://yakaar.example', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

test('contact delivery validates input and never reports delivery without a provider', async t => {
  const originalFetch = globalThis.fetch
  const originalEnv = {
    CONTACT_FORM_ENABLED: process.env.CONTACT_FORM_ENABLED,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  }
  try {
    delete process.env.CONTACT_FORM_ENABLED
    delete process.env.CONTACT_FROM_EMAIL
    delete process.env.RESEND_API_KEY
    globalThis.fetch = () => { throw new Error('Unexpected network request') }

    await t.test('rejects malformed origin', async () => {
      assert.equal((await POST(request(valid, { origin: 'not-a-url' }))).status, 403)
    })
    await t.test('rejects a different origin', async () => {
      assert.equal((await POST(request(valid, { origin: 'https://elsewhere.example' }))).status, 403)
    })
    await t.test('rejects invalid JSON', async () => {
      assert.equal((await POST(request('{'))).status, 400)
    })
    await t.test('rejects invalid topic', async () => {
      assert.equal((await POST(request({ ...valid, topic: 'Unknown' }))).status, 400)
    })
    await t.test('accepts every topic offered by the form', async () => {
      for (const topic of contactTopics) {
        assert.equal((await POST(request({ ...valid, topic }))).status, 503)
      }
    })
    await t.test('returns unavailable when delivery is not configured', async () => {
      assert.equal((await POST(request(valid))).status, 503)
    })
    await t.test('does not send honeypot submissions', async () => {
      assert.equal((await POST(request({ ...valid, website: 'spam.example' }))).status, 200)
    })

    process.env.CONTACT_FORM_ENABLED = 'true'
    process.env.CONTACT_FROM_EMAIL = 'Yakaar <contact@yakaar.example>'
    process.env.RESEND_API_KEY = 'test-only'
    let sent
    globalThis.fetch = async (endpoint, options) => {
      assert.equal(endpoint, 'https://api.resend.com/emails')
      sent = JSON.parse(options.body)
      return new Response(null, { status: 200 })
    }
    await t.test('sends to the specified contact inbox', async () => {
      assert.equal((await POST(request(valid))).status, 200)
      assert.deepEqual(sent.to, ['rcuthbert@ambassadors-hope.org'])
      assert.equal(sent.reply_to, valid.email)
      assert.match(sent.text, /I would like to ask about sponsorship/)
    })
    await t.test('does not claim success on provider failure', async () => {
      globalThis.fetch = async () => new Response(null, { status: 500 })
      assert.equal((await POST(request(valid))).status, 502)
    })
  } finally {
    globalThis.fetch = originalFetch
    for (const [name, value] of Object.entries(originalEnv)) {
      if (value === undefined) delete process.env[name]
      else process.env[name] = value
    }
  }
})
