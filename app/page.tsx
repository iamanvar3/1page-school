import Link from 'next/link';

export default function CalmLesson() {
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-2">✨ How to Stay Calm Under Pressure</h1>
      <p className="text-lg text-gray-700">Life throws challenges. But you can remain calm. Here's how:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>🧘‍♂️ Breathe deeply: 4 seconds in, 4 hold, 4 out. Slows your heart and clears your mind.</li>
        <li>🎯 Focus on now: Anxiety lives in the future. Bring your mind back to this moment.</li>
        <li>💭 Control what you can: Accept what’s outside your power. Act where you have influence.</li>
        <li>🧠 Reframe the stress: Challenges are training. You’re learning, not failing.</li>
        <li>🫶 Talk to yourself kindly: Say what you'd say to a friend. You deserve your own support.</li>
      </ul>

      <p className="font-semibold text-green-700">Staying calm is strength. Practice it, and you become unshakable.</p>

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
        </ul>
        <p className="mt-4">
          <Link href="/" className="text-gray-600 hover:underline">← Back to Home</Link>
        </p>
      </div>
    </main>
  );
}
