// components/SiteLayout.tsx
import Footer from './Footer';
import Head from 'next/head';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>🌍 OneLife | 1-Page Wisdom for Living Well</title>
        <meta name="description" content="OneLife delivers timeless life lessons in just one page. Learn about confidence, emotional control, habits, and more." />
      </Head>

      <div className="min-h-screen flex flex-col">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold font-playfair">🌍 OneLife</h1>
          <p className="text-muted-foreground">Timeless wisdom, one page at a time.</p>
        </header>

        <main className="flex-grow">{children}</main>

        <Footer />
      </div>
    </>
  );
}
