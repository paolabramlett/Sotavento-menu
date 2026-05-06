'use client';

import { useLanguage } from '@/lib/language-context';
import { breakfastMenuEs } from '@/data/menu/es/breakfast';
import { breakfastMenuEn } from '@/data/menu/en/breakfast';
import MenuSection from '@/components/MenuSection';
import SectionQuickNav from '@/components/SectionQuickNav';
import FeaturedDishPlaceholder from '@/components/FeaturedDishPlaceholder';
import CallRoomServiceButton from '@/components/CallRoomServiceButton';

export default function DesayunosPage() {
  const { lang } = useLanguage();
  const menu = lang === 'es' ? breakfastMenuEs : breakfastMenuEn;

  const pageTitle    = lang === 'es' ? 'Desayunos' : 'Breakfast';
  const pageSubtitle = lang === 'es'
    ? 'Servicio de desayuno — todos los días'
    : 'Breakfast service — every day';

  return (
    <div style={{ backgroundColor: '#F7F4E7', minHeight: '100vh' }}>
      {/* ── Page header ── */}
      <div
        className="px-4 pt-8 pb-6 text-center"
        style={{ backgroundColor: '#002683' }}
      >
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#FEC501', opacity: 0.8 }}>
          🌅 {pageSubtitle}
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: '#F7F4E7' }}>
          {pageTitle}
        </h1>
      </div>

      {/* ── Quick nav (sticky below navbar) ── */}
      <SectionQuickNav
        sections={menu}
        label={lang === 'es' ? 'Secciones del menú de desayuno' : 'Breakfast menu sections'}
      />

      {/* ── Menu body ── */}
      <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-8">

        {/* Featured dish — replace placeholder with actual photo */}
        {/* ── Image placement: breakfast featured dish ── */}
        <FeaturedDishPlaceholder
          caption={lang === 'es' ? 'Chilaquiles de la casa' : 'House Chilaquiles'}
          note={lang === 'es' ? 'Una de nuestras especialidades' : 'One of our specialties'}
        />

        {/* All sections */}
        {menu.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}

        {/* Bottom room service nudge */}
        <div className="text-center py-4">
          <p
            className="text-xs opacity-50 mb-3"
            style={{ color: '#002683' }}
          >
            {lang === 'es'
              ? '¿Prefieres comer en tu habitación?'
              : 'Prefer to eat in your room?'}
          </p>
          <CallRoomServiceButton />
        </div>
      </div>
    </div>
  );
}
