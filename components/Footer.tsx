// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 py-8 space-y-2">
      <p>© 2025 1-Page School. All rights reserved.</p>
      <p>
        <Link href="/" className="text-blue-600 hover:underline">Home</Link> |{' '}
        <Link href="/" className="text-blue-600 hover:underline">Lessons</Link>
      </p>
      <p>
        Built with by mrNORD •{' '}
        <a
          href="https://github.com/meanvar3-5583"
          className="underline hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
