import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>📘 1-Page School</h1>
      <p>Welcome! Here's a powerful 1-page lesson to start with:</p>
      <ul>
        <li>
          <Link href="/lessons/focus">How to Focus Deeply</Link>
        </li>
      </ul>
    </main>
  );
}
