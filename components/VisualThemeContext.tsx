<<<<<<< HEAD
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'image' | 'default' | 'paper' | 'sunset' | 'midnight' | 'nature';

interface VisualThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const VisualThemeContext = createContext<VisualThemeContextType | undefined>(undefined);

export function VisualThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('image');
  const [hydrated, setHydrated] = useState(false); // 🚨 To avoid mismatch between SSR & client

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('visual-theme') as Theme | null;
      if (stored) setThemeState(stored);
      setHydrated(true); // ✅ Only show UI after hydration
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('visual-theme', newTheme);
    }
  };

  if (!hydrated) return null; // ❌ Avoid rendering until hydrated

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
=======
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'image' | 'default' | 'paper' | 'sunset' | 'midnight' | 'nature';

interface VisualThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const VisualThemeContext = createContext<VisualThemeContextType | undefined>(undefined);

export function VisualThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('image');
  const [hydrated, setHydrated] = useState(false); // 🚨 To avoid mismatch between SSR & client

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('visual-theme') as Theme | null;
      if (stored) setThemeState(stored);
      setHydrated(true); // ✅ Only show UI after hydration
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('visual-theme', newTheme);
    }
  };

  if (!hydrated) return null; // ❌ Avoid rendering until hydrated

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
>>>>>>> c2bc5ca332093d5bd8381e063f9c351a7feb303b
