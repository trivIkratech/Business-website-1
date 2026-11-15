# The Verdant Estate — Premium Real Estate Landing Website

A modern, elegant, responsive, high-performance single-page luxury real estate project website crafted with modern architectural aesthetics.

---

## 1. Technology Stack

- **Semantic HTML5** for accessible, clean document structure.
- **CSS3** with custom properties, CSS Grid, Flexbox, and `clamp()` typography.
- **Bootstrap 5.3.3** for the responsive 12-column layout grid.
- **Vanilla JavaScript (ES6+)** for reactive components, tab switching, form validation, and lightbox interactions.
- **Bootstrap Icons 1.11.3** & **Google Fonts** (`Cormorant Garamond` & `Manrope`).
- **No external heavy frameworks**: Zero React, Next.js, Tailwind, or jQuery.

---

## 2. Design System & Tokens

| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| **Primary Deep Teal** | `#182D32` | Header monograms, hero background, highlights section, dark buttons, cards |
| **Champagne Gold** | `#C5A572` | Eyebrow accents, icons, hover borders, primary buttons |
| **Ivory Background** | `#F6F4EF` | Alternating section backgrounds, subtle contrast |
| **Pure White** | `#FFFFFF` | Cards, modals, light surfaces |
| **Charcoal** | `#303638` | Headings, body text |
| **Heading Font** | `'Cormorant Garamond', Georgia, serif` | Editorial H1–H4 typography |
| **Body Font** | `'Manrope', sans-serif` | Highly readable body and navigation |

---

## 3. Website Architecture (13 Ordered Sections)

1. **Header**: Brand monogram, sticky navigation, active section highlights, phone link, and "Enquire Now" CTA.
2. **Hero Section**: Architectural visual, gold shimmer tagline, starting price strip, "Enquire Now" and "Download Brochure" CTAs, and trust ribbon.
3. **Project Overview**: Editorial asymmetric composition with overview imagery, legacy badge, and key selling specifications.
4. **Project Highlights**: Deep teal statistical metrics (12 Acres, 4 Towers, 380 Residences, 78% Open Space, 2-4 BHK, Dec 2026 Possession).
5. **Residences & Configurations**: Interactive cards for 2 BHK Grande, 3 BHK Royal, and 4 BHK Presidential with carpet areas, price tags, and plan preview links.
6. **Amenities**: 6 image-led cards with gradient hover transitions + bottom club amenities banner.
7. **Master Plan & Floor Plans**: High-resolution vector SVG campus blueprint and individual floor layouts with zoom-to-lightbox integration.
8. **Gallery**: Filterable responsive image grid (Exterior, Interior, Amenities, Lifestyle) with keyboard-accessible full-screen Lightbox.
9. **Location & Connectivity**: Experience centre address, 5 dynamic distance categories (Tech Hubs, Metro, Schools, Hospitals, Retail), and live interactive Google Maps embed.
10. **Developer Profile**: 26+ years legacy overview, 18.5M sq.ft. track record, and IGBC Platinum certification badge.
11. **FAQ Section**: Accessible accordion answering top homebuyer questions regarding RERA, possession, loans, sustainability, and customizations.
12. **Enquiry Section**: Comprehensive lead generation form with real-time Indian mobile (+91) validation, email check, consent checkbox, and transparent feedback.
13. **Footer**: Karnataka RERA Registration Number (`PRM/KA/RERA/1251/446/PR/220324/004812`), navigation links, disclaimer, and copyright.

---

## 4. Centralized Content Configuration

All project details, copy, pricing, configurations, amenities, FAQs, and developer credentials are centralized in:
`js/project-data.js`

To customize this website for any new real estate development, simply edit `js/project-data.js` and all dynamic sections (pricing, highlights, connectivity points, FAQs) will update seamlessly.

---

## 5. Local Setup & Execution

Run via any standard static file server:

### Using Python:
```bash
python3 -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

### Using Node.js `npx serve`:
```bash
npx serve .
```

---

## 6. Real Assets Included

- `assets/documents/brochure.pdf`: Valid project brochure ready for download.
- `assets/images/floor-plans/master-plan.svg`: Detailed campus master blueprint.
- `assets/images/floor-plans/2bhk-plan.svg`: 2 BHK architectural floor layout.
- `assets/images/floor-plans/3bhk-plan.svg`: 3 BHK architectural floor layout.
- `assets/images/floor-plans/4bhk-plan.svg`: 4 BHK architectural floor layout.

