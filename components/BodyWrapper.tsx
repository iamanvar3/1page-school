'use client';

import { useEffect, useState } from 'react';
import { useVisualTheme } from './VisualThemeContext';
import { ReactNode } from 'react';
import Header from './Header';
import Lottie from 'lottie-react';

interface Props {
  children: ReactNode;
}

export default function BodyWrapper({ children }: Props) {
  const theme = useVisualTheme().theme;
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    if (theme === 'image') {
      fetch('/animations/life.json')
        .then((res) => res.json())
        .then(setAnimationData)
        .catch((err) => console.error('Lottie load error:', err));
    }
  }, [theme]);

  const themeClasses: Record<string, string> = {
    paper: 'bg-gray-900/90 text-white',
    sunset: 'bg-gradient-to-br from-pink-200/80 via-orange-100/80 to-yellow-50/80 text-gray-900',
    nature: 'bg-green-50/80 text-green-900',
    image: 'bg-white/80 text-black dark:bg-black/80 dark:text-white',
  };

  return (
    <div
      className={`font-sans min-h-screen transition-colors duration-300 ${themeClasses[theme] || ''}`}
      style={
        theme === 'image'
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
      {theme === 'image' && animationData && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <Header />
        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
}
