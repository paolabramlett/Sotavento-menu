# Restaurant Sotavento — Menú Digital

Bilingual (ES/EN) restaurant menu website. Spanish-first, mobile-first.

Built with **Next.js 16 · TypeScript · Tailwind CSS 4**.

---

## Quick start

```bash
npm run dev      # development server → http://localhost:3000
npm run build    # production build
npm run start    # production server
```

---

## How to update common things

### 📞 Phone number (Room Service)
Edit **`lib/language-context.tsx`** — find these two lines and update both:
```ts
roomServicePhone: '+52 954 104 2044',
roomServiceTel:   'tel:+529541042044',
```
Both `es` and `en` objects must be updated.

---

### 🔗 Social links
Edit **`components/Footer.tsx`** — find the two `<a>` tags:
```tsx
href="https://www.facebook.com/RestaurantSotavento"
href="https://www.instagram.com/sotavento.pxm/"
```

---

### 🖼 Image placeholders
Search for `FeaturedDishPlaceholder` across the codebase. Each one has a comment above it explaining its placement. Replace the component with a Next.js `<Image>` tag:

```tsx
// Before (placeholder):
<FeaturedDishPlaceholder caption="Camarones Sotavento" />

// After (real image):
import Image from 'next/image';
<figure>
  <Image src="/images/camarones-sotavento.jpg" alt="Camarones Sotavento" width={600} height={400} />
</figure>
```

Place image files in **`public/images/`**.

Placeholder locations:
| File | Description |
|------|-------------|
| `app/page.tsx` | Hero / restaurant exterior |
| `app/desayunos/page.tsx` | Featured breakfast dish |
| `app/comidas/page.tsx` (×2) | Featured seafood + dessert/cocktail |

---

### 🍽 Menu items & prices

All menu data lives in **`data/menu/`**:

```
data/menu/
  types.ts           ← TypeScript types (MenuItem, MenuSection)
  es/
    breakfast.ts     ← Spanish breakfast menu
    lunch.ts         ← Spanish lunch menu
  en/
    breakfast.ts     ← English breakfast menu
    lunch.ts         ← English lunch menu
```

Each item has a `price` (number, MXN) and a `displayPrice` (formatted string).
Update both when changing prices.

---

### 💰 Bulk price updates by section

Every menu section has a stable `id`. Use it to target specific sections:

| Section ID | Contents |
|------------|----------|
| `breakfast-starters` | Entradas / Starters |
| `breakfast-from-comal` | Del Comal |
| `breakfast-sweet` | Desayuno Dulce |
| `breakfast-salty` | Desayuno Salado |
| `breakfast-eggs` | Huevos |
| `breakfast-omelettes` | Omelettes |
| `breakfast-specialties` | Especialidades |
| `breakfast-juice-bar` | Bar de Jugos |
| `breakfast-drinks` | Bebidas (breakfast) |
| `lunch-snacks` | Botanas |
| `lunch-salads` | Ensaladas |
| `lunch-soups` | Sopas |
| `lunch-pasta` | Pasta |
| `lunch-sandwiches-burgers` | Sándwiches & Hamburguesas |
| `lunch-chicken` | Pollo |
| `lunch-beef` | Carne |
| `lunch-seafood` | Mariscos |
| `lunch-drinks` | Bebidas (lunch) |
| `lunch-desserts` | Postres |
| `lunch-cocktails` | Coctelería |
| `lunch-spirits` | Licores |

Example AI prompt for bulk update:
> "In `data/menu/es/lunch.ts` and `data/menu/en/lunch.ts`, find all items in the section with id `lunch-seafood` and increase their `price` by 5%. Update `displayPrice` to match."

---

### 🌐 Adding/editing UI text

Static UI strings (navigation labels, headings, CTAs) live in **`lib/language-context.tsx`** inside the `ui` object. Both `es` and `en` keys must be maintained.

---

## Content notes

- Spanish and English menu data are **intentionally kept separate** — they are not forced mirrors of each other. Some item names and descriptions differ between languages (e.g., "Hotcakes" ES → "Pancakes" EN).
- The `MenuItemRow` component handles market-price items (`priceType: 'market'`) and size-variant items (`sizePrices[]`) automatically.
- A code comment was added in `data/menu/en/breakfast.ts` on the `be-oaxaquena` item noting a description discrepancy between Spanish and English PDFs.

---

## File structure

```
app/
  layout.tsx          ← Root layout, wraps with LanguageProvider
  page.tsx            ← Home / welcome page
  desayunos/
    page.tsx          ← Breakfast menu page
  comidas/
    page.tsx          ← Lunch menu page
  globals.css         ← Tailwind v4 base + brand color tokens

components/
  Navbar.tsx
  Footer.tsx
  MenuSection.tsx
  MenuItemRow.tsx
  FeaturedDishPlaceholder.tsx
  SectionQuickNav.tsx
  CallRoomServiceButton.tsx

data/menu/
  types.ts
  es/breakfast.ts
  es/lunch.ts
  en/breakfast.ts
  en/lunch.ts

lib/
  language-context.tsx   ← Language state, useLanguage hook, all UI strings

.claude/
  launch.json            ← Dev server configs for Claude Code preview
```
