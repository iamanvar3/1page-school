import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📘 1-Page School Lessons</h1>
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
            ✨ Stay Calm Under Pressure
          </Link>
        </li>
      </ul>
    </main>
  );
}
