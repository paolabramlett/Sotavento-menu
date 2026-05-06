import type { MenuItem } from '@/data/menu/types';

interface Props {
  item: MenuItem;
}

export default function MenuItemRow({ item }: Props) {
  const hasDescription = !!item.description;
  const hasSizePrices  = item.sizePrices && item.sizePrices.length > 0;
  const isMarket       = item.priceType === 'market';

  return (
    <li className="flex items-start justify-between gap-4 py-3.5 border-b last:border-0"
        style={{ borderColor: 'rgba(0,38,131,0.08)' }}>
      {/* Name + description */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-snug" style={{ color: '#002683' }}>
          {item.name}
        </p>
        {hasDescription && (
          <p className="mt-0.5 text-xs leading-relaxed opacity-60" style={{ color: '#002683' }}>
            {item.description}
          </p>
        )}
        {isMarket && item.notes && (
          <p className="mt-0.5 text-xs italic opacity-50" style={{ color: '#002683' }}>
            {item.notes}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="flex-shrink-0 text-right">
        {hasSizePrices ? (
          <div className="flex flex-col items-end gap-1">
            {item.sizePrices!.map((sp) => (
              <span key={sp.label} className="flex items-center gap-1.5">
                <span className="text-xs opacity-50 font-medium" style={{ color: '#002683' }}>
                  {sp.label}
                </span>
                <span className="text-sm font-bold" style={{ color: '#002683' }}>
                  {sp.displayPrice}
                </span>
              </span>
            ))}
          </div>
        ) : isMarket ? (
          <span
            className="text-sm font-bold px-2 py-0.5 rounded"
            style={{ backgroundColor: 'rgba(254,197,1,0.2)', color: '#002683' }}
          >
            Precio varía
          </span>
        ) : (
          <span className="text-sm font-bold" style={{ color: '#002683' }}>
            {item.displayPrice}
          </span>
        )}
      </div>
    </li>
  );
}
