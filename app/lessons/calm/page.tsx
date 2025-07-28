// ✅ Correct: app/lessons/calm/page.tsx

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function CalmLesson() {
  return (
    <>
      <Breadcrumb />
      <main className="max-w-2xl mx-auto p-6 space-y-6 bg-white/70 dark:bg-gray-900/70 text-black dark:text-white rounded-2xl shadow-lg backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-2">✨ How to Stay Calm Under Pressure</h1>
        <p className="text-lg text-gray-700">Your peace is your power. Don’t let the world steal it.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>🧘 Breathe deeply—slow exhales calm the nervous system.</li>
          <li>⏸ Pause before reacting. Silence is strength.</li>
          <li>🌿 Connect with nature or stillness. It clears the mind.</li>
          <li>🧠 Focus on what you can control. Let go of what you can’t.</li>
          <li>🤲 Surrender outcomes. Do your best, trust the rest.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">📚 Related Lessons</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <Link href="/lessons/focus" className="text-blue-600 hover:underline">
              🧠 How to Focus Deeply
            </Link>
          </li>
          <li>
            <Link href="/lessons/habits" className="text-blue-600 hover:underline">
              📘 Build Strong Habits
            </Link>
          </li>
          <li>
            <Link href="/lessons/think" className="text-blue-600 hover:underline">
              💡 Think for Yourself
            </Link>
          </li>
        </ul>

        <p className="mt-4">
          <Link href="/" className="text-gray-600 hover:underline">← Back to Home</Link>
        </p>
      </main>
    </>
  );
}
