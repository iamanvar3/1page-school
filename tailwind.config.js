/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

module.exports = {
  darkMode: 'class', // Enable dark mode using a CSS class
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#2563eb',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            strong: { color: '#111' },
            code: { color: '#d63384' },
          },
        },
        dark: {
          css: {
            color: '#e5e7eb',
            a: { color: '#93c5fd' },
            strong: { color: '#fff' },
            code: { color: '#f472b6' },
          },
        },
      },
    },
  },
  plugins: [typography],
};
