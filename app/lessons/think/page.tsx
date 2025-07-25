// app/lessons/think/page.tsx
'use client';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export default function ThinkLesson() {
  return (
    <>
      <Breadcrumb />
      <main className="max-w-2xl mx-auto p-6 space-y-6">
        <h1 className="text-4xl font-bold mb-2">💡 Think for Yourself</h1>
        <p className="text-lg text-gray-700">
          Independent thinking is your mind’s shield in a noisy world.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>🧭 Question assumptions—even your own.</li>
          <li>📚 Learn broadly: history, logic, science, art.</li>
          <li>💬 Listen deeply, speak clearly, and revise often.</li>
          <li>🛡️ Don’t outsource your mind. Curate what you consume.</li>
        </ul>
        <p className="font-semibold text-blue-700">
          Thinking is a skill. Protect it.
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
