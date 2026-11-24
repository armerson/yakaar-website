export const contactTopics = [
  'General enquiry',
  'Playing Tour',
  'Coaching Support',
  'Coach Development',
  'Work Team',
  'Sponsorship',
] as const

export type ContactTopic = (typeof contactTopics)[number]

export function isContactTopic(value: string | null): value is ContactTopic {
  return contactTopics.some(topic => topic === value)
}
