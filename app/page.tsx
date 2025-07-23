export default function Home() { 
  return (
    <main className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">📘 1-Page School</h1>
      <p className="mb-6">Each page, a life-changing lesson.</p>
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
    </main>
  );
}
