// app/page.tsx

import Link from 'next/link';

export default function Home() {
  const lessons = [
    { slug: 'focus', title: '🧠 How to Focus Deeply' },
    { slug: 'time', title: '⏳ Manage Your Time' },
    { slug: 'calm', title: '✨ Stay Calm Under Pressure' },
    { slug: 'habits', title: '📘 Build Strong Habits' },
  ];

  return (
    <section className="pl-8 pr-4 pt-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">📘 1-Page School</h1>
        <p className="text-gray-700">Life-changing lessons. Each one fits on a single page.</p>
      </div>

      <ul classNam
