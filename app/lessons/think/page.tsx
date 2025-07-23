export default function Page() {
  return (
    <main className="max-w-2xl mx-auto space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-4">💡 Think for Yourself</h1>
        <p className="mb-6">Independent thinking is your mind’s shield in a noisy world.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>🤔 Don’t follow ideas blindly. Ask: “Is this true? Is it good?”</li>
          <li>🧭 Use your values to guide decisions, not trends or pressure.</li>
          <li>📚 Read widely — including things you disagree with — to sharpen your mind.</li>
          <li>🛑 Be okay with saying “I don’t know.” It's the start of wisdom.</li>
          <li>💬 Listen deeply, but decide carefully. Own your beliefs.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">🔗 Related Lessons</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a href="/lessons/focus" className="text-blue-600 hover:underline">
              🧠 How to Focus Deeply
            </a>
          </li>
          <li>
            <a href="/lessons/calm" className="text-blue-600 hover:underline">
              ✨ How to Stay Calm Under Pressure
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
