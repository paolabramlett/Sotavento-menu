'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage, ui } from '@/lib/language-context';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = ui[lang];
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navLinks = [
    { href: '/',           label: t.home },
    { href: '/desayunos',  label: t.breakfast },
    { href: '/comidas',    label: t.lunch },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{ backgroundColor: '#002683' }}
    >
      <nav
        aria-label="Navegación principal"
        className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-3"
      >
        {/* ── Brand ── */}
        <Link
          href="/"
          className="flex-shrink-0 font-bold text-base tracking-wide leading-tight"
          style={{ color: '#FEC501' }}
          aria-label="Restaurant Sotavento — Inicio"
        >
          Sotavento
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive(link.href)
                    ? 'text-[#FEC501] bg-white/10'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right side: lang switcher + room service + hamburger ── */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            className="text-xs font-semibold px-2.5 py-1.5 rounded-full border transition-colors duration-150"
            style={{
              borderColor: lang === 'es' ? '#FEC501' : 'rgba(255,255,255,0.4)',
              color: lang === 'es' ? '#FEC501' : 'rgba(255,255,255,0.7)',
            }}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Room service — always visible */}
          <a
            href={t.roomServiceTel}
            aria-label={`${t.callRoomService} ${t.roomServicePhone}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold transition-opacity hover:opacity-90 active:opacity-75"
            style={{ backgroundColor: '#FEC501', color: '#002683' }}
          >
            <PhoneIcon />
            <span className="hidden sm:inline">Room Service</span>
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Menú de navegación"
          className="md:hidden border-t"
          style={{ backgroundColor: '#001f6b', borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <ul className="px-4 py-3 flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-[#FEC501] bg-white/10'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Room service in mobile menu too */}
            <li className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <a
                href={t.roomServiceTel}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold"
                style={{ backgroundColor: '#FEC501', color: '#002683' }}
              >
                <PhoneIcon />
                {t.callRoomService} · {t.roomServicePhone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
