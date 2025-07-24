// app/page.tsx
'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [search, setSearch] = useState('');
  const lessons = [
    { title: '🧠 How to Focus Deeply', href: '/lessons/focus' },
    { title: '⏳ Manage Your Time', href: '/lessons/time' },
    { title: '✨ How to Stay Calm Under Pressure', href: '/lessons/calm' },
    { title: '📘 Build Strong Habits', href: '/lessons/habits' },
    { title: '💡 Think for Yourself', href: '/lessons/think' },
  ];

  const filtered = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <>
      <Head>
        <title>1-Page School | Learn Life-Changing Lessons in Under a Minute</title>
        <meta
          name="description"
          content="1-Page School delivers powerful, practical lessons you can read in under a minute. Learn focus, habits, time management, and more."
        />
        <meta property="og:title" content="1-Page School" />
        <meta
          property="og:description"
          content="1-page life lessons you can read and apply instantly. Start learning today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://1page-school.vercel.app" />
        <meta property="og:image" content="https://1page-school.vercel.app/og-image.png" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="focus, time management, productivity, self-improvement, 1-minute lessons, habits, mental clarity" />
      </Head>

      <main className="max-w-2xl mx-auto p-6 space-y-6">
        <h1 className="text-4xl font-bold mb-4">📚 1-Page School</h1>
        <p className="text-lg text-gray-700 mb-4">
          Practical, powerful lessons you can read in under a minute.
        </p>

        <input
          type="text"
          placeholder="Search lessons..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />

        {filtered.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2">
            {filtered.map((lesson, idx) => (
              <li key={idx}>
                <Link href={lesson.href} className="text-blue-600 hover:underline">
                  {lesson.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No lessons found.</p>
        )}
      </main>
    </>
  );
}
