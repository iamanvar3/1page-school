'use client';

import ThemeToggle from './ThemeToggle';
import VisualThemeToggle from './VisualThemeToggle';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-playfair">1-Page School</h1>
      <div className="flex gap-2 items-center">
        <ThemeToggle />
        <VisualThemeToggle />
      </div>
    </header>
  );
}
