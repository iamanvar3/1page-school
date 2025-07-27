import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { inter, playfair } from './fonts';
import { ReactNode } from 'react';
import { VisualThemeProvider } from '@/components/VisualThemeContext';

export const metadata = {
  title: '1-Page School',
  description: 'Life-changing lessons, one page at a time.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="4IeskjVi2mUJdKvlPFXBbtxWWn2N5zh8Q6dfZoAxbIE"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <VisualThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </VisualThemeProvider>
      </body>
    </html>
  );
}
