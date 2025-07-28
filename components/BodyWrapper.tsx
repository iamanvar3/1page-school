<<<<<<< HEAD
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
    image: 'text-white',
    default: 'bg-white text-black dark:bg-black dark:text-white',
    paper: 'bg-yellow-50 text-gray-900',
    sunset: 'bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-50 text-gray-900',
    midnight: 'bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white',
    nature: 'bg-green-50 text-green-900',
  };

  return (
    <div
      className={`font-sans min-h-screen transition-colors duration-300 ${themeClasses[theme]}`}
      style={theme === 'image' ? {
        backgroundImage: "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      } : {}}
    >
      <div className="max-w-3xl mx-auto px-4">
        <Header />
        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
}
=======
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
    image: 'text-white',
    default: 'bg-white text-black dark:bg-black dark:text-white',
    paper: 'bg-yellow-50 text-gray-900',
    sunset: 'bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-50 text-gray-900',
    midnight: 'bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white',
    nature: 'bg-green-50 text-green-900',
  };

  return (
    <div
      className={`font-sans min-h-screen transition-colors duration-300 ${themeClasses[theme]}`}
      style={theme === 'image' ? {
        backgroundImage: "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      } : {}}
    >
      <div className="max-w-3xl mx-auto px-4">
        <Header />
        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
}
>>>>>>> c2bc5ca332093d5bd8381e063f9c351a7feb303b
