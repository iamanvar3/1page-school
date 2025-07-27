'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'default' | 'paper' | 'sunset' | 'midnight' | 'nature';

interface VisualThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const VisualThemeContext = createContext<VisualThemeContextType | undefined>(undefined);

export function VisualThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default');

  // Optional: Persist theme in localStorage
  useEffect(() => {
    const stored = localStorage.getItem('visual-theme') as Theme;
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

export function useVisualTheme() {
  const context = useContext(VisualThemeContext);
  if (!context) throw new Error('useVisualTheme must be used within a VisualThemeProvider');
  return context;
}
