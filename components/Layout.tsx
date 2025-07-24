// components/Layout.tsx
import Head from 'next/head';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>📘 1-Page School</title>
        <meta name="description" content="Learn life-changing lessons in one page." />
      </Head>
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold">📘 1-Page School</h1>
        <p className="text-gray-600 mt-2 text-lg">Learn in a Page</p>
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
