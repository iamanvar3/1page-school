// components/Layout.tsx
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
      <main className="flex-grow max-w-3xl w-full mx-auto px-4 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
