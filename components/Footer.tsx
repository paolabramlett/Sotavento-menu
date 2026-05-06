'use client';

import { useLanguage, ui } from '@/lib/language-context';

export default function Footer() {
  const { lang } = useLanguage();
  const t = ui[lang];

  return (
    <footer
      className="mt-auto"
      style={{ backgroundColor: '#002683', color: 'rgba(255,255,255,0.85)' }}
      aria-label="Pie de página"
    >
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col items-center gap-6 text-center">

        {/* Brand */}
        <p className="font-bold text-lg tracking-wide" style={{ color: '#FEC501' }}>
          Restaurant Sotavento
        </p>

        {/* Room service CTA */}
        {/* ── To update phone number: edit roomServiceTel / roomServicePhone in lib/language-context.tsx ── */}
        <a
          href={t.roomServiceTel}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#FEC501', color: '#002683' }}
          aria-label={`${t.footerPhone}: ${t.roomServicePhone}`}
        >
          <PhoneIcon />
          {t.footerPhone} · {t.roomServicePhone}
        </a>

        {/* Social */}
        {/* ── To update social links: change the href values below ── */}
        <div className="flex items-center gap-5" aria-label="Redes sociales">
          <a
            href="https://www.facebook.com/RestaurantSotavento"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Restaurant Sotavento"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/sotavento.pxm/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Restaurant Sotavento"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <InstagramIcon />
          </a>
        </div>

        <p className="text-xs opacity-40">
          © {new Date().getFullYear()} Restaurant Sotavento
        </p>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
