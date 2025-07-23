import Link from 'next/link';

export default function ThinkLesson() {
  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-2">💡 Think for Yourself</h1>
      <p className="text-lg text-gray-700">Independent thinking is your mind’s shield in a noisy world.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>🤔 Don’t follow ideas blindly. Ask: “Is this true? Is it good?”</li>
        <li>🧭 Use your values to guide decisions, not trends or pressure.</li>
        <li>📚 Read widely — including things you disagree with — to sharpen your mind.</li>
        <li>🛑 Be okay with saying “I don’t know.” It's the start of wisdom.</li>
        <li>💬 Listen deeply, but decide carefully. Own your beliefs.</li>
      </ul>

      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">🔗 Related Lessons</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <Link href="/lessons/focus" className="text-blue-600 hover:underline">
              🧠 How to Focus Deeply
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
