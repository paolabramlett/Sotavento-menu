'use client';

import { useLanguage, ui } from '@/lib/language-context';

interface Props {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CallRoomServiceButton({
  variant = 'primary',
  size = 'md',
  className = '',
}: Props) {
  const { lang } = useLanguage();
  const t = ui[lang];

  const sizeClasses = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-4 text-base',
  }[size];

  const variantStyle =
    variant === 'primary'
      ? { backgroundColor: '#FEC501', color: '#002683' }
      : { backgroundColor: 'transparent', color: '#002683', border: '2px solid #FEC501' };

  return (
    <a
      href={t.roomServiceTel}
      aria-label={`${t.callRoomService}: ${t.roomServicePhone}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold transition-opacity hover:opacity-90 active:scale-95 ${sizeClasses} ${className}`}
      style={variantStyle}
    >
      <PhoneIcon />
      {t.orderRoomService}
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  );
}
