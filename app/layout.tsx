import './globals.css';
import Header from '@/components/Header';
import { VisualThemeProvider, useVisualTheme } from '@/components/VisualThemeContext';
import { Playfair_Display, Inter } from 'next/font/google';
import type { Metadata } from 'next';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400', variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: '1-Page School',
  description: 'Life-changing lessons in one page.',
};

function BodyWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useVisualTheme();

  const themeClasses = {
    default: 'bg-white text-black dark:bg-black dark:text-white',
    paper: 'bg-yellow-50 text-gray-900',
    sunset: 'bg-gradient-to-br from-pink-200 via-orange-100 to-yellow-50 text-gray-900',
    midnight: 'bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white',
    nature: 'bg-green-50 text-green-900',
  };

  return (
    <body
      className={`${playfair.variable} ${inter.variable} font-sans min-h-screen transition-colors duration-300 ${
        themeClasses[theme]
      }`}
    >
      <div className="max-w-3xl mx-auto px-4">
        <Header />
        <main className="mt-6">{children}</main>
      </div>
    </body>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <VisualThemeProvider>
        <BodyWrapper>{children}</BodyWrapper>
      </VisualThemeProvider>
    </html>
  );
}
