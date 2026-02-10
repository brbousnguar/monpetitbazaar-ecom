# Product Requirement Document (PRD)
## Mon Petit Bazaar - E-commerce Platform

**Version:** 1.0  
**Last Updated:** February 9, 2026  
**Product Owner:** Mon Petit Bazaar Team  
**Repository:** [monpetitbazaar-ecom](https://github.com/brbousnguar/monpetitbazaar-ecom)

---

## 1. Executive Summary

Mon Petit Bazaar is a modern, responsive e-commerce web application built with React and Vite. The platform offers a curated selection of quality products including fashion accessories (Lacoste caps, Roland-Garros merchandise), electronics, and artisanal items. The site provides a seamless shopping experience with integrated cart functionality, product browsing, and customer support features.

---

## 2. Product Vision & Goals

### Vision
To create a user-friendly online boutique that offers carefully selected, quality products at attractive prices with excellent customer service.

### Goals
- ✅ Provide an intuitive product browsing and shopping experience
- ✅ Enable seamless customer communication through integrated contact forms
- ✅ Deliver comprehensive product information and customer support
- ✅ Ensure mobile-responsive design for all devices
- ✅ Maintain fast load times and optimal performance

---

## 3. Technology Stack

### Frontend
- **Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.21
- **Routing:** React Router DOM 6.22.0
- **Styling:** Tailwind CSS 3.4.1
- **Icons:** Lucide React 0.344.0
- **Image Zoom:** React Medium Image Zoom 5.1.10

### Backend/Database
- **Database:** PostgreSQL 8.18.0
- **Deployment:** Docker (Docker Compose)
- **Web Server:** Nginx

### Email Integration
- **Service:** EmailJS (@emailjs/browser)
- **Contact Email:** contact@monpetitbazaar.com

### Development Tools
- **Linter:** ESLint 8.57.0
- **Formatter:** Prettier 3.2.5
- **CSS Processing:** PostCSS 8.4.35, Autoprefixer 10.4.17

---

## 4. Features & Functionality

### 4.1 Core Shopping Features

#### 4.1.1 Product Catalog ✅ IMPLEMENTED
- **Location:** `/shop` route (ShopPage.jsx)
- **Features:**
  - Grid display of all products (responsive: 1-4 columns)
  - Product cards with image, name, price, and "Add to Cart" button
  - Real-time product count display
  - Empty state handling

#### 4.1.2 Product Search & Filtering ✅ IMPLEMENTED
- **Search:**
  - Text-based search by product name and description
  - Real-time filtering as user types
  - Case-insensitive search
  
- **Category Filter:**
  - Dropdown filter by product category
  - "All categories" option
  - Dynamic category extraction from product data
  
- **Sorting:**
  - Sort by default
  - Sort by name (alphabetical)
  - Sort by price (ascending/descending)

#### 4.1.3 Product Detail Page ✅ IMPLEMENTED
- **Location:** `/product/:slug` route (ProductPage.jsx)
- **Features:**
  - Full product information display
  - High-resolution product images with zoom functionality
  - Product name, category, price
  - Detailed description
  - Add to cart functionality
  - Quantity selector
  - Breadcrumb navigation

#### 4.1.4 Shopping Cart ✅ IMPLEMENTED
- **Component:** CartSidebar.jsx
- **Context:** CartContext.jsx
- **Features:**
  - Slide-out sidebar cart
  - Add/remove products
  - Quantity adjustment (increment/decrement)
  - Real-time price calculation
  - Cart item counter badge in header
  - Empty cart state
  - Persistent cart state during session

### 4.2 Navigation & Layout

#### 4.2.1 Header Component ✅ IMPLEMENTED
- **Component:** Header.jsx
- **Features:**
  - Logo and brand name
  - Desktop navigation menu:
    - Accueil (Home)
    - Boutique (Shop)
    - Contact
    - FAQ
  - Mobile responsive hamburger menu
  - Shopping cart icon with item count badge
  - Search icon (desktop only)
  - Sticky header on scroll

#### 4.2.2 Footer Component ✅ IMPLEMENTED
- **Component:** Footer.jsx
- **Features:**
  - Company information and description
  - Social media links (Facebook, Instagram, Twitter)
  - Quick links section:
    - Accueil
    - Boutique
    - Contact
    - FAQ
  - Legal information section:
    - Mentions Légales
    - CGV (Terms of Sale)
    - Confidentialité (Privacy)
    - Cookies
    - Retours & Remboursements
  - Copyright notice
  - Responsive multi-column layout

### 4.3 Customer Pages

#### 4.3.1 Home Page ✅ IMPLEMENTED
- **Location:** `/` route (HomePage.jsx)
- **Features:**
  - Hero section
  - Featured products showcase
  - Call-to-action buttons
  - Brand messaging
  - Responsive layout

#### 4.3.2 Contact Page ✅ IMPLEMENTED
- **Location:** `/contact` route (ContactPage.jsx)
- **Features:**
  - Contact form with validation:
    - Full name (required)
    - Email address (required)
    - Subject (required)
    - Message (required)
  - EmailJS integration for direct email delivery
  - Real-time form validation
  - Success/error message display
  - Loading state during submission
  - Mailto fallback if EmailJS not configured
  - Company contact information:
    - Email: contact@monpetitbazaar.com
    - Phone: +33 1 23 45 67 89
    - Address: 123 Rue du Commerce, 75001 Paris, France
  - Business hours display
  - Icon-based information display

#### 4.3.3 FAQ Page ✅ IMPLEMENTED
- **Location:** `/faq` route (FAQPage.jsx)
- **Features:**
  - Organized by categories:
    - Commandes (Orders)
    - Livraison (Delivery)
    - Retours et Remboursements (Returns & Refunds)
    - Paiement (Payment)
    - Produits (Products)
    - Compte Client (Customer Account)
  - Collapsible question/answer sections
  - Smooth expand/collapse animations
  - Visual indicators (chevron icons)
  - Contact CTA at bottom
  - Comprehensive coverage of common questions

### 4.4 Legal & Policy Pages

#### 4.4.1 Legal Notice ✅ IMPLEMENTED
- **Location:** `/legal-notice` route (LegalNotice.jsx)
- **Content:** Company legal information and compliance

#### 4.4.2 Terms of Sale ✅ IMPLEMENTED
- **Location:** `/terms` route (TermsOfSale.jsx)
- **Content:** General terms and conditions of sale (CGV)

#### 4.4.3 Data Protection Policy ✅ IMPLEMENTED
- **Location:** `/privacy-policy` route (DataProtection.jsx)
- **Content:** Privacy policy and data protection information
- **Note:** Renamed from PrivacyPolicy.jsx to avoid ad blocker issues

#### 4.4.4 Cookie Policy ✅ IMPLEMENTED
- **Location:** `/cookie-policy` route (DataUsage.jsx)
- **Content:** Cookie usage and data collection policy
- **Note:** Renamed from CookiePolicy.jsx to avoid ad blocker issues

#### 4.4.5 Return Policy ✅ IMPLEMENTED
- **Location:** `/returns` route (ReturnPolicy.jsx)
- **Content:** Product return and refund policy

---

## 5. Data Structure

### 5.1 Product Schema
```json
{
  "id": "number",
  "name": "string",
  "slug": "string",
  "category": "string",
  "price": "number",
  "description": "string",
  "image": "string (URL)",
  "images": "array of strings (URLs)",
  "inStock": "boolean"
}
```

### 5.2 Cart Item Schema
```json
{
  "id": "number",
  "name": "string",
  "price": "number",
  "quantity": "number",
  "image": "string (URL)"
}
```

---

## 6. User Experience & Design

### 6.1 Responsive Design ✅ IMPLEMENTED
- **Breakpoints:**
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Features:**
  - Fluid grid layouts
  - Mobile-first approach
  - Touch-friendly interface
  - Optimized images for all screen sizes

### 6.2 Color Scheme & Branding
- **Primary Colors:** Blue (#3B82F6)
- **Accent Colors:** Various (product-dependent)
- **Neutral Colors:** Gray scale
- **Typography:** System fonts for optimal performance

### 6.3 Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Alt text for images

---

## 7. Performance Optimizations

### 7.1 Build Optimizations ✅ IMPLEMENTED
- Vite for fast development and optimized production builds
- Code splitting with React Router
- Tree shaking for unused code elimination
- Minification and compression
- Source maps for debugging

### 7.2 Asset Optimization
- Image optimization
- Lazy loading for images
- Font optimization
- CSS purging (unused styles removed)

### 7.3 Caching Strategy
- Static asset caching
- Browser caching headers
- Service worker ready

---

## 8. SEO Implementation

### 8.1 Meta Tags ✅ IMPLEMENTED
- **Primary Meta Tags:**
  - Title: "Mon Petit Bazaar - Boutique en ligne mode et accessoires"
  - Description: Product and brand description
  - Keywords: casquette lacoste, roland garros, boutique en ligne, etc.
  - Author: Mon Petit Bazaar
  - Robots: index, follow
  - Canonical URL: https://monpetitbazaar.fr/

### 8.2 Social Media Integration ✅ IMPLEMENTED
- **Open Graph Tags:**
  - og:type: website
  - og:url: https://monpetitbazaar.fr/
  - og:title: Brand title
  - og:description: Product description
  - og:image: Brand image

- **Twitter Card Tags:**
  - twitter:card: summary_large_image
  - twitter:title: Brand title
  - twitter:description: Product description
  - twitter:image: Brand image

### 8.3 Site Structure ✅ IMPLEMENTED
- Sitemap.xml
- Robots.txt
- Google Search Console verification
- Structured URLs

---

## 9. Deployment & Infrastructure

### 9.1 Docker Configuration ✅ IMPLEMENTED
- **Files:**
  - `Dockerfile`: Production build
  - `Dockerfile.dev`: Development environment
  - `docker-compose.yml`: Development orchestration
  - `docker-compose.prod.yml`: Production orchestration
  - `nginx.conf`: Web server configuration

### 9.2 Environment Variables
```bash
# Database
DB_USER=admin
DB_PASSWORD=secure_password_here
POSTGRES_DB=monpetitbazaar

# Redis
REDIS_PASSWORD=secure_redis_password

# Application
NODE_ENV=production
VITE_API_URL=http://localhost:8080

# EmailJS (Contact Form)
VITE_EMAILJS_SERVICE_ID=service_a0i6s55
VITE_EMAILJS_TEMPLATE_ID=template_1jeusja
VITE_EMAILJS_PUBLIC_KEY=v7uNTwEMXEBEIFC06
```

### 9.3 Database ✅ IMPLEMENTED
- PostgreSQL database
- Initialization script: `init-db/01-init.sql`
- Product import script: `scripts/import-products.js`

---

## 10. Security Considerations

### 10.1 Implemented Security Features ✅
- Environment variables for sensitive data
- `.env` file excluded from version control
- HTTPS ready (via deployment configuration)
- Input validation on forms
- XSS protection through React
- CSRF protection ready

### 10.2 Data Protection
- Privacy policy compliance
- Cookie policy disclosure
- User data handling guidelines
- Email encryption through EmailJS

---

## 11. Browser Compatibility

### 11.1 Supported Browsers ✅
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### 11.2 Known Issues & Workarounds
- **Ad Blocker Compatibility:** 
  - Issue: Privacy extensions blocking files with "Privacy" or "Cookie" in names
  - Solution: Renamed files to neutral names (DataProtection, DataUsage)

---

## 12. Testing Strategy

### 12.1 Manual Testing ✅ COMPLETED
- Cross-browser testing
- Responsive design testing
- Form validation testing
- Shopping cart functionality
- Navigation testing
- Email delivery testing

### 12.2 Future Testing Recommendations
- Unit testing (Jest, React Testing Library)
- Integration testing
- E2E testing (Cypress, Playwright)
- Performance testing (Lighthouse)
- Accessibility testing (axe, WAVE)

---

## 13. Analytics & Monitoring

### 13.1 Recommended Implementations
- Google Analytics integration
- Google Tag Manager
- Error tracking (Sentry)
- Performance monitoring
- User behavior tracking
- Conversion tracking

---

## 14. Future Enhancements

### 14.1 Planned Features
- [ ] User authentication and accounts
- [ ] Order management system
- [ ] Payment gateway integration (Stripe)
- [ ] Admin dashboard for product management
- [ ] Inventory management
- [ ] Order tracking
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Advanced product filters (price range, tags)
- [ ] Related products recommendations
- [ ] Recently viewed products
- [ ] Product comparison feature

### 14.2 Technical Improvements
- [ ] API backend (REST or GraphQL)
- [ ] Database migration system
- [ ] Automated testing suite
- [ ] CI/CD pipeline
- [ ] Performance monitoring
- [ ] CDN integration
- [ ] Progressive Web App (PWA) features
- [ ] Server-side rendering (SSR)

---

## 15. Documentation

### 15.1 Existing Documentation ✅
- `README.md`: Project overview and setup
- `GETTING_STARTED.md`: Development guide
- `ROADMAP.md`: Feature roadmap
- `SEO_GUIDE.md`: SEO implementation guide
- `DOCKER.md`: Docker deployment guide
- `CONTACT_FORM_SETUP.md`: EmailJS configuration guide
- `SPRING_BOOT_README.md`: Backend integration notes

---

## 16. Version History

### Version 1.0 (Current) - February 9, 2026
- ✅ Initial release with core e-commerce functionality
- ✅ Product catalog and shopping cart
- ✅ Customer pages (Home, Shop, Contact, FAQ)
- ✅ Legal and policy pages
- ✅ EmailJS contact form integration
- ✅ Responsive design implementation
- ✅ SEO optimization
- ✅ Docker deployment configuration
- ✅ Ad blocker compatibility fixes

### Recent Updates
- **Feb 9, 2026:** Fixed ad blocker issues by renaming policy files
- **Feb 9, 2026:** Improved contact form with better EmailJS integration
- **Feb 9, 2026:** Added Shop, Contact, and FAQ pages
- **Feb 9, 2026:** Updated navigation with French labels

---

## 17. Support & Maintenance

### 17.1 Contact Information
- **Email:** contact@monpetitbazaar.com
- **Phone:** +33 1 23 45 67 89
- **Address:** 123 Rue du Commerce, 75001 Paris, France

### 17.2 Business Hours
- Monday - Friday: 9h00 - 18h00
- Saturday: 10h00 - 17h00
- Sunday: Closed

---

## 18. Glossary

- **CGV:** Conditions Générales de Vente (General Terms of Sale)
- **CTA:** Call to Action
- **PWA:** Progressive Web App
- **SEO:** Search Engine Optimization
- **SSR:** Server-Side Rendering
- **XSS:** Cross-Site Scripting
- **CSRF:** Cross-Site Request Forgery

---

## 19. Appendix

### 19.1 File Structure
```
monpetitbazaar-ecom/
├── src/
│   ├── components/
│   │   ├── CartSidebar.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.json
│   ├── pages/
│   │   ├── ContactPage.jsx
│   │   ├── CookieInfo.jsx → DataUsage.jsx
│   │   ├── DataProtection.jsx
│   │   ├── DataUsage.jsx
│   │   ├── FAQPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LegalNotice.jsx
│   │   ├── PrivacyPolicy.jsx → DataProtection.jsx
│   │   ├── ProductPage.jsx
│   │   ├── ReturnPolicy.jsx
│   │   ├── ShopPage.jsx
│   │   └── TermsOfSale.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── init-db/
├── scripts/
├── docker-compose.yml
├── Dockerfile
├── package.json
└── vite.config.js
```

### 19.2 Key Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.22.0",
  "lucide-react": "^0.344.0",
  "@emailjs/browser": "^4.x.x",
  "tailwindcss": "^3.4.1",
  "vite": "^5.1.4"
}
```

---

**Document Status:** ✅ Complete and Up-to-Date  
**Next Review Date:** March 9, 2026  
**Maintained By:** Development Team
