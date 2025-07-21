import Link from 'next/link'

const lessons = [
  { title: 'How to Focus Deeply', slug: 'focus' },
  { title: 'How to Stop Procrastinating', slug: 'procrastination' },
  { title: 'How to Build Self-Discipline', slug: 'discipline' },
  { title: 'How to Learn Faster', slug: 'learn-faster' },
]

export default function Home() {
  return (
    <main>
      <h1>📘 1-Page School</h1>
      <p>Life-changing lessons, one page at a time:</p>
      <ul>
        {lessons.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={`/lessons/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <footer>Built with care by Anvar – Powered by 1-Page School</footer>
    </main>
  )
}
