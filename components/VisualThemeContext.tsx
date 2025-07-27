'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type VisualTheme = 'default' | 'paper' | 'sunset' | 'midnight' | 'nature';

const VisualThemeContext = createContext<{
  theme: VisualTheme;
  setTheme: (theme: VisualTheme) => void;
}>({
  theme: 'default',
  setTheme: () => {},
});

export function useVisualTheme() {
  return useContext(VisualThemeContext);
}

export function VisualThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<VisualTheme>('default');

  useEffect(() => {
    const stored = localStorage.getItem('visual-theme') as VisualTheme;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('visual-theme', theme);
  }, [theme]);

  return (
    <VisualThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </VisualThemeContext.Provider>
  );
}
