# Yakaar website roadmap and decisions

**Verify** = an existing claim or operational assumption needs evidence. **Proposed** = an idea, not approved work. No item below becomes approved merely by appearing here. Priorities are suggestions. Record future approvals with date, authorised role and reason, without private details.

## Verify before handover or new fundraising copy
1. **Financial figures and terms:** Reconcile the £10/month offer and what it funds, £180,000 raised, £230,000 goal, £50,000 remaining and progress display. Check currency, source date, restricted funds, accounting basis and update cadence. These claims recur in `Home.tsx`, `SponsorPlayer.tsx` and `HopeFootballCentre.tsx`. Financial owner approval required.
2. **Impact and programmes:** Source the 200+ weekly children, four academies, four schools, 50+ coaches, three tournaments yearly, three partner academies, coach training blocks and “applications open” line. Assign a local content owner and review date.
3. **Contact and donations:** At the handover owner's request, the fallback email is `rcuthbert@ambassadors-hope.org`. Confirm it receives messages and who answers enquiries and legally receives funds. A form UI and optional delivery function are written but disabled; an email provider, verified sending domain, privacy wording, retention, spam/rate-limit controls and hosted end-to-end test remain to be approved. The `/give` page separates UK, international and Senegal audiences but has no live payment methods. Confirm legal recipient, processors, currencies, fees, recurring terms, refunds, tax wording and reconciliation before activating any route. **Proposed:** set up `rcuthbert@yakaar.org` to forward to the approved inbox, with domain-owner approval and delivery tests before using it publicly. Do not insert a new payment destination without authorisation.
4. **Organisation:** Approve exact wording for Yakaar's identity, local leadership and relationship with Ambassadors Hope. Verify legal, charity and tax statements separately.
5. **Media:** Review images in `public/images/` for publication permission and child safeguarding consent. Store the evidence privately; remove or replace any unsupported public image.
6. **Publishing:** On 24 November 2026, the Vercel project showed an existing production deployment linked to GitHub `armerson/yakaar-website` at the initial `main` commit, and `yakaarfc.org` and `www.yakaarfc.org` were configured and verified. Confirm preview creation, live domain routing, production branch rules, permissions and branch protection during this release. The earlier discussion proposed automatic publication on merge; observe and document whether it actually occurs.

## Proposed near-term improvements
- **French and English:** Build a complete bilingual experience with a clear, keyboard-accessible language switch, Senegal-based French review and an update checklist. Reason: local ownership and communication with Senegalese and international audiences. Avoid partial translation of financial or safeguarding statements.
- **Mobile access and speed:** Continue checking small screens, keyboard navigation, focus, contrast and alt text; compress/resize photography and consider responsive image sizes. Below-the-fold images now use lazy loading, but source images still total about 13 MB. Reason: the image-led design must work on phones and slower connections.
- **Contact:** Complete the real form setup and enable it only after approving the receiving inbox, privacy notice, retention, sender/provider, spam/rate-limit approach and failure handling. The former mailto form looked like in-page submission but depended on a visitor's email app and gave no server acknowledgement. The current form is visibly disabled until delivery works, with an email fallback. New personal-data collection needs technical/privacy approval.
- **Brand and metadata:** The generic browser title and Vite favicon reference have been replaced using the existing Yakaar logo. **Proposed:** add route-specific titles, descriptions and an approved purpose-made favicon. Reason: search results and sharing previews should identify each page clearly.
- **Content maintenance:** Centralise repeated numbers and fundraising copy with source/date/owner metadata. Reason: TSX copies can drift; use a lightweight solution before considering a CMS.
- **Quality checks:** The new endpoint has a small test suite using a mocked provider. Add useful route/link/accessibility checks when the content workflow stabilises.
- **Dependency review:** During this handover check, `npm ci` reported 20 dependency advisories (1 low, 10 moderate, 9 high). Review the advisory details and applicable fixes with a technical owner before upgrading packages; do not apply an automatic major upgrade without testing.

## Proposed later work
- Locally written news, match results, events and programme stories if the team can keep them current, using verified claims and approved photos.
- Turn the reviewable regional giving page into approved payment routes only after recipient, accounting, processor, donor communication, refunds and tax wording are agreed. Confirm whether £10/month is recurring and what it covers. Current buttons lead to a page that clearly states payments are pending.
- Dated Hope Football Centre status, permissions, budget and progress evidence. Do not depict an aspiration as a completed or guaranteed facility.
- An Ambassadors Hope GitHub organisation for long-term repository ownership and ministry-specific roles if governance approves. This was a handover idea, not an existing arrangement.

## Why earlier choices were made
| Direction | Reason from project work | Boundary |
| --- | --- | --- |
| Keep the mission copy during the visual redesign | The request was for a premium photographic presentation using Yakaar's existing content, not replacement concept copy. | Claims still need verification. |
| Keep the small React/Vite structure | It supported quick visual changes and simple static deployment. | Add a CMS or server only for a demonstrated need and with technical approval. |
| Give Senegal routine editorial control | The handover aims for genuine local ownership. | Major organisational, financial and technical choices need authorised approval. |
| Use branches and previews before publishing | Both Codex users can share history and review changes before they reach visitors. | Hosting connection and branch rules remain to be verified. |
| Show regional giving options before selecting processors | The user requested a reviewable page while there are no payment accounts. | No route can take money until recipients, terms, methods and tests are approved. |
| Keep form delivery off until setup is complete | A disabled form with explicit status avoids suggesting that an unconfigured endpoint delivered a message. | Provider, sender, privacy and spam controls require approval and a hosted delivery test. |
