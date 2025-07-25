// app/lessons/calm/page.tsx
import Link from 'next/link';

export default function CalmLesson() {import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function CalmLesson() {
  return (
    <>
      <Breadcrumb />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <h1 className="text-4xl font-bold mb-2">✨ How to Stay Calm Under Pressure</h1>
        <p className="text-lg text-gray-700">Staying calm in chaos is a superpower. Train it like a skill:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>🫁 Breathe deeply: Slow, deep breaths trigger calm in your nervous system.</li>
          <li>🧭 Zoom out: Ask “Will this matter in 1 year?” Perspective softens panic.</li>
          <li>🧍 Pause before reacting: Buy a few seconds. Respond, don’t react.</li>
          <li>📜 Use a calming phrase: “I can handle this.” Repeat it silently.</li>
          <li>🛌 Rest and reset: Fatigue fuels stress. Prioritize good sleep and breaks.</li>
        </ul>
        <p className="font-semibold text-blue-700">Calmness isn't luck. It's practiced. Start today.</p>
        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">🔗 Related Lessons</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><Link href="/lessons/focus" className="text-blue-600 hover:underline">🧠 How to Focus Deeply</Link></li>
            <li><Link href="/lessons/habits" className="text-blue-600 hover:underline">📘 Build Strong Habits</Link></li>
          </ul>
          <p className="mt-4"><Link href="/" className="text-gray-600 hover:underline">← Back to Home</Link></p>
        </div>
      </main>
    </>
  );
}
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function CalmLesson() {
  return (
    <>
      <Breadcrumb />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <h1 className="text-4xl font-bold mb-2">✨ How to Stay Calm Under Pressure</h1>
        <p className="text-lg text-gray-700">Staying calm in chaos is a superpower. Train it like a skill:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>🫁 Breathe deeply: Slow, deep breaths trigger calm in your nervous system.</li>
          <li>🧭 Zoom out: Ask “Will this matter in 1 year?” Perspective softens panic.</li>
          <li>🧍 Pause before reacting: Buy a few seconds. Respond, don’t react.</li>
          <li>📜 Use a calming phrase: “I can handle this.” Repeat it silently.</li>
          <li>🛌 Rest and reset: Fatigue fuels stress. Prioritize good sleep and breaks.</li>
        </ul>
        <p className="font-semibold text-blue-700">Calmness isn't luck. It's practiced. Start today.</p>
        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">🔗 Related Lessons</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><Link href="/lessons/focus" className="text-blue-600 hover:underline">🧠 How to Focus Deeply</Link></li>
            <li><Link href="/lessons/habits" className="text-blue-600 hover:underline">📘 Build Strong Habits</Link></li>
          </ul>
          <p className="mt-4"><Link href="/" className="text-gray-600 hover:underline">← Back to Home</Link></p>
        </div>
      </main>
    </>
  );
}

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-2">✨ How to Stay Calm Under Pressure</h1>
      <p className="text-lg text-gray-700">Staying calm in chaos is a superpower. Train it like a skill:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>🫁 Breathe deeply: Slow, deep breaths trigger calm in your nervous system.</li>
        <li>🧭 Zoom out: Ask “Will this matter in 1 year?” Perspective softens panic.</li>
        <li>🧍 Pause before reacting: Buy a few seconds. Respond, don’t react.</li>
        <li>📜 Use a calming phrase: “I can handle this.” Repeat it silently.</li>
        <li>🛌 Rest and reset: Fatigue fuels stress. Prioritize good sleep and breaks.</li>
      </ul>
      <p className="font-semibold text-blue-700">Calmness isn't luck. It's practiced. Start today.</p>
      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">🔗 Related Lessons</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><Link href="/lessons/focus" className="text-blue-600 hover:underline">🧠 How to Focus Deeply</Link></li>
          <li><Link href="/lessons/habits" className="text-blue-600 hover:underline">📘 Build Strong Habits</Link></li>
        </ul>
        <p className="mt-4"><Link href="/" className="text-gray-600 hover:underline">← Back to Home</Link></p>
      </div>
    </main>
  );
}
