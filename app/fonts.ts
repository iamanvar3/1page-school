// app/fonts.ts
import { Inter, Playfair_Display } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // 👈 this line enables `.variable`
  display: 'swap',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair', // 👈 this line enables `.variable`
  display: 'swap',
});
