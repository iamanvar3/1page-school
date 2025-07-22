// pages/index.tsx

import Link from "next/link";

export default function Home() {
  const lessons = [
    {
      title: "How to Focus Deeply",
      slug: "focus",
      emoji: "🧠",
    },
    // Add more lessons here
  ];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>📘 1-Page School</h1>
      <p style={{ marginBottom: "1rem" }}>Choose a life-changing lesson:</p>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.slug} style={{ margin: "0.5rem 0" }}>
            <Link href={`/lessons/${lesson.slug}`}>
              <span style={{ fontSize: "1.1rem", cursor: "pointer" }}>
                {lesson.emoji} {lesson.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
