// app/lessons/focus/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FocusLesson() {
  const [search, setSearch] = useState('');
  const lessons = [
    { title: '🧠 How to Focus Deeply', href: '/lessons/focus' },
    { title: '⏳ Manage Your Time', href: '/lessons/time' },
    { title: '✨ How to Stay Calm Under Pressure', href: '/lessons/calm' },
    { title: '📘 Build Strong Habits', href: '/lessons/habits' },
    { title: '💡 Think for Yourself', href: '/lessons/think' },
  ];
  const filtered = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-2">🧠 How to Focus Deeply</h1>
      <p className="text-lg text-gray-700">Deep focus leads to deep work. Here's how to sharpen yours:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>📵 Remove distractions: Silence notifications. Close tabs. Put your phone away.</li>
        <li>⏳ Use a timer: Try the Pomodoro Technique (25 minutes focus, 5 minutes rest).</li>
        <li>📍 Set a clear goal: Know exactly what you’re focusing on and why.</li>
        <li>🌿 Work in silence or nature sounds. Avoid lyrics, noise, or clutter.</li>
        <li>🧘 Start with breath: 3 deep breaths to center your mind before starting.</li>
      </ul>
      <p className="font-semibold text-blue-700">You don’t need more time. You need more focus. Train it daily.</p>

      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">🔗 Related Lessons</h2>
        <input
          type="text"
          placeholder="Search all lessons..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />
        <ul className="list-disc pl-5 space-y-1">
          {filtered.map((lesson, idx) => (
            <li key={idx}>
              <Link href={lesson.href} className="text-blue-600 hover:underline">
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-4">
          <Link href="/" className="text-gray-600 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </main>
  );
}
