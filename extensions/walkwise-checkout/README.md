# WalkWise — Checkout UI Extension

Adds WalkWise-branded reassurance content to **Checkout** and the **Thank-you / Order-status** page:

- Checkout: a "60-Day Money-Back Guarantee" banner + trust line (free shipping, secure payment, therapist-recommended).
- Thank-you page: a shipping-timeline + support banner.

## Requirements

- **Shopify Plus** with **Checkout Extensibility** (extensions do not run on the legacy checkout).
- A **Shopify app** (Checkout UI extensions deploy from an app, *not* from a theme).
- **Shopify CLI** installed and authenticated.

## Why this isn't in the theme

This theme repo can't build or deploy checkout extensions — they belong to an app. This folder is a drop-in extension: put it inside an app's `extensions/` directory (or create the app around it) and deploy.

## Setup & deploy

```bash
# 1) If you don't already have an app, create one:
shopify app init            # choose "Start with Remix" or "Build a Shopify app" — any template

# 2) Copy this folder into the app:
#    <your-app>/extensions/walkwise-checkout/

# 3) From the app root, install deps and run locally:
shopify app dev             # opens a dev checkout you can preview

# 4) Ship it:
shopify app deploy
```

## Turn it on in checkout

After deploying, the block is **not** auto-placed (it uses a dynamic target so you control position):

1. Admin → **Settings → Checkout → Customize**.
2. Click **Add app block** in the section where you want it (e.g. next to the order summary or above the pay button).
3. Pick **WalkWise Checkout Reassurance** → **Save**.
4. Repeat on the **Thank-you** and **Order status** pages if desired.

## Matching the green / Poppins look

Checkout UI extensions **inherit the checkout's design tokens** — they intentionally can't set their own colors/fonts. To make checkout match the landing page, also set the branding in the **Checkout editor**:

- Accent / primary button: `#00a308` (hover `#008a07`)
- Text: `#252525` · Background: `#ffffff`
- Typography: **Poppins**
- Buttons: solid, ~10px corner radius

(That branding can also be applied programmatically via the Admin GraphQL `checkoutBrandingUpsert` mutation if you prefer a script.)

## Notes / customization

- Edit the copy in `src/Checkout.jsx` and `src/ThankYou.jsx`.
- Available components live in `@shopify/ui-extensions-react/checkout` (Banner, BlockStack, InlineLayout, Text, Icon, Image, etc.).
- Keep the package versions (`2025.7.x`) aligned with `api_version` in `shopify.extension.toml`.