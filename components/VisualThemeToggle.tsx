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
    <div className="relative">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="w-40 px-2 py-2 text-sm rounded border border-gray-300 dark:border-gray-600
                   bg-white text-black dark:bg-gray-900 dark:text-white
                   focus:outline-none shadow-sm transition-colors duration-200"
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
    </div>
  );
}
