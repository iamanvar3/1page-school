'use client';

import { useVisualTheme } from './VisualThemeContext';

export default function VisualThemeToggle() {
  const { theme, setTheme } = useVisualTheme();

  const options = [
    { value: 'default', label: '🌀 Default' },
    { value: 'paper', label: '📜 Paper' },
    { value: 'sunset', label: '🌅 Sunset' },
    { value: 'midnight', label: '🌌 Midnight' },
    { value: 'nature', label: '🌿 Nature' },
  ];

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as any)}
      className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm text-black dark:text-white"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
