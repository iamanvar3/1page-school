import Link from 'next/link';

export default function FocusLesson() {
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-2">🧠 How to Focus Deeply</h1>
      <p className="text-lg text-gray-700">
        Silence distractions and train your mind to go deep.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>🔕 Silence distractions: turn off notifications, find a quiet place.</li>
        <li>🎯 Set a clear goal before starting any session.</li>
        <li>⏲️ Use the timer method: 25–45 minutes of work, 5–10 minute breaks.</li>
        <li>🍃 Choose silence or nature sounds over lyrics or noise.</li>
        <li>🧠 When your mind wanders, gently bring it back. That’s the practice.</li>
        <li>📴 Go offline if possible. Depth comes from disconnection.</li>
        <li>💡 Deep work builds deep understanding. Prioritize it.</li>
      </ul>

      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">🔗 Related Lessons</h2>
        <ul className="list-disc pl-5 space-y-1">
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
        <p className="mt-4">
          <Link href="/" className="text-gray-600 hover:underline">← Back to Home</Link>
        </p>
      </div>
    </main>
  );
}
