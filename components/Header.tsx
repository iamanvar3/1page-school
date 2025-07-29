'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useVisualTheme } from './VisualThemeContext';

const themes = [
  { value: 'image', label: 'Default' },
  { value: 'paper', label: 'Paper' },
  { value: 'sunset', label: 'Sunset' },
  { value: 'nature', label: 'Nature' },
];

export default function Header() {
  const { theme, setTheme } = useVisualTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-serif font-bold tracking-tight">
        1-Page School
      </Link>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="border rounded px-3 py-1 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Theme: {themes.find((t) => t.value === theme)?.label ?? 'Default'}
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border rounded shadow-md z-50">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => {
                  setTheme(t.value as any);
                  setOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  theme === t.value ? 'font-bold' : ''
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
