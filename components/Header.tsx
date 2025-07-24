// components/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6 border-b border-gray-200 mb-6">
      <nav className="max-w-2xl mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-700">📘 1-Page School</h1>
        </Link>
        <span className="text-sm text-gray-500">Learn in a Page</span>
      </nav>
    </header>
  );
}
