# Code Changes Needed - Quick Reference 🚀

## 1. Add WhatsApp Floating Button

**File:** `src/app/layout.tsx`

**Add import at top (around line 8):**

```typescript
import WhatsAppButton from "@/components/WhatsAppButton";
```

**Add button in body (around line 273, after `<BackToTop />`)::**

```typescript
<BackToTop />
<WhatsAppButton floating={true} />
```

---

## 2. Add Blog Link to Navigation

**File:** `src/components/Navbar.tsx`

**Find the navigation links section and add:**

```typescript
<Link
  href="/blog"
  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
>
  Blog
</Link>
```

For mobile menu, add the same link there too.

---

## 3. Add Blog Link to Footer

**File:** `src/components/Footer.tsx`

**In the Quick Links section, add:**

```typescript
<Link href="/blog" className="hover:text-white transition-colors duration-200">
  Blog
</Link>
```

---

## 4. Update Sitemap

**File:** `src/app/sitemap.ts`

**Add blog page (around line 35-40):**

```typescript
{
  url: `${baseUrl}/blog`,
  lastModified: new Date(),
  changeFrequency: "weekly" as const,
  priority: 0.8,
},
```

**Add location pages (around line 90-110):**

```typescript
// Location landing pages
{
  url: `${baseUrl}/locations/kalyanpur`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
},
{
  url: `${baseUrl}/locations/pondha`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
},
{
  url: `${baseUrl}/locations/dholas`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
},
{
  url: `${baseUrl}/locations/vikas-nagar`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
},
{
  url: `${baseUrl}/locations/dehradun`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
},
{
  url: `${baseUrl}/locations/saharanpur`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
},
```

---

## 5. (Optional) Add WhatsApp to Property Pages

**File:** `src/app/properties/[id]/page.tsx`

**Add import at top:**

```typescript
import WhatsAppButton from "@/components/WhatsAppButton";
```

**Add button in the contact section (find where phone number is displayed):**

```typescript
<WhatsAppButton propertyTitle={property.title} className="w-full mt-4" />
```

---

## 6. Update Social Media Links in Structured Data

**File:** `src/app/layout.tsx`

**Find the `sameAs` array (around line 164) and update:**

```typescript
sameAs: [
  "https://www.facebook.com/share/1AnqEc5BRA/",
  "https://www.instagram.com/shahproperties",
  "https://www.youtube.com/@shahproperties",
  "https://www.linkedin.com/company/shahproperties",
],
```

(Add social media accounts as you create them)

---

## Quick Test Commands

After making changes:

```bash
# Development test
npm run dev

# Build test
npm run build

# Start production
npm start
```

Visit these URLs to test:

- http://localhost:3000/blog
- http://localhost:3000/locations/kalyanpur
- http://localhost:3000/locations/pondha

---

## That's it!

These are the only code changes needed. Everything else is external setup (Google Business Profile, social media, etc.) which doesn't require code changes.
