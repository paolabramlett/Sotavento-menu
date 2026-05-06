import type { MenuSection as MenuSectionType } from '@/data/menu/types';
import MenuItemRow from './MenuItemRow';

interface Props {
  section: MenuSectionType;
}

export default function MenuSection({ section }: Props) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-20"
    >
      {/* Section heading */}
      <div
        className="px-4 py-2.5 rounded-xl mb-1"
        style={{ backgroundColor: '#002683' }}
      >
        <h2
          id={`${section.id}-heading`}
          className="text-sm font-bold tracking-widest uppercase"
          style={{ color: '#FEC501', letterSpacing: '0.1em' }}
        >
          {section.title}
        </h2>
      </div>

      {/* Items */}
      <ul
        className="px-1"
        aria-label={`Platillos en ${section.title}`}
      >
        {section.items.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
