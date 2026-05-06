'use client';

import type { MenuSection } from '@/data/menu/types';

interface Props {
  sections: MenuSection[];
  label?: string;
}

export default function SectionQuickNav({ sections, label = 'Secciones' }: Props) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label={label}
      className="sticky top-16 z-40 -mx-4 px-4 py-2 overflow-x-auto scrollbar-none"
      style={{ backgroundColor: '#F7F4E7', borderBottom: '1px solid rgba(0,38,131,0.1)' }}
    >
      <ul
        className="flex gap-2 w-max"
        role="list"
      >
        {sections.map((s) => (
          <li key={s.id}>
            <button
              onClick={() => scrollTo(s.id)}
              className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-150 hover:opacity-80"
              style={{ backgroundColor: 'rgba(0,38,131,0.08)', color: '#002683' }}
            >
              {s.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
