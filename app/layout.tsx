import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Restaurant Sotavento — Menú',
  description:
    'Menú digital del Restaurant Sotavento. Desayunos, comidas, mariscos y más. Puerto Escondido, Oaxaca.',
  keywords: ['restaurant', 'sotavento', 'menu', 'puerto escondido', 'mariscos', 'oaxaca'],
  openGraph: {
    title: 'Restaurant Sotavento',
    description: 'Menú digital — Desayunos y Comidas',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#002683" />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
