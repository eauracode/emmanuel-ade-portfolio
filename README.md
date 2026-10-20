# Emmanuel Ade — Portfolio

Live at https://portfolio-sigma-blush-81.vercel.app (Vercel project `portfolio`).

## Stack

Next.js 16 · React 19 · Tailwind CSS v4 · Framer Motion. Single page (`app/page.tsx`) composed from section components in `components/`.

## Editing content

- **Contact details / WhatsApp number** → `lib/site-config.ts` (single source of truth; no contact info is hardcoded in components)
- **All copy** (hero, sections, project cards) → `lib/content.ts`
- **Screenshots** → `public/screenshots/`

## Contact form (Web3Forms)

The form in the Contact section posts to [Web3Forms](https://web3forms.com) — free, no backend, submissions arrive by email.

Setup:

1. Go to https://web3forms.com and create a free access key using `emmanuelaadee@gmail.com`.
2. Put the key in `.env.local`: `NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here`
3. Add the same variable in Vercel → Project Settings → Environment Variables, then redeploy.

Until the key is set, the form gracefully falls back to showing the email address and a WhatsApp link. Spam protection: hidden `botcheck` honeypot field.

## Commands

```bash
npm run dev     # local dev server
npm run build   # production build
vercel --prod   # deploy (run from inside this folder only)
```
