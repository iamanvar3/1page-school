'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

export default function LayoutWithBackground({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isLesson = pathname.startsWith('/lessons/');

  let backgroundClass = '';

  if (isHome) {
    backgroundClass =
      'bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900';
  } else if (isLesson) {
    backgroundClass =
      'bg-[radial-gradient(ellipse_at_top_left,_#fdf6e3,_#ffffff)] dark:bg-[radial-gradient(ellipse_at_top_left,_#1a1a1a,_#0f0f0f)]';
  } else {
    backgroundClass =
      'bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950';
  }

  return (
    <div className={`${backgroundClass} text-gray-900 dark:text-gray-100 min-h-screen`}>
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
  );
}
