import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold mb-2">📘 1-Page School</h1>
      <p className="text-lg text-gray-700">
        Life-changing lessons, written on a single page. No fluff. Just wisdom that works.
      </p>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">📚 Lessons</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/lessons/focus" className="text-blue-600 hover:underline">
              🧠 How to Focus Deeply
            </Link>
          </li>
          <li>
            <Link href="/lessons/time" className="text-blue-600 hover:underline">
              ⏳ Manage Your Time
            </Link>
          </li>
          <li>
            <Link href="/lessons/think" className="text-blue-600 hover:underline">
              💡 Think for Yourself
            </Link>
          </li>
          <li>
            <Link href="/lessons/calm" className="text-blue-600 hover:underline">
              ✨ How to Stay Calm Under Pressure
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">🌱 What is 1-Page School?</h2>
        <p className="text-gray-700 mt-2">
          1-Page School is a free, online library of powerful, practical wisdom —
          each lesson distilled into one beautiful, readable page.
        </p>
        <p className="text-gray-700 mt-2">
          No logins. No distractions. Just timeless ideas to help you grow.
        </p>
      </section>
    </main>
  );
}
