// app/layout.tsx
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { inter, playfair } from './fonts';

export const metadata = {
  title: '1-Page School',
  description: 'Life-changing lessons, one page at a time.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="4IeskjVi2mUJdKvlPFXBbtxWWn2N5zh8Q6dfZoAxbIE" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-gray-900`}>
        <Header />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
