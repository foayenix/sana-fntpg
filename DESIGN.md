# Design References

## Landing Page Inspirations

### Top 40 SaaS Landing Pages
**Figma Link:** [YOUR_FIGMA_LINK_HERE]

This Figma file contains curated examples of top-performing SaaS landing pages. Use these as inspiration for:

- Hero section layouts and messaging
- Feature presentation patterns
- Social proof and testimonial designs
- Call-to-action (CTA) placement and styling
- Pricing table designs
- Footer layouts and navigation patterns
- Typography hierarchy
- Color schemes and visual treatments
- Micro-interactions and animations

## Current Landing Pages

### Home Page (`src/app/page.tsx`)
- Hero with dual path selector (Clients vs Practitioners)
- Trust indicators and social proof
- Practitioner testimonials
- Trust badges section

### Practitioner Page (`src/app/practitioner/page.tsx`)
- Pain points section (6 key challenges)
- Infrastructure messaging
- Journey steps (5-step onboarding)
- Pricing tiers (Free, Professional, Practice)
- FAQ section

### Wellness Page (`src/app/wellness/page.tsx`)
- Product scanner feature showcase
- Client pain points
- Value proposition cards
- SANA in everyday life section

## Design Patterns to Consider

When upgrading the landing pages with inspiration from the Figma file, consider:

1. **Hero Sections**
   - Headline clarity and impact
   - Subheadline supporting the main message
   - Visual hierarchy
   - CTA prominence

2. **Feature Sections**
   - Icon + headline + description pattern
   - Screenshot/mockup placement
   - Feature comparison tables

3. **Social Proof**
   - Testimonial card layouts
   - Logo walls
   - Stat counters
   - Case study highlights

4. **Pricing Tables**
   - Tier comparison clarity
   - Feature list presentation
   - CTA differentiation (primary vs secondary)
   - Popular/recommended badges

5. **Navigation**
   - Sticky headers
   - Mobile menu patterns
   - CTA buttons in nav

## Brand Guidelines

### Colors
- Primary: `#4A90A4` (teal/blue)
- Secondary: `#6B9080` (sage green)
- Dark: `#2C3333` (charcoal)
- Light: `#FAF9F6` (off-white)
- Neutral: `#5F6368` (gray)

### Typography
- System font stack (Geist)
- Hierarchy: 3xl-7xl for headlines, xl-2xl for subheads, base-lg for body

### Components
- Rounded corners: `rounded-2xl`, `rounded-full` for buttons
- Shadows: subtle elevation with `shadow-lg`, `shadow-xl`
- Gradients: used in hero backgrounds and feature cards

## Implementation Notes

When applying inspiration from the Figma file:
1. Maintain brand consistency (colors, typography, tone)
2. Preserve existing functionality (forms, navigation, CTAs)
3. Ensure mobile responsiveness
4. Keep accessibility in mind (contrast, touch targets)
5. Test performance impact of new animations/images
