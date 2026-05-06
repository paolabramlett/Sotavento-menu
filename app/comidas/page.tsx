'use client';

import { useLanguage } from '@/lib/language-context';
import { lunchMenuEs } from '@/data/menu/es/lunch';
import { lunchMenuEn } from '@/data/menu/en/lunch';
import MenuSection from '@/components/MenuSection';
import SectionQuickNav from '@/components/SectionQuickNav';
import FeaturedDishPlaceholder from '@/components/FeaturedDishPlaceholder';
import CallRoomServiceButton from '@/components/CallRoomServiceButton';

export default function ComidasPage() {
  const { lang } = useLanguage();
  const menu = lang === 'es' ? lunchMenuEs : lunchMenuEn;

  /* Split for strategic image placement */
  const topSections     = menu.slice(0, 4);   // Botanas → Pasta
  const middleSections  = menu.slice(4, 8);   // Sandwiches → Seafood
  const bottomSections  = menu.slice(8);      // Drinks → Spirits

  const pageTitle    = lang === 'es' ? 'Comidas' : 'Lunch';
  const pageSubtitle = lang === 'es'
    ? 'Menú del día — cocina de mar y tierra'
    : 'Daily menu — sea & land cuisine';

  return (
    <div style={{ backgroundColor: '#F7F4E7', minHeight: '100vh' }}>
      {/* ── Page header ── */}
      <div
        className="px-4 pt-8 pb-6 text-center"
        style={{ backgroundColor: '#002683' }}
      >
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#FEC501', opacity: 0.8 }}>
          🐟 {pageSubtitle}
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: '#F7F4E7' }}>
          {pageTitle}
        </h1>
      </div>

      {/* ── Quick nav ── */}
      <SectionQuickNav
        sections={menu}
        label={lang === 'es' ? 'Secciones del menú de comidas' : 'Lunch menu sections'}
      />

      {/* ── Menu body ── */}
      <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-8">

        {/* Top sections */}
        {topSections.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}

        {/* Featured seafood image placeholder */}
        {/* ── Image placement: featured lunch / seafood dish ── */}
        <FeaturedDishPlaceholder
          caption={lang === 'es' ? 'Camarones Sotavento' : 'Sotavento Shrimp'}
          note={lang === 'es' ? 'Camarones envueltos en tocino con nuestra salsa especial' : 'Bacon wrapped shrimp with our special Sotavento sauce'}
        />

        {/* Middle sections */}
        {middleSections.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}

        {/* Dessert/cocktail placeholder */}
        {/* ── Image placement: dessert or cocktail ── */}
        <FeaturedDishPlaceholder
          caption={lang === 'es' ? 'Plátanos Flameados' : 'Banana Flambe'}
          note={lang === 'es' ? 'Postre de la casa' : 'House dessert'}
        />

        {/* Bottom sections */}
        {bottomSections.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}

        {/* Bottom room service nudge */}
        <div className="text-center py-4">
          <p
            className="text-xs opacity-50 mb-3"
            style={{ color: '#002683' }}
          >
            {lang === 'es'
              ? '¿Prefieres ordenar a tu habitación?'
              : 'Prefer to order to your room?'}
          </p>
          <CallRoomServiceButton />
        </div>
      </div>
    </div>
  );
}
