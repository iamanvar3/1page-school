// components/MDXLayout.tsx
'use client';

import React from 'react';

export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose dark:prose-invert prose-blue max-w-3xl mx-auto px-4 py-8">
      {children}
    </article>
  );
}
