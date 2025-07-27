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
    default: 'bg-white text-black dark:bg-black dark:text-white',
    paper: 'bg-yellow-50 text-gray-900',
    sunset: 'bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-50 text-gray-900',
    midnight: 'bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white',
    nature: 'bg-green-50 text-green-900',
  };

  return (
    <body
      className={`font-sans min-h-screen transition-colors duration-300 ${themeClasses[theme]}`}
    >
      <div className="max-w-3xl mx-auto px-4">
        <Header />
        <main className="mt-6">{children}</main>
      </div>
    </body>
  );
}
