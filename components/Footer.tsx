// components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-10 border-t pt-6 pb-10 text-center text-gray-600 text-sm">
      <p>© 2025 1-Page School. All rights reserved.</p>
      <p className="mt-2">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link> |{' '}
        <Link href="/" className="text-blue-600 hover:underline">Lessons</Link>
      </p>
    </footer>
  );
}
