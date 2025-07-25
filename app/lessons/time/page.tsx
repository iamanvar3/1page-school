import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
export default function TimeLesson() {
  return (
    <>
      <Breadcrumb />
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-2">⏳ Manage Your Time</h1>
      <p className="text-lg text-gray-700">Spend it on what truly matters.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>🗓 Plan your day the night before. Clarity saves hours.</li>
        <li>🎯 Focus on 1–3 meaningful tasks daily. Small wins stack up.</li>
        <li>📵 Set boundaries: no endless scrolling, batch check messages.</li>
        <li>🍃 Make space for silence. Use your time to think and reflect.</li>
        <li>🧘 Time is your most sacred resource. Spend it on what truly matters — like prayer, learning, health, and rest.</li>
      </ul>

      <div>
        <h2 className="text-xl font-semibold mt-6">📚 Examples of Meaningful Time Use</h2>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>🛐 Prayer and spiritual connection</li>
          <li>📖 Reading to grow your mind and soul</li>
          <li>💪 Exercise and physical health</li>
          <li>😴 Quality sleep and rest</li>
          <li>📓 Learning new skills or improving existing ones</li>
          <li>🤝 Quality time with family or those you love</li>
        </ul>
      </div>

      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">🔗 Related Lessons</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <Link href="/lessons/focus" className="text-blue-600 hover:underline">
              🧠 How to Focus Deeply
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
