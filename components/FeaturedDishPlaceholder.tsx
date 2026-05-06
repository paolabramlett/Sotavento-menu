/* ── To replace image placeholders: swap the <div> below with a Next.js <Image>
 *    component pointing to your actual image file.
 *    Example:
 *      import Image from 'next/image';
 *      <Image src="/images/my-dish.jpg" alt={caption} fill className="object-cover" />
 * ─────────────────────────────────────────────────────────────────────────── */

interface Props {
  caption: string;
  /** Optional extra info shown below caption */
  note?: string;
  tall?: boolean;
}

export default function FeaturedDishPlaceholder({ caption, note, tall = false }: Props) {
  return (
    <figure className="rounded-2xl overflow-hidden" aria-label={`Imagen: ${caption}`}>
      {/* Image area — replace this div with your actual <Image> */}
      <div
        className={`relative w-full flex items-center justify-center ${tall ? 'h-56 sm:h-72' : 'h-44 sm:h-56'}`}
        style={{
          background: 'linear-gradient(135deg, rgba(27,167,236,0.15) 0%, rgba(0,38,131,0.12) 100%)',
        }}
        role="img"
        aria-label={caption}
      >
        {/* Subtle wave / ocean motif */}
        <svg
          viewBox="0 0 120 60"
          className="w-24 opacity-20"
          aria-hidden="true"
          fill="none"
        >
          <path
            d="M0 40 Q15 20 30 40 Q45 60 60 40 Q75 20 90 40 Q105 60 120 40"
            stroke="#002683"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M0 50 Q15 30 30 50 Q45 70 60 50 Q75 30 90 50 Q105 70 120 50"
            stroke="#1BA7EC"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="60" cy="25" r="8" fill="#FEC501" opacity="0.5" />
        </svg>

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2.5"
          style={{ background: 'linear-gradient(to top, rgba(0,38,131,0.55), transparent)' }}>
          <p className="text-white text-xs font-semibold">{caption}</p>
        </div>
      </div>

      {note && (
        <figcaption
          className="px-3 py-1.5 text-xs text-center opacity-50"
          style={{ color: '#002683' }}
        >
          {note}
        </figcaption>
      )}
    </figure>
  );
}
