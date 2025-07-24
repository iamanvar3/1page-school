// app/lessons/focus/page.tsx
import Link from 'next/link';

export default function FocusLesson() {
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
        <ul className="list-disc pl-5 space-y-1">
          <li><Link href="/lessons/habits" className="text-blue-600 hover:underline">📘 Build Strong Habits</Link></li>
          <li><Link href="/lessons/calm" className="text-blue-600 hover:underline">✨ How to Stay Calm Under Pressure</Link></li>
        </ul>
        <p className="mt-4"><Link href="/" className="text-gray-600 hover:underline">← Back to Home</Link></p>
      </div>
    </main>
  );
}
