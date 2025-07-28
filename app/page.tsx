'use client';

import { useState } from 'react';
import Link from 'next/link';

const allLessons = [
  { title: '🧠 How to Focus Deeply', href: '/lessons/focus', summary: 'Cut distractions and enter flow.' },
  { title: '⏳ Manage Your Time', href: '/lessons/time', summary: 'Use time-blocking to master your day.' },
  { title: '✨ Stay Calm Under Pressure', href: '/lessons/calm', summary: 'Keep clarity when chaos strikes.' },
  { title: '📘 Build Strong Habits', href: '/lessons/habits', summary: 'Create routines that truly stick.' },
  { title: '💡 Think for Yourself', href: '/lessons/think', summary: 'Sharpen critical thinking and question the norm.' },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const filtered = allLessons.filter(l => l.title.toLowerCase().includes(search.trim().toLowerCase()));
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Fullscreen background image and gradient overlay */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      {/* Static head for SPA fallback */}
      <title>OneLife | A Guide to Life in One Page</title>
      <meta name="description" content="OneLife helps you understand what life is about. The 1‑Page Book delivers life-changing lessons in one page." />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center py-16 text-white px-4 bg-black/40 rounded-2xl shadow-lg">
          <h1 className="text-5xl sm:text-6xl font-playfair font-bold mb-4">🌍 OneLife</h1>
          <p className="text-lg sm:text-xl font-medium">
            OneLife is a website to understand what life is truly about.<br />
            We believe this book can help change someone’s life.<br />
            That’s why we created the <strong>1‑Page Book</strong> — simple, timeless lessons to live wisely.
          </p>
        </div>
      </section>

      {/* Search Input */}
      <section className="mt-12 px-4 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search lessons..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      {/* Lesson Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 mt-8 max-w-4xl mx-auto">
        {filtered.length ? (
          filtered.map((lesson, idx) => (
            <Link key={idx} href={lesson.href} className="block bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow hover:shadow-md transition duration-200">
              <h2 className="text-xl font-playfair font-semibold mb-1">{lesson.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{lesson.summary}</p>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No lessons found.</p>
        )}
      </section>
    </div>
  );
}
