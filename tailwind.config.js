/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#1f2937',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            a: {
              color: '#2563eb',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            strong: { color: '#111' },
            code: {
              color: '#d63384',
              backgroundColor: '#fef2f2',
              padding: '2px 4px',
              borderRadius: '4px',
            },
            'h1,h2,h3,h4': { color: '#111', scrollMarginTop: '80px' },
          },
        },
        invert: {
          css: {
            color: '#e5e7eb',
            a: { color: '#93c5fd' },
            strong: { color: '#fff' },
            code: {
              color: '#f472b6',
              backgroundColor: '#1f2937',
              padding: '2px 4px',
              borderRadius: '4px',
            },
            'h1,h2,h3,h4': { color: '#fff' },
          },
        },
      },
    },
  },
  plugins: [typography],
};
