'use client';

import React, { createContext, useContext, useState } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'es',
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('es');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/* ─── Static UI strings ──────────────────────────────────────────────────── */
export const ui = {
  es: {
    home:         'Inicio',
    breakfast:    'Desayunos',
    lunch:        'Comidas',
    roomService:  'Room Service',
    roomServicePhone: '+52 954 104 2044',
    roomServiceTel:   'tel:+529541042044',
    callRoomService:  'Llamar al Room Service',
    viewBreakfast:    'Ver Desayunos',
    viewLunch:        'Ver Comidas',
    orderRoomService: 'Pedir Room Service',
    heroTagline:      'Bienvenido a Restaurant Sotavento',
    heroSubtitle:     'Disfruta nuestros sabores desde la comodidad de tu habitación o en nuestro restaurante frente al mar.',
    aboutTitle:       'Cocina con sabor a mar',
    aboutText:        'En Sotavento te ofrecemos una cocina fresca, marinera y llena de sabor. Desde desayunos reconfortantes hasta mariscos frescos y cortes de res — todo preparado con cariño para ti.',
    roomServiceNote:  'También puedes ordenar todo nuestro menú directamente a tu habitación. Llama al Room Service y con gusto te atendemos.',
    footerPhone:      'Pedir al Room Service',
    quickNav:         'Ir a sección',
  },
  en: {
    home:         'Home',
    breakfast:    'Breakfast',
    lunch:        'Lunch',
    roomService:  'Room Service',
    roomServicePhone: '+52 954 104 2044',
    roomServiceTel:   'tel:+529541042044',
    callRoomService:  'Call Room Service',
    viewBreakfast:    'View Breakfast',
    viewLunch:        'View Lunch Menu',
    orderRoomService: 'Order Room Service',
    heroTagline:      'Welcome to Restaurant Sotavento',
    heroSubtitle:     'Enjoy our flavors from the comfort of your room or at our seaside restaurant.',
    aboutTitle:       'Fresh Flavors by the Sea',
    aboutText:        'At Sotavento we offer fresh, coastal cuisine full of flavor. From hearty breakfasts to fresh seafood and grilled steaks — all prepared with care, just for you.',
    roomServiceNote:  'You can also order our full menu directly to your room. Call Room Service and we\'ll be happy to assist you.',
    footerPhone:      'Order Room Service',
    quickNav:         'Jump to section',
  },
} as const;
