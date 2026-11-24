# Instructions for Codex agents

Read this file, README.md, docs/YAKAAR.md and docs/ROADMAP.md before substantial work. They are shared project memory for colleagues using separate Codex accounts. Treat published copy as a statement to verify, not independent proof of a current fact.

## Purpose and voice
Yakaar Football is presented as a locally led Senegalese football ministry helping young people discover and fulfil their God-given purpose through football. Preserve its distinct identity and explicit Christian ethos of service, mentorship, discipleship and sharing God's love. Do not imply that participation requires a particular belief. Write about children and communities with dignity; avoid invented stories, testimonials, results, statistics and deficit or saviour language.

The current site is in English. Develop French with a fluent Senegal-based reviewer, using natural local phrasing rather than literal translation. Keep facts, calls to action, safeguarding and financial wording equivalent in both languages. Do not publish unreviewed machine translation.

## Decision authority
The Senegal-based team may independently maintain verified news, results, events, programme details, approved photographs, translations, accessibility, minor design improvements and ordinary bug fixes. Local ownership of routine updates is a deliberate handover goal.

Obtain explicit approval from the designated Yakaar/Ambassadors Hope organisational owner **before merging or publishing** changes to mission, vision, Christian position, organisational or legal relationships, major programme commitments, safeguarding policy, financial figures or pricing, donation destination or payment flow, fundraising targets, major branding or redesign, hosting/domain settings, security, access controls or new personal-data collection. Where authority is unclear, identify the authorised owner; do not guess. Document significant approval in the normal review process without putting private correspondence here. GitHub access and branch protection should enforce the agreed governance where configured.

The handover owner has specified `rcuthbert@ambassadors-hope.org` for current public email links. A `rcuthbert@yakaar.org` forwarding address is only a proposal until the domain owner configures and tests it. Changing a contact address requires confirming delivery and review by the contact owner; changing a payment recipient remains a separate financial approval.

## Safeguarding, privacy and media
Use authentic images only with permission for the intended public use, including appropriate parent or guardian consent for minors and safeguarding review. Do not assume a photo already in the repository has consent for a new context. Avoid unnecessary names, locations and identifying details about children. If permission is unclear, omit the image or story and ask the safeguarding lead privately. Keep consent records, case notes, donor information, personal contacts and credentials out of the public repository and issue tracker. Write meaningful alt text for informative images; use empty alt text for decoration. Compress photos and keep text over images legible on phones and slower connections.

## Development and review
Preserve the React, TypeScript, Vite, React Router and Tailwind structure unless a larger technical change is approved. Content lives mainly in src/pages/, navigation and footer in src/components/, styles in src/index.css, images in public/images/. Check claims repeated across pages. Check narrow mobile and desktop widths, keyboard use, visible focus, contrast, links, images and alt text. Run `npm run lint`, `npm run test` and `npm run build`, then inspect changed routes in a browser. Use a feature branch and hosted preview if available; verify the actual production branch and deployment connection before assuming merge publishes. Keep contact delivery disabled until the inbox, privacy controls, provider and hosted end-to-end test are approved. The giving page is a reviewable placeholder, not a payment service. Update these docs when decisions are made, recording reason, date and authorised role without private information.
