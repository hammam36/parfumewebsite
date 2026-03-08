# Men Parfume Landing Page

This is a Vite-powered React.js landing page for the "Men Parfume" brand.

## Features

- Hero, Why, Product List, CTA, Social Proof, and Footer sections following AIDA principles
- Flat design using a brown color palette
- Products loaded from Contentful CMS
- CTA button opens WhatsApp with prefilled message

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

Contentful credentials are hardcoded in `src/contentful.js` per requirements.

Ensure you have network access to fetch product data from Contentful.

## Notes

- No emojis are used anywhere; icons come from Font Awesome via CDN
- Maximum of six sections to keep the page focused
- Brown palette defines the look and feel; edit `src/styles.css` for customization
