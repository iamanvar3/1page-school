// ✅ app/layout.tsx
import './globals.css';
import { inter, playfair } from './fonts';
import { ReactNode } from 'react';
import LayoutWithBackground from '../components/LayoutWithBackground'; // ✅ import the client component

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
        <LayoutWithBackground>{children}</LayoutWithBackground>
      </body>
    </html>
  );
}
