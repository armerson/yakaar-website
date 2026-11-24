# Yakaar Football website

Source for the Yakaar Football public website. Read [AGENTS.md](AGENTS.md) for working rules, [docs/YAKAAR.md](docs/YAKAAR.md) for organisational context and [docs/ROADMAP.md](docs/ROADMAP.md) for open work.

## Stack and layout
React 19, TypeScript, Vite 8, React Router 7 and Tailwind CSS 4. `src/App.tsx` defines routes; `src/pages/` contains page copy; `src/components/` contains navigation and footer; `src/index.css` contains shared styling; `public/images/` holds the logo and photographs. The optional Vercel contact endpoint is in `api/contact.ts`. `vercel.json` rewrites client routes to `index.html`; confirm the function route works in a hosted preview before enabling the form. The repository does not establish the live host, domain or production branch. The current site is English only; French and a language switch are proposed.

## Local setup
Install a current Node.js release compatible with this Vite version and npm. Use your own GitHub and Codex accounts.

```sh
git clone https://github.com/armerson/yakaar-website.git
cd yakaar-website
npm ci
npm run dev
```

Open the local address printed by Vite, normally `http://localhost:5173/`. `npm ci` uses the committed lockfile. No environment variables are needed to review the website. Local Vite serves the frontend; it does not run the Vercel contact function. Keep the contact form disabled for ordinary local preview.

## Updating and checking
1. Pull recent changes and work on a short-lived branch. Check AGENTS.md for the approval boundary.
2. Edit the relevant TSX page or shared component. Search for repeated claims on other pages. Confirm source and date for any public number, result or programme assertion.
3. Confirm safeguarding clearance before adding an image or personal story. Keep evidence outside this public repository.
4. Run `npm run lint`, `npm run test`, `npm run build` and `npm run preview`. The build type-checks and creates ignored `dist/`. The test suite checks contact endpoint validation and delivery responses with a mocked provider; it sends no email.
5. Visually check affected routes on narrow mobile and desktop widths. Test keyboard navigation, images, alt text, links and contact or giving actions. `npm run preview` is a local built-site preview, not a hosted preview.

Do not commit `node_modules/`, `dist/`, secrets or personal records.

## Publishing
The handover discussion favoured a GitHub branch and pull request, a hosted preview for review, and automatic production publishing after merge. Ordinary verified updates should be manageable by the Senegal-based team; significant organisational, financial and technical changes need the designated owner's approval. **Confirmed on 24 November 2026:** a push to a feature branch created a Vercel preview; merging PR #1 into `main` automatically built and assigned a production deployment to `yakaarfc.org` and `www.yakaarfc.org`. Both domains returned the new pages, and the contact endpoint responded with its expected disabled status. Recheck branch protection, account roles and domain routing during handover and after any hosting change. Keep hosting, DNS and donation administration with authorised owners; do not share accounts.

For each change, create a branch, run the checks above and open a pull request describing the content source, visual checks and any approval needed. Inspect the hosted preview on mobile and desktop and check key actions. After the appropriate reviewer approves, merge using the repository's agreed process; confirm the production deployment and affected routes. If previews or automatic production publishing are not configured, ask the technical owner to establish and document the actual release process before publishing. Roll back a faulty release using the hosting provider's approved rollback process and record what happened.

## Contact and giving
The `/contact` page and Get Involved page contain a real form UI backed by an optional Vercel function. **Form delivery is disabled by default**; the page says this and provides `rcuthbert@ambassadors-hope.org` as a fallback. No email provider, credentials or sender domain are configured by this repository. Do not tell visitors a message was sent unless the provider confirms it.

To enable the form, the authorised contact, privacy and technical owners must confirm the inbox and response process; approve the data notice, retention and spam/rate-limit approach; provision a verified sender domain and Resend account; and add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and `CONTACT_FORM_ENABLED=true` as server environment variables in the hosting project. Set `VITE_CONTACT_FORM_ENABLED=true` for the Vite build only after the server is ready. Test a hosted preview end to end, including an actual delivery, failure path and mobile display, then approve production activation. Redeploy after changing build-time variables. Keep all secret values out of Git and Codex chats. A `rcuthbert@yakaar.org` forwarding address remains **proposed**, not configured or verified; switch public use only after domain-owner approval and delivery tests.

Sponsorship and other giving buttons now lead to `/give`, with purpose-aware text and separate UK, other-country and Senegal sections. **No payment option or checkout is active.** The user asked for a reviewable page while payment accounts are absent. Before enabling payments, the financial owner must approve the legal recipient, local and international methods, currencies, recurring sponsorship terms, fees, refunds, donor communications and any tax wording. Verify each destination with an actual test transaction. Do not present an enquiry as a completed donation or insert a personal payment account.

The site publishes £10/month sponsorship, £180,000 raised toward a £230,000 pitch goal, and impact numbers. These are **published claims, not independently verified by the repository**. Obtain dated sources and owner approval before updating or repeating them. See docs/ROADMAP.md.
