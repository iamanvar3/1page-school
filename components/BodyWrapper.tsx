'use client';

import { useVisualTheme } from './VisualThemeContext';
import { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
}

export default function BodyWrapper({ children }: Props) {
  const { theme } = useVisualTheme();

  const themeClasses = {
    default: 'bg-white/80 text-black dark:bg-black/80 dark:text-white',
    dark: 'bg-gray-900/90 text-white',
    sunset: 'bg-gradient-to-br from-pink-200/80 via-orange-100/80 to-yellow-50/80 text-gray-900',
    nature: 'bg-green-50/80 text-green-900',
  };

  return (
    <div
      className={`font-sans min-h-screen transition-colors duration-300 ${themeClasses[theme]}`}
      style={{}}
    >
      <div className="max-w-3xl mx-auto px-4">
        <Header />
        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
}
