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
    default: 'text-white',
    dark: 'bg-gray-900/90 text-white',
    sunset: 'bg-gradient-to-br from-pink-200/80 via-orange-100/80 to-yellow-50/80 text-gray-900',
    nature: 'bg-green-50/80 text-green-900',
  };

  return (
    <div
      className={`font-sans min-h-screen transition-colors duration-300 ${themeClasses[theme]}`}
      style={
        theme === 'default'
          ? {
              backgroundImage:
                "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : {}
      }
    >
      <div className="max-w-3xl mx-auto px-4">
        <Header />
        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
}
