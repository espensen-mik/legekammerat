# Temporary launch mode

This project supports two site modes controlled by a single switch:

```ts
// src/config/site-mode.ts
export const SITE_MODE = "launch" | "full";
```

## Current mode: `launch`

The root URL `/` renders a one-page commercial partnership site:

- No visible navigation menu (logo + “Book en snak” only)
- All CTAs open the contact form popup via `#kontakt`
- “Læs mere om LykkeLiga” links to https://lykkeliga.dk

All existing subpages (`/firmafan`, `/partnerskaber`, `/cases`, `/om`, etc.) remain in the codebase and are unchanged.

## Preserved full homepage

The original multi-page homepage is preserved in:

```
src/components/full-homepage.tsx
```

Original header, footer, hero, and engagement components are also unchanged:

- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`
- `src/components/hero.tsx`
- `src/components/engagement-paths.tsx`

## Restore the full site later

1. Open `src/config/site-mode.ts`
2. Change `SITE_MODE` from `"launch"` to `"full"`
3. Redeploy or restart the dev server

That restores the original homepage, full navigation, and footer on `/`.

## Contact form configuration

The launch contact form posts to `/api/contact`.

To enable email delivery, set these environment variables:

```env
RESEND_API_KEY=
CONTACT_EMAIL=
CONTACT_FROM_EMAIL=
```

Until all three variables are set, the form UI works but submissions return a clear configuration error. Visitors can still reach the team at info@lykkeliga.dk or 53 80 30 17.

`CONTACT_FROM_EMAIL` must use the verified Resend domain `forms.lykkeliga.dk`.
