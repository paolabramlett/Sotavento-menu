'use client';

import Link from 'next/link';
import { useLanguage, ui } from '@/lib/language-context';
import FeaturedDishPlaceholder from '@/components/FeaturedDishPlaceholder';
import CallRoomServiceButton from '@/components/CallRoomServiceButton';

export default function HomePage() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: '#002683' }}
        aria-labelledby="hero-heading"
      >
        {/* Decorative angled divider */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(to bottom right, transparent 49%, #F7F4E7 50%)',
          }}
        />

        <div className="relative max-w-2xl mx-auto px-5 pt-14 pb-20 text-center">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 tracking-wide"
            style={{ backgroundColor: 'rgba(254,197,1,0.15)', color: '#FEC501' }}
          >
            Puerto Escondido, Oaxaca
          </span>

          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
            style={{ color: '#F7F4E7' }}
          >
            {t.heroTagline}
          </h1>
          <p
            className="text-sm sm:text-base leading-relaxed mb-8 mx-auto max-w-md"
            style={{ color: 'rgba(247,244,231,0.75)' }}
          >
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/desayunos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#FEC501', color: '#002683' }}
            >
              🌅 {t.viewBreakfast}
            </Link>
            <Link
              href="/comidas"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold border-2 transition-colors hover:bg-white/10"
              style={{ borderColor: '#1BA7EC', color: '#F7F4E7' }}
            >
              🐟 {t.viewLunch}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────────────── */}
      <div
        className="max-w-2xl mx-auto px-4 py-10 flex flex-col gap-10"
        style={{ color: '#002683' }}
      >
        {/* Hero image placeholder — replace with actual restaurant photo */}
        <FeaturedDishPlaceholder
          caption={lang === 'es' ? 'Vista del Restaurante Sotavento' : 'Restaurant Sotavento'}
          tall
        />

        {/* About */}
        <section aria-labelledby="about-heading" className="text-center">
          <h2
            id="about-heading"
            className="text-xl font-bold mb-3"
          >
            {t.aboutTitle}
          </h2>
          <p className="text-sm leading-relaxed opacity-70 max-w-sm mx-auto">
            {t.aboutText}
          </p>
        </section>

        {/* Menu cards */}
        <section aria-labelledby="menus-heading">
          <h2
            id="menus-heading"
            className="text-xs font-bold tracking-widest uppercase opacity-40 text-center mb-5"
          >
            {lang === 'es' ? 'Nuestros Menús' : 'Our Menus'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MenuCard
              href="/desayunos"
              emoji="🌅"
              title={t.breakfast}
              subtitle={
                lang === 'es'
                  ? 'Jugos, huevos, chilaquiles, hotcakes y más'
                  : 'Juices, eggs, chilaquiles, pancakes and more'
              }
              color="#1BA7EC"
            />
            <MenuCard
              href="/comidas"
              emoji="🐟"
              title={lang === 'es' ? 'Comidas' : 'Lunch'}
              subtitle={
                lang === 'es'
                  ? 'Mariscos, carnes, pastas, cocteles y más'
                  : 'Seafood, meats, pasta, cocktails and more'
              }
              color="#002683"
            />
          </div>
        </section>

        {/* Room service */}
        <section
          className="rounded-2xl p-6 text-center"
          style={{ backgroundColor: '#002683' }}
          aria-labelledby="room-service-heading"
        >
          <div className="text-3xl mb-3" aria-hidden="true">🛎️</div>
          <h2
            id="room-service-heading"
            className="text-lg font-bold mb-2"
            style={{ color: '#FEC501' }}
          >
            Room Service
          </h2>
          <p
            className="text-sm leading-relaxed mb-5 max-w-xs mx-auto"
            style={{ color: 'rgba(247,244,231,0.75)' }}
          >
            {t.roomServiceNote}
          </p>
          <CallRoomServiceButton size="lg" />
        </section>
      </div>
    </>
  );
}

function MenuCard({
  href, emoji, title, subtitle, color,
}: {
  href: string; emoji: string; title: string; subtitle: string; color: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl p-5 transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
      style={{ backgroundColor: color }}
    >
      <div className="text-3xl mb-3" aria-hidden="true">{emoji}</div>
      <h3 className="text-base font-bold mb-1" style={{ color: '#FEC501' }}>
        {title}
      </h3>
      <p className="text-xs leading-relaxed" style={{ color: 'rgba(247,244,231,0.75)' }}>
        {subtitle}
      </p>
      <div className="mt-4 text-xs font-semibold" style={{ color: '#FEC501' }}>
        Ver menú →
      </div>
    </Link>
  );
}
