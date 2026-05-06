/* ─── Menu Data Types ──────────────────────────────────────────────────────
 *
 * All menu data is structured using these types.
 * Prices are stored as numeric values (MXN) for easy bulk updates.
 * Use displayPrice for formatted rendering.
 *
 * For future bulk price updates, target sections by their stable `id`:
 *   e.g. "breakfast-starters", "lunch-seafood", "lunch-cocktails"
 * ─────────────────────────────────────────────────────────────────────── */

export interface SizePrice {
  label: string;
  price: number;
  displayPrice: string;
}

export type PriceType = 'fixed' | 'market';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
  currency?: 'MXN';
  displayPrice?: string;
  /** For items sold in multiple sizes (e.g. cocktails, charcuterie) */
  sizePrices?: SizePrice[];
  /** 'market' = price varies (e.g. lobster); 'fixed' = standard price */
  priceType?: PriceType;
  notes?: string;
}

export interface MenuSection {
  /** Stable machine-readable ID — use for bulk price updates */
  id: string;
  title: string;
  items: MenuItem[];
}
