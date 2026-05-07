# cheqout-marketing

Gated private preview at `getcheqout.com`. Static site + Vercel Edge Middleware.

## How it works

- Visitor hits any URL → middleware checks for the `cheqout_access` cookie
- No cookie / wrong value → rewrites to `/lock.html` (the marketing page is never served)
- Submits correct passcode → `/api/auth` validates against `ACCESS_PASSWORD`, sets `cheqout_access` cookie to `ACCESS_TOKEN`, redirects to `/`
- Cookie lasts 30 days, `HttpOnly`, `Secure`, `SameSite=Lax`
- All responses set `X-Robots-Tag: noindex, nofollow, noarchive` so search engines can't index even if a URL leaks

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New → Project** and import this repo.
3. Framework preset: **Other**. Leave build command and output directory blank.
4. Before deploying, add Environment Variables:
   - `ACCESS_PASSWORD` — what people will type into the lock screen
   - `ACCESS_TOKEN` — generate with `openssl rand -hex 32`
5. Deploy.
6. Add `getcheqout.com` as a custom domain on this project (Settings → Domains).
7. Remove the existing `getcheqout.com → cheqout.store` redirect in your DNS / other Vercel project.

## Local dev

```bash
npm install
cp .env.local.example .env.local
# edit .env.local with real values
npx vercel dev
```

## Updating the passcode

Change `ACCESS_PASSWORD` in Vercel env vars, redeploy. Existing logged-in users keep access via their cookie until it expires (30 days) or you also rotate `ACCESS_TOKEN`.

To invalidate ALL existing sessions (e.g., a code leaked), rotate `ACCESS_TOKEN` to a new random value and redeploy. Everyone's cookie becomes invalid.

## Files

- `index.html` — the marketing page
- `lock.html` — the access-code screen
- `middleware.ts` — gates every URL except the lock screen and `/api/auth`
- `api/auth.js` — validates the passcode, sets the cookie
- `vercel.json` — global security headers
- `package.json` — declares `@vercel/edge` dependency

## Security notes

- The page never serves to unauthenticated users. View-source on the lock screen reveals nothing about the marketing content.
- Search engines never index the page because requests without a cookie redirect to the lock screen, and even authenticated responses include `noindex` headers.
- The passcode comparison is constant-time to prevent timing attacks.
- Cookie is `HttpOnly` so client-side JS can't read or steal it.
- This is sufficient protection for "share with people I trust" while waiting on a provisional patent. It is NOT sufficient protection against a determined adversary with access to your Vercel account, your env vars, or your code repo. Treat the codebase as confidential.
