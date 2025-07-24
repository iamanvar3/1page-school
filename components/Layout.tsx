// components/Layout.tsx
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
