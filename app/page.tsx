'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Lottie from 'lottie-react';
import animationData from '../public/animations/life.json'; // Make sure this file exists

const allLessons = [
  { title: '🧠 How to Focus Deeply', href: '/lessons/focus', summary: 'Train your mind to cut distractions and enter flow state.' },
  { title: '⏳ Manage Your Time', href: '/lessons/time', summary: 'Master your day with time-blocking and priority focus.' },
  { title: '✨ How to Stay Calm Under Pressure', href: '/lessons/calm', summary: 'Practical tools to keep your mind clear in chaos.' },
  { title: '📘 Build Strong Habits', href: '/lessons/habits', summary: 'Create routines that stick and fuel long-term growth.' },
  { title: '💡 Think for Yourself', href: '/lessons/think', summary: 'Sharpen your critical thinking and question the norm.' },
  {
    title: '🧬 Life Skills',
    href: '/lessons/life-skills',
    summary: 'Master confidence, relationships, emotional control, and more.',
  },
];

export default function Home() {
  const [search, setSearch] = useState('');

  const filtered = allLessons.filter(lesson =>
    lesson.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="homepage">
      <Head>
        <title>OneLife | A Guide to Life in One Page</title>
        <meta name="description" content="OneLife is a website to understand what life is truly about. The 1-Page Book delivers life-changing lessons in a single page." />
      </Head>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <section className="rounded-3xl p-10 text-white shadow-xl relative overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 border border-white/20 dark:border-gray-800/40">
          {/* Animated gradient overlay */}
          <div
            className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-blue-700 via-purple-500 to-blue-400 opacity-70"
            style={{ backgroundSize: '200% 200%', animation: 'gradientBG 8s ease-in-out infinite' }}
          />
          {/* Globe SVG overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Globe_icon.svg')] bg-center bg-no-repeat bg-contain z-10" />

          <div className="relative z-20 max-w-3xl mx-auto text-center">
            <Lottie animationData={animationData} loop={true} className="w-48 h-48 mx-auto mb-4" />
            <article className="prose dark:prose-invert prose-blue mx-auto">
              <h1 className="text-5xl sm:text-6xl font-playfair font-bold mb-4 drop-shadow-lg">
                🌍 OneLife
              </h1>
              <p className="text-lg sm:text-xl font-medium drop-shadow">
                <strong>OneLife</strong> is a website to understand what life is truly about.<br />
                We believe this book can help change someone’s life.<br />
                That’s why we created the <strong>1-Page Book</strong> — a simple guide with timeless lessons to help you live wisely.
              </p>
            </article>
          </div>
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

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 rounded-2xl shadow-inner">
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
