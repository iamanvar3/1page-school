// components/Layout.tsx
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>📘 1-Page School</title>
        <meta name="description" content="Life-changing lessons in one page" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold">📘 1-Page School</h1>
          <p className="text-gray-600">Learn in a Page</p>
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
