'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const allLessons = [
  { title: '🧠 How to Focus Deeply', href: '/lessons/focus', summary: 'Train your mind to cut distractions and enter flow state.' },
  { title: '⏳ Manage Your Time', href: '/lessons/time', summary: 'Master your day with time-blocking and priority focus.' },
  { title: '✨ How to Stay Calm Under Pressure', href: '/lessons/calm', summary: 'Practical tools to keep your mind clear in chaos.' },
  { title: '📘 Build Strong Habits', href: '/lessons/habits', summary: 'Create routines that stick and fuel long-term growth.' },
  { title: '💡 Think for Yourself', href: '/lessons/think', summary: 'Sharpen your critical thinking and question the norm.' },
];

export default function Home() {
  const [search, setSearch] = useState('');

  const filtered = allLessons.filter(lesson =>
    lesson.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="homepage">
      <Head>
        <title>1-Page School | Learn Life-Changing Lessons in Under a Minute</title>
        <meta name="description" content="1-Page School delivers powerful, practical lessons you can read in under a minute. Learn focus, habits, time management, and more." />
        <meta property="og:title" content="1-Page School" />
        <meta property="og:description" content="1-page life lessons you can read and apply instantly. Start learning today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://1page-school.vercel.app" />
        <meta property="og:image" content="https://1page-school.vercel.app/og-image.png" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
            📚 1-Page School
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Life-changing lessons. Always just one page.
          </p>
        </section>

        <section>
          <input
            type="text"
            placeholder="Search lessons..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.length > 0 ? (
            filtered.map((lesson, idx) => (
              <Link
                key={idx}
                href={lesson.href}
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow hover:shadow-md transition duration-200"
              >
                <h2 className="text-xl font-playfair font-semibold mb-1">{lesson.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{lesson.summary}</p>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No lessons found.</p>
          )}
        </section>
      </main>
    </div>
  );
}
