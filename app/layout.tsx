import './globals.css';
import { VisualThemeProvider } from '@/components/VisualThemeContext';
import BodyWrapper from '@/components/BodyWrapper';
import { Playfair_Display, Inter } from 'next/font/google';
import type { Metadata } from 'next';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400', variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: '1-Page School',
  description: 'Life-changing lessons in one page.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <VisualThemeProvider>
        <BodyWrapper>{children}</BodyWrapper>
      </VisualThemeProvider>
    </html>
  );
}
