import LessonCard from '../components/LessonCard';

export default function Home() {
  const lessons = [
    { slug: 'focus', title: '🧠 How to Focus Deeply' },
    { slug: 'time', title: '⏳ Manage Your Time' },
    { slug: 'calm', title: '✨ Stay Calm Under Pressure' },
    { slug: 'habits', title: '📘 Build Strong Habits' },
  ];

  return (
    <main className="flex justify-center px-4 pt-10">
      <section className="w-full max-w-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">📘 1-Page School</h1>
          <p className="text-gray-700">Life-changing lessons. Each one fits on a single page.</p>
        </div>

        <ul className="space-y-4">
          {lessons.map((lesson) => (
            <li key={lesson.slug}>
              <LessonCard title={lesson.title} slug={lesson.slug} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
