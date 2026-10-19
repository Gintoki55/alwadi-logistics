# Al-Wadi Logistics — Website (Next.js)

## Run locally
```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Edit content
- All text (services, steps, phone, email, MC/DOT numbers): `src/lib/content.ts`
- Brand colors: `src/app/globals.css` → `@theme`
- Images / logo: `public/images/`

## Before going live
1. Replace the phone number and MC / USDOT numbers in `src/lib/content.ts`.
2. The contact form currently opens the visitor's email app (mailto). To receive
   submissions directly, connect it to Formspree, Resend or an API route.
3. Deploy: push to GitHub and import the repo on vercel.com (free tier works).
