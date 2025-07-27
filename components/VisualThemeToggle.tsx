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
        className="w-40 px-2 py-2 text-sm rounded border border-gray-300 dark:border-gray-600
                   focus:outline-none shadow-sm transition-colors duration-200"
        style={{
          backgroundColor: isMidnight ? '#1f2937' : '#ffffff', // slate-800 or white
          color: isMidnight ? '#ffffff' : '#000000',
        }}
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            style={{
              backgroundColor: isMidnight ? '#1f2937' : '#ffffff',
              color: isMidnight ? '#ffffff' : '#000000',
            }}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
