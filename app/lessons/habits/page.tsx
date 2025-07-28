'use client';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export default function BuildStrongHabits() {
  return (
    <>
      <Breadcrumb />
      <main className="max-w-2xl mx-auto p-6 space-y-6 bg-white/70 dark:bg-gray-900/70 text-black dark:text-white rounded-2xl shadow-lg backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-2">📘 Build Strong Habits</h1>
        <p className="text-lg text-gray-700">
          Want to change your life? Start small and stay consistent.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>🔹 <strong>Pick One Tiny Habit:</strong> Choose a habit so small it feels effortless—like 1 push-up or 1 line of writing.</li>
          <li>🧷 <strong>Anchor It:</strong> Attach your new habit to something you already do (e.g., after brushing your teeth).</li>
          <li>🧼 <strong>Make It Easy:</strong> Prepare your environment to remove friction. Simplicity wins.</li>
          <li>🎉 <strong>Celebrate It:</strong> Smile, fist pump, or say “I’m becoming better!” after every success. Reinforce the habit.</li>
          <li>📆 <strong>Track Progress:</strong> Use a simple calendar or app. Small streaks build big momentum.</li>
          <li>💞 <strong>Be Forgiving:</strong> Missed a day? No guilt. Restart immediately. Consistency, not perfection.</li>
        </ul>
        <p className="font-semibold text-blue-700">
          🌱 Great habits build great lives—start with one today.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-gray-600 hover:underline">
            ← Back to Home
          </Link>
        </p>
      </main>
    </>
  );
}
