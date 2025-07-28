'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const path = usePathname();
  const parts = path.split('/').filter(Boolean);

  const crumbs = parts.map((part, index) => {
    const href = '/' + parts.slice(0, index + 1).join('/');
    const name = decodeURIComponent(part).replace(/-/g, ' ');
    return (
      <span key={href}>
        <span className="mx-2 text-gray-400">/</span>
        <Link href={href} className="text-blue-600 hover:underline capitalize">
          {name}
        </Link>
      </span>
    );
  });

  return (
    <nav className="text-sm text-gray-600 mb-6">
      <Link href="/" className="text-blue-600 hover:underline">Home</Link>
      {crumbs}
    </nav>
  );
}
