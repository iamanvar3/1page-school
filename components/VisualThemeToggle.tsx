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

  const isMidnight = theme === 'midnight';

  return (
    <div className="relative">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className={`w-40 px-2 py-2 text-sm rounded border shadow-sm focus:outline-none transition-colors duration-200
          ${isMidnight ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className={`bg-white text-black dark:bg-gray-800 dark:text-white`}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
