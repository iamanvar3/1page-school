// app/layout.tsx
'use client';

import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { inter, playfair } from './fonts';
import { usePathname } from 'next/navigation';

export const metadata = {
  title: '1-Page School',
  description: 'Life-changing lessons, one page at a time.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const backgroundClass = isHome ? 'home-bg' : 'lesson-bg';

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="4IeskjVi2mUJdKvlPFXBbtxWWn2N5zh8Q6dfZoAxbIE" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans text-gray-900 dark:text-gray-100 ${backgroundClass}`}>
        <div className="min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-playfair">1-Page School</h1>
              <ThemeToggle />
            </header>
            <Header />
            <main className="py-8">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
