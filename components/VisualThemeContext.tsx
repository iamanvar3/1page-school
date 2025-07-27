'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'default' | 'paper' | 'sunset' | 'midnight' | 'nature';

interface VisualThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const VisualThemeContext = createContext<VisualThemeContextType | undefined>(undefined);

export function VisualThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('default');

  useEffect(() => {
    const stored = localStorage.getItem('visual-theme') as Theme | null;
    if (stored) setThemeState(stored);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('visual-theme', newTheme);
  };

  return (
    <VisualThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </VisualThemeContext.Provider>
  );
}

export function useVisualTheme() {
  const context = useContext(VisualThemeContext);
  if (!context) {
    throw new Error('useVisualTheme must be used within a VisualThemeProvider');
  }
  return context;
}
