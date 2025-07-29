import './globals.css';
import { VisualThemeProvider } from '@/components/VisualThemeContext';
import BodyWrapper from '@/components/BodyWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1-Page School – Learn Smarter, Faster',
  description: 'Life-changing lessons in one page. Learn faster with simple, focused one-page lessons on any subject.',
  keywords: ['1Page School', 'online school', 'one-page learning', 'education', 'fast learning', 'Mr. NORD'],
  authors: [{ name: 'Mr. NORD' }],
  creator: 'Mr. NORD',
  metadataBase: new URL('https://1page-school.vercel.app'),
  openGraph: {
    title: '1-Page School – Learn Smarter, Faster',
    description: 'Simple, fast, and effective one-page lessons to help you master any topic quickly.',
    url: 'https://1page-school.vercel.app',
    siteName: '1-Page School',
    images: [
      {
        url: '/preview-image.png',
        width: 1200,
        height: 630,
        alt: '1Page School – One-page learning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1-Page School – Learn Smarter',
    description: 'Fast, powerful one-page lessons to help you learn anything better.',
    images: ['/preview-image.png'],
    creator: '@YourTwitterHandle', // Optional: replace or remove
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="light font-sans">
        <VisualThemeProvider>
          <BodyWrapper>{children}</BodyWrapper>
        </VisualThemeProvider>
      </body>
    </html>
  );
}
