'use client';

import React from 'react';
import SiteLayout from './SiteLayout';

export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteLayout>
      <div className="lesson-bg">
        <article className="prose dark:prose-invert prose-blue max-w-3xl mx-auto px-4 py-8">
          {children}
        </article>
      </div>
    </SiteLayout>
  );
}
