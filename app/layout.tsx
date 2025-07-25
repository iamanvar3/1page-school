// app/layout.tsx

import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { inter } from './fonts'; // ✅ cleaner font management 

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '1-Page School',
  description: 'Life-changing lessons, one page at a time.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google site verification meta tag */}
        <meta name="google-site-verification" content="4IeskjVi2mUJdKvlPFXBbtxWWn2N5zh8Q6dfZoAxbIE" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main className="max-w-2xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
