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
      className="bg-transparent border border-gray-400 dark:border-gray-600 rounded px-2 py-1 text-sm focus:outline-none"
    >
      {options.map((opt) => (
        <option
          key={opt.value}
          value={opt.value}
          className="text-black dark:text-white bg-white dark:bg-gray-800"
        >
          {opt.label}
        </option>
      ))}
    </select>
  );
}
