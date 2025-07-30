// components/MDXLayout.tsx
'use client';

import React from 'react';
import SiteLayout from './SiteLayout'; // or './Layout' if not renamed

export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteLayout>
      <article className="prose dark:prose-invert prose-blue max-w-3xl mx-auto px-4 py-8">
        {children}
      </article>
    </SiteLayout>
  );
}
