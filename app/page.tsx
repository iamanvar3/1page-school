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
    <section className="space-y-8 max-w-2xl mx-auto px-6 py-10">
      <div>
        <h1 className="text-3xl font-bold mb-2">📘 1-Page School</h1>
        <p className="text-gray-700">Life-changing lessons. Each one fits on a single page.</p>
      </div>

      <ul className="space-y-4">
        {lessons.map(lesson => (
          <li key={lesson.slug}>
            <Link
              href={`/lessons/${lesson.slug}`}
              className="block border border-gray-300 rounded p-4 hover:bg-blue-50"
            >
              <h2 className="text-xl font-semibold">{lesson.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
